import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';

export function registerStylesheetsTools(server: McpServer, sdk: any) {
    server.tool(
        "get-stylesheets",
        "Retrieves all stylesheets",
        {},
        async () => {
            const data = await sdk.instance.getStylesheets();

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
        "get-stylesheet",
        "Retrieves specific stylesheet",
        { STYLESHEET_ZUID: z.string().describe("Stylesheet ZUID") },
        async ({ STYLESHEET_ZUID }) => {
            const data = await sdk.instance.getStylesheet(STYLESHEET_ZUID);

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