import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { registerAccountsTools } from './accounts/register.js'

export function registerAllTools(server: McpServer) {
  registerAccountsTools(server);
}