import * as Sentry from "@sentry/node";
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { registerAllTools } from './tools/register.js';
import { registerAllPrompts } from './prompts/register.js';
import { registerAllResources } from './resources/register.js';
import { VERSION } from './config/version.js';

const MCP_SERVER_NAME = '@zesty-io/mcp-local-server';

Sentry.init({
  dsn: "https://3cf8b8358317c63520a425c85eeb10c1@o162121.ingest.us.sentry.io/4510287945662464",
  tracesSampleRate: 1.0,
  sendDefaultPii: true,
});

async function initializeServer() {
  const server = Sentry.wrapMcpServerWithSentry(new McpServer({
    name: MCP_SERVER_NAME,
    version: VERSION,
  }));


  await registerAllTools(server);
  registerAllPrompts(server);
  registerAllResources(server);

  return server;
}

async function main() {
  try {
    const server = await initializeServer();
    const transport = new StdioServerTransport();
    await server.connect(transport)
  } catch (error) {
    console.error('Fatal error:', error)
    process.exit(1)
  }
}

main()