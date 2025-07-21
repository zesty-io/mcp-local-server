import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';

export function registerAuthTools(server: McpServer, sdk: any) {
    server.tool(
        "verify-session",
        "Verify if session token is valid",
        {},
        async () => {
            const session = await sdk.auth.verifyToken(process.env.ZESTY_SESSION_TOKEN);

            return {
                content: [
                    {
                    type: "text",
                    text: JSON.stringify(session),
                    },
                ],
            };
        },
    );
}