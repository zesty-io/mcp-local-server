import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';

export function registerAuditLogsTools(server: McpServer, sdk: any) {
    server.tool(
        "get-audit-logs",
        "Get all Audit trails of a given instance",
        {},
        async () => {
            const data = await sdk.instance.getAuditLogs();

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
        "get-audit-log",
        "Get a specific audit trail by audit ZUID",
        { AUDIT_ZUID: z.string().describe("Audit ZUID") },
        async ({ AUDIT_ZUID }) => {
            const data = await sdk.instance.getAuditLog(AUDIT_ZUID);

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