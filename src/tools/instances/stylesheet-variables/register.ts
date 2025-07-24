import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';

export function registerStylesheetVariablesTools(server: McpServer, sdk: any) {
    server.tool(
        "get-stylesheet-variables",
        "Retrieves all stylesheet variables",
        {},
        async () => {
            const data = await sdk.instance.fetchStylesheetVariables();

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
        "get-stylesheet-variable",
        "Retrieves specific stylesheet variable",
        { VARIABLE_ZUID: z.string().describe("Stylesheet ZUID") },
        async ({ VARIABLE_ZUID }) => {
            const data = await sdk.instance.fetchStylesheetVariable(VARIABLE_ZUID);

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