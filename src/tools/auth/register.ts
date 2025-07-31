import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';

export function registerAuthTools(server: McpServer, sdk: any) {
    server.tool(
        "verify-session",
        "Verify if session token is valid",
        {},
        async () => {
            try {
                const session = await sdk.auth.verifyToken(process.env.ZESTY_SESSION_TOKEN);

                return {
                    content: [
                        {
                        type: "text",
                        text: JSON.stringify(session),
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