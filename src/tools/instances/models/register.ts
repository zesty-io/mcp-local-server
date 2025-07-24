import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';

export function registerModelsTools(server: McpServer, sdk: any) {
    server.tool(
        "get-models",
        "Retrieves all models",
        {},
        async () => {
            const data = await sdk.instance.getModels();

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
        "get-model",
        "Retrieves specific model",
        { MODEL_ZUID: z.string().describe("Model ZUID") },
        async ({ MODEL_ZUID }) => {
            const data = await sdk.instance.getModel(MODEL_ZUID);

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