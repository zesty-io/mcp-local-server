import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';

export function registerItemLabelingsTools(server: McpServer, sdk: any) {
    server.tool(
        "get-item-labelings",
        "Returns item labelings of a content item in a content model",
        {
            MODEL_ZUID: z.string().describe("Model ZUID"),
            ITEM_ZUID: z.string().describe("Content Item ZUID")
        },
        async ({ MODEL_ZUID, ITEM_ZUID }) => {
            try {
                const data = await sdk.instance.fetchItemLabelings(MODEL_ZUID, ITEM_ZUID);

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
        "get-item-labeling",
        "Returns a specific item labeling of a content item in a content model",
        {
            MODEL_ZUID: z.string().describe("Model ZUID"),
            ITEM_ZUID: z.string().describe("Content Item ZUID"),
            LABEL_ZUID: z.string().describe("Label ZUID")
        },
        async ({ MODEL_ZUID, ITEM_ZUID, LABEL_ZUID }) => {
            try {
                const data = await sdk.instance.fetchItemLabeling(MODEL_ZUID, ITEM_ZUID, LABEL_ZUID);

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