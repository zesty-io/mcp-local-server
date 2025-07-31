import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';

export function registerLabelsTools(server: McpServer, sdk: any) {
    server.tool(
        "get-labels",
        "Retrieves Labels",
        {},
        async () => {
            try {
                const data = await sdk.instance.fetchLabels();

                return {
                    content: [
                        {
                        type: "text",
                        text: JSON.stringify(data),
                        },
                    ],
                };
            } catch (error: unknown) {
                const errorMessage = error instanceof Error ? error.message : String(error)
                return {
                    isError: true,
                    content: [
                        {
                            type: 'text',
                            text: `Error: ${errorMessage}`,
                        },
                    ],
                }
            }
        },
    );

    server.tool(
        "get-label",
        "Retrieves specific Label",
        { LABEL_ZUID: z.string().describe("Label ZUID") },
        async ({ LABEL_ZUID }) => {
            try {
                const data = await sdk.instance.fetchLabel(LABEL_ZUID);

                return {
                    content: [
                        {
                        type: "text",
                        text: JSON.stringify(data),
                        },
                    ],
                };
            } catch (error: unknown) {
                const errorMessage = error instanceof Error ? error.message : String(error)
                return {
                    isError: true,
                    content: [
                        {
                            type: 'text',
                            text: `Error: ${errorMessage}`,
                        },
                    ],
                }
            }
        },
    );
}