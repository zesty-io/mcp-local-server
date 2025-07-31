import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';

export function registerFieldsTools(server: McpServer, sdk: any) {
    server.tool(
        "get-fields",
        "Get all fields of a content model",
        { MODEL_ZUID: z.string().describe("Model ZUID") },
        async ({ MODEL_ZUID }) => {
            try {
                const data = await sdk.instance.getModelFields(MODEL_ZUID);

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
        "get-field",
        "Get a specific field of a content model",
        {
            MODEL_ZUID: z.string().describe("Model ZUID"),
            FIELD_ZUID: z.string().describe("Field ZUID")
        },
        async ({ MODEL_ZUID, FIELD_ZUID }) => {
            try {
                const data = await sdk.instance.getModelField(MODEL_ZUID, FIELD_ZUID);

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