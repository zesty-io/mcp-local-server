import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';

export function registerLinksTools(server: McpServer, sdk: any) {
    server.tool(
        "get-links",
        "Retrieves all link created within an instance",
        {},
        async () => {
            const data = await sdk.instance.fetchLinks();

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
        "get-link",
        "Retrieves a specific link",
        { LINK_ZUID: z.string().describe("Link ZUID") },
        async ({ LINK_ZUID }) => {
            const data = await sdk.instance.fetchLink(LINK_ZUID);

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