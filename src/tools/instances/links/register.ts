import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';

export function registerLinksTools(server: McpServer, sdk: any) {
    server.tool(
        "get-links",
        "Retrieves all link created within an instance",
        {},
        async () => {
            try {
                const data = await sdk.instance.fetchLinks();

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
        "get-link",
        "Retrieves a specific link",
        { LINK_ZUID: z.string().describe("Link ZUID") },
        async ({ LINK_ZUID }) => {
            try {
                const data = await sdk.instance.fetchLink(LINK_ZUID);

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