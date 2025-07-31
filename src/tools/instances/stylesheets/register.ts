import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';

export function registerStylesheetsTools(server: McpServer, sdk: any) {
    server.tool(
        "get-stylesheets",
        "Retrieves all stylesheets",
        {},
        async () => {
            try {
                const data = await sdk.instance.getStylesheets();

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
        "get-stylesheet",
        "Retrieves specific stylesheet",
        { STYLESHEET_ZUID: z.string().describe("Stylesheet ZUID") },
        async ({ STYLESHEET_ZUID }) => {
            try {
                const data = await sdk.instance.getStylesheet(STYLESHEET_ZUID);

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