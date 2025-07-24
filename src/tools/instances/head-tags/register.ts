import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';

export function registerHeadTagsTools(server: McpServer, sdk: any) {
    server.tool(
        "get-head-tags",
        "Returns all headtags",
        {},
        async () => {
            const data = await sdk.instance.getHeadTags();

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
        "get-head-tag",
        "Returns a specific headtag",
        { HEADTAG_ZUID: z.string().describe("Headtag ZUID") },
        async ({ HEADTAG_ZUID }) => {
            const data = await sdk.instance.getHeadTag(HEADTAG_ZUID);

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