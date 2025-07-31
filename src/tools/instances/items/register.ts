import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';

export function registerItemsTools(server: McpServer, sdk: any) {
    server.tool(
        "get-items",
        "Returns the most recently edited item, by latest version and date created, on a collection content object",
        {
            MODEL_ZUID: z.string().describe("Model ZUID")
        },
        async ({ MODEL_ZUID }) => {
            try {
                const data = await sdk.instance.getItems(MODEL_ZUID);

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
        "get-item",
        "Returns a single content item object",
        {
            MODEL_ZUID: z.string().describe("Model ZUID"),
            ITEM_ZUID: z.string().describe("Content Item ZUID")
        },
        async ({ MODEL_ZUID, ITEM_ZUID }) => {
            try {
                const data = await sdk.instance.getItem(MODEL_ZUID, ITEM_ZUID);

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
        "search-content-item",
        "Allows searching for contents by either ZUID, meta text values or path-related values",
        {
            SEARCH_TERM: z.string().describe("Search Term"),
        },
        async ({ SEARCH_TERM }) => {
            try {
                const data = await sdk.instance.findItem(SEARCH_TERM);

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