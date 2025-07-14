import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { registerAllTools } from './tools/index.js'

async function initializeServer() {
  const server = new McpServer({
    name: '@zesty-io/mcp-local-server',
    version: '1.0.0',
  })

  registerAllTools(server)

  return server
}

async function main() {
  try {
    const server = await initializeServer()
    const transport = new StdioServerTransport()
    await server.connect(transport)
  } catch (error) {
    console.error('Fatal error:', error)
    process.exit(1)
  }
}

main()