import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';

export function registerMediaTools(server: McpServer, sdk: any) {
    server.tool(
        "get-bins",
        "Return all bins of an instance",
        {},
        async () => {
            const data = await sdk.media.getBins();

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
        "get-bin",
        "Return a bin",
        { BIN_ZUID: z.string().describe("Bin ZUID") },
        async ({ BIN_ZUID }) => {
            const data = await sdk.media.getBin(BIN_ZUID);

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
        "get-groups",
        "Return groups of a bin",
        { BIN_ZUID: z.string().describe("Bin ZUID") },
        async ({ BIN_ZUID }) => {
            const data = await sdk.media.getGroups(BIN_ZUID);

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
        "get-group",
        "Return a group",
        { GROUP_ZUID: z.string().describe("Group ZUID") },
        async ({ GROUP_ZUID }) => {
            const data = await sdk.media.getGroup(GROUP_ZUID);

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
        "get-files",
        "Return files of a bin",
        { BIN_ZUID: z.string().describe("Bin ZUID") },
        async ({ BIN_ZUID }) => {
            const data = await sdk.media.getFiles(BIN_ZUID);

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
        "get-file",
        "Return a file",
        { FILE_ZUID: z.string().describe("File ZUID") },
        async ({ FILE_ZUID }) => {
            const data = await sdk.media.getFile(FILE_ZUID);

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