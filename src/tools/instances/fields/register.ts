import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';

export function registerFieldsTools(server: McpServer, sdk: any) {
    server.tool(
        "get-fields",
        "Get all fields of a content model",
        { MODEL_ZUID: z.string().describe("Model ZUID") },
        async ({ MODEL_ZUID }) => {
            const data = await sdk.instance.getModelFields(MODEL_ZUID);

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
        "get-field",
        "Get a specific field of a content model",
        {
            MODEL_ZUID: z.string().describe("Model ZUID"),
            FIELD_ZUID: z.string().describe("Field ZUID")
        },
        async ({ MODEL_ZUID, FIELD_ZUID }) => {
            const data = await sdk.instance.getModelField(MODEL_ZUID, FIELD_ZUID);

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