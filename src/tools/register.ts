import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import SDK from '@zesty-io/sdk';
import { registerAccountsTools } from './accounts/register.js';
import { registerAuthTools } from './auth/register.js';
import { registerInstancesTools } from './instances/register.js';
import { registerMediaTools } from './media/register.js';

export function registerAllTools(server: McpServer) {
    const opts = process.env.ZESTY_AUTH_API
    ? {
        authURL: process.env.ZESTY_AUTH_API,
        accountsAPIURL: process.env.ZESTY_ACCOUNTS_API,
        instancesAPIURL: `https://${process.env.ZESTY_INSTANCE_ZUID}${process.env.ZESTY_INSTANCES_API}`,
        mediaAPIURL: process.env.ZESTY_MEDIA_MANAGER_API
      }
    : undefined;

  const sdk = new SDK(process.env.ZESTY_INSTANCE_ZUID, process.env.ZESTY_SESSION_TOKEN, opts);

  registerAccountsTools(server, sdk);
  registerAuthTools(server, sdk);
  registerInstancesTools(server, sdk);
  registerMediaTools(server, sdk);
}