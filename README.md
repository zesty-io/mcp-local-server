# Zesty MCP Local Server

Zesty MCP Server implements the [Model Context Protocol](https://modelcontextprotocol.ai) to connect your Zesty instances with AI tools like Claude, Cursor, and VS Code.

## Quickstart

### Prerequisites

Before using the MCP server, you need to have a user account or an active access token

This MCP server can be used with any application that supports the Model Context Protocol:
- [Claude Desktop](https://modelcontextprotocol.io/quickstart/user)
- [Cursor IDE](https://docs.cursor.com/context/model-context-protocol)
- [Visual Studio Code](https://code.visualstudio.com/docs/copilot/chat/mcp-servers)

### Add configuration for the Zesty MCP Server

Add the following configuration to your application's Developer Settings:

```
{
  "mcpServers": {
    "zesty": {
      "command": "npx",
      "args": ["-y", "@zesty-io/mcp-local-server@latest"],
      "env": {
        "ZESTY_SESSION_TOKEN": "your-access-or-session-token"
      }
    }
  }
}
```

## Tools

### Instances

- **get-instances** – Gets all instances a user has access to
- **get-instance** – Gets a single instance by its ZUID
- **create-instances** – Creates an instance. This will automatically generate a new instance ZUID and the user making the Create Instance request will be set as the Owner