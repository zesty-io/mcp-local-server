import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';

export function registerItemPublishingsTools(server: McpServer, sdk: any) {
    server.tool(
        "get-item-publishings",
        "Retrieves all item publishing records of a given item",
        {
            MODEL_ZUID: z.string().describe("Model ZUID"),
            ITEM_ZUID: z.string().describe("Content Item ZUID")
        },
        async ({ MODEL_ZUID, ITEM_ZUID }) => {
            const data = await sdk.instance.getItemPublishings(MODEL_ZUID, ITEM_ZUID);

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
        "get-item-publishing",
        "Retrieve an item publishing record of a given item",
        {
            MODEL_ZUID: z.string().describe("Model ZUID"),
            ITEM_ZUID: z.string().describe("Content Item ZUID"),
            PUBLISHING_ZUID: z.string().describe("Publishing ZUID")
        },
        async ({ MODEL_ZUID, ITEM_ZUID, PUBLISHING_ZUID }) => {
            const data = await sdk.instance.getItemPublishing(MODEL_ZUID, ITEM_ZUID, PUBLISHING_ZUID);

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