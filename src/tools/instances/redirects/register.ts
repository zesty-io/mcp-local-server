import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';

export function registerRedirectsTools(server: McpServer, sdk: any) {
    server.tool(
        "get-redirects",
        "Retrieves all redirects",
        {},
        async () => {
            try {
                const data = await sdk.instance.fetchRedirects();

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
        "get-redirect",
        "Retrieves specific redirect",
        { REDIRECT_ZUID: z.string().describe("Redirect ZUID") },
        async ({ REDIRECT_ZUID }) => {
            try {
                const data = await sdk.instance.fetchRedirect(REDIRECT_ZUID);

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