import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';

export function registerItemVersionsTools(server: McpServer, sdk: any) {
    server.tool(
        "get-item-versions",
        "Retrieves all item versions of a given item",
        {
            MODEL_ZUID: z.string().describe("Model ZUID"),
            ITEM_ZUID: z.string().describe("Content Item ZUID")
        },
        async ({ MODEL_ZUID, ITEM_ZUID }) => {
            try {
                const data = await sdk.instance.getItemVersions(MODEL_ZUID, ITEM_ZUID);

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
        "get-item-version",
        "Retrieves specific item version of a given item",
        {
            MODEL_ZUID: z.string().describe("Model ZUID"),
            ITEM_ZUID: z.string().describe("Content Item ZUID"),
            VERSION: z.string().describe("Item Version")
        },
        async ({ MODEL_ZUID, ITEM_ZUID, VERSION }) => {
            try {
                const data = await sdk.instance.getItemVersion(MODEL_ZUID, ITEM_ZUID, VERSION);

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