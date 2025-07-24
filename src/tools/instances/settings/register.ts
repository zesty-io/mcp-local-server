import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';

export function registerSettingsTools(server: McpServer, sdk: any) {
    server.tool(
        "get-settings",
        "Retrieves all settings",
        {},
        async () => {
            const data = await sdk.instance.getSettings();

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
        "get-setting",
        "Retrieves specific setting",
        { SETTING_ZUID: z.string().describe("Setting ZUID") },
        async ({ SETTING_ZUID }) => {
            const data = await sdk.instance.getSetting(SETTING_ZUID);

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