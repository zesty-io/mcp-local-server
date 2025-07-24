import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';

export function registerWebHeadersTools(server: McpServer, sdk: any) {
    server.tool(
        "get-web-headers",
        "Returns all legacy headers",
        {},
        async () => {
            const data = await sdk.instance.getWebHeaders();

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