import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { getZestyAccountsRequest, postZestyAccountsRequest } from '../../utils/request.js'
import { formatInstances, formatInstance } from '../../utils/formatters.js'
import { z } from 'zod';

export function registerAccountsTools(server: McpServer) {
    server.tool(
        "get-instances",
        "Get all instances a user has access to",
        {},
        async () => {
            const path = `/instances`;
            const resp = await getZestyAccountsRequest(path);

            if (!resp) {
                return {
                    content: [
                    {
                        type: "text",
                        text: "Failed to retrieve instances for user",
                    },
                    ],
                };
            }

            const instances = resp.data || [];
            if (instances.length === 0) {
                return {
                    content: [
                    {
                        type: "text",
                        text: `No active instances for user`,
                    },
                    ],
                };
            }

            const formattedInstances = resp.data.map(formatInstances);
            return {
                content: [
                    {
                    type: "text",
                    text: `Active instances for user:\n\n${formattedInstances.join("\n")}`,
                    },
                ],
            };
        },
    );

    server.tool(
        "get-instance",
        "Gets a single instance by its ZUID",
        {
            ZUID: z.string().describe("ZUID of instance")
        },
        async ({ ZUID }) => {
            const path = `/instances/${ZUID}`;
            const resp = await getZestyAccountsRequest(path);

            if (!resp) {
                return {
                    content: [
                    {
                        type: "text",
                        text: `Failed to retrieve instance ${ZUID}`,
                    },
                    ],
                };
            }

            const instances = resp.data || [];
            if (instances.length === 0) {
                return {
                    content: [
                    {
                        type: "text",
                        text: `Instance with ZUID ${ZUID} not found`,
                    },
                    ],
                };
            }

            const formattedInstance = formatInstance(resp.data);
            return {
                content: [
                    {
                    type: "text",
                    text: `Instance found: :\n\n${formattedInstance}`,
                    },
                ],
            };
        },
    );

    server.tool(
        "create-instances",
        "Creates an instance. This will automatically generate a new instance ZUID and the user making the Create Instance request will be set as the Owner",
        {
            name: z.string().describe("Name of instance")
        },
        async ({ name }) => {
            const path = `/instances`;
            const resp = await postZestyAccountsRequest(path, { name });

            if (!resp) {
                return {
                    content: [
                    {
                        type: "text",
                        text: "Failed to create instance",
                    },
                    ],
                };
            }

            const formattedInstance = formatInstance(resp.data);
            return {
                content: [
                    {
                    type: "text",
                    text: `Successfully created instance:\n\n${formattedInstance}`,
                    },
                ],
            };
        },
    );
}