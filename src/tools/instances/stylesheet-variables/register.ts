import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';

export function registerStylesheetVariablesTools(server: McpServer, sdk: any) {
    server.tool(
        "get-stylesheet-variables",
        "Retrieves all stylesheet variables",
        {},
        async () => {
            try {
                const data = await sdk.instance.fetchStylesheetVariables();

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
        "get-stylesheet-variable",
        "Retrieves specific stylesheet variable",
        { VARIABLE_ZUID: z.string().describe("Stylesheet ZUID") },
        async ({ VARIABLE_ZUID }) => {
            try {
                const data = await sdk.instance.fetchStylesheetVariable(VARIABLE_ZUID);

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