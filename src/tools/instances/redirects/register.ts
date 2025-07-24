import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';

export function registerRedirectsTools(server: McpServer, sdk: any) {
    server.tool(
        "get-redirects",
        "Retrieves all redirects",
        {},
        async () => {
            const data = await sdk.instance.fetchRedirects();

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
        "get-redirect",
        "Retrieves specific redirect",
        { REDIRECT_ZUID: z.string().describe("Redirect ZUID") },
        async ({ REDIRECT_ZUID }) => {
            const data = await sdk.instance.fetchRedirect(REDIRECT_ZUID);

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