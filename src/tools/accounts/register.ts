import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';

export function registerAccountsTools(server: McpServer, sdk: any) {
    server.tool(
        "get-instances",
        "Get all instances a user has access to",
        {},
        async () => {
            const instances = await sdk.account.getInstances();

            if (!instances) {
                return {
                    content: [
                    {
                        type: "text",
                        text: "Failed to retrieve instances for user",
                    },
                    ],
                };
            }

            if (instances.data.length === 0) {
                return {
                    content: [
                    {
                        type: "text",
                        text: `No active instances for user`,
                    },
                    ],
                };
            }

            return {
                content: [
                    {
                    type: "text",
                    text: JSON.stringify(instances.data),
                    },
                ],
            };
        },
    );

    server.tool(
        "get-instance",
        "Gets a single instance by its ZUID",
        {},
        async () => {
            const instance = await sdk.account.getInstance();

            if (!instance) {
                return {
                    content: [
                    {
                        type: "text",
                        text: `Failed to retrieve instance ${process.env.ZESTY_INSTANCE_ZUID}`,
                    },
                    ],
                };
            }

            if (instance.data.length === 0) {
                return {
                    content: [
                    {
                        type: "text",
                        text: `Current instance with ZUID ${process.env.ZESTY_INSTANCE_ZUID} not found`,
                    },
                    ],
                };
            }

            return {
                content: [
                    {
                    type: "text",
                    text: JSON.stringify(instance.data),
                    },
                ],
            };
        },
    );

    server.tool(
        "get-instance-users",
        "Returns all the users of the given instance ZUID",
        {},
        async () => {
            const instanceUsers = await sdk.account.getInstanceUsers();

            if (!instanceUsers) {
                return {
                    content: [
                    {
                        type: "text",
                        text: `Failed to retrieve instance users for ${process.env.ZESTY_INSTANCE_ZUID}`,
                    },
                    ],
                };
            }

            if (instanceUsers.data.length === 0) {
                return {
                    content: [
                    {
                        type: "text",
                        text: `Instance users for ${process.env.ZESTY_INSTANCE_ZUID} not found`,
                    },
                    ],
                };
            }

            return {
                content: [
                    {
                    type: "text",
                    text: JSON.stringify(instanceUsers.data),
                    },
                ],
            };
        },
    );
}