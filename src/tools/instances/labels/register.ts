import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';

export function registerLabelsTools(server: McpServer, sdk: any) {
    server.tool(
        "get-labels",
        "Retrieves Labels",
        {},
        async () => {
            const data = await sdk.instance.fetchLabels();

            return {
                content: [
                    {
                    type: "text",
                    text: JSON.stringify(data),
                    },
                ],
            };
        },
    );

    server.tool(
        "get-label",
        "Retrieves specific Label",
        { LABEL_ZUID: z.string().describe("Label ZUID") },
        async ({ LABEL_ZUID }) => {
            const data = await sdk.instance.fetchLabel(LABEL_ZUID);

            return {
                content: [
                    {
                    type: "text",
                    text: JSON.stringify(data),
                    },
                ],
            };
        },
    );
}