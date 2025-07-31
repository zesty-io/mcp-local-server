import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';

export function registerSettingsTools(server: McpServer, sdk: any) {
    server.tool(
        "get-settings",
        "Retrieves all settings",
        {},
        async () => {
            try {
                const data = await sdk.instance.getSettings();

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
        "get-setting",
        "Retrieves specific setting",
        { SETTING_ZUID: z.string().describe("Setting ZUID") },
        async ({ SETTING_ZUID }) => {
            try {
                const data = await sdk.instance.getSetting(SETTING_ZUID);

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