# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

**Zesty MCP Local Server** is a Model Context Protocol (MCP) server implementation that bridges Zesty.io instances with AI tools (Claude, Cursor, VS Code). It exposes Zesty's content management APIs as MCP tools, enabling AI assistants to query and interact with Zesty instances.

**Key Architecture Pattern**: Plugin-based tool registration system where each Zesty API domain (accounts, auth, instances, media) has dedicated tool modules that wrap SDK calls.

## Code Generation

When writing or modifying MCP-related code, always reference the [official MCP documentation](https://modelcontextprotocol.io/docs) to ensure correct API usage, parameter shapes, and patterns.

## Build & Development Commands

```bash
# Install dependencies
npm install

# Build TypeScript → JavaScript
npm run build

# Build outputs to ./build/ directory (gitignored, excluded from package)
```

No lint or test commands currently exist. The project uses TypeScript strict mode (`tsconfig.json`) for type safety.

## Project Structure & Architecture

### Core Entry Point
- **`src/index.ts`**: Main MCP server initialization
  - Creates McpServer instance with Sentry error tracking
  - Invokes registration functions for tools, prompts, and resources
  - Uses stdio transport to communicate with MCP clients
  - Sets Sentry user context from verified session token

### Tool Registration System (Plugin Pattern)
The codebase uses a hierarchical registration pattern:

- **`src/tools/register.ts`**: Main coordinator
  - Instantiates Zesty SDK with environment variables (auth token, instance ZUID, optional custom API URLs for non-prod)
  - Verifies session token and sets Sentry user context
  - Delegates to four domain-specific registration functions

- **Domain-Level Registrars** (each registers related tools):
  - `src/tools/auth/register.ts` → Auth tools (verify-session)
  - `src/tools/accounts/register.ts` → Account tools (get-instances, get-instance, get-instance-users)
  - `src/tools/instances/register.ts` → Instance tools (coordinates 15+ sub-registrars)
  - `src/tools/media/register.ts` → Media bin/group/file tools

- **Instance Sub-Domains** (nested under `src/tools/instances/`):
  - Audit logs, fields, head-tags, item-labelings, item-publishings, item-versions, items, labels, langs, links, models, redirects, settings, stylesheet-variables, stylesheets, web-headers

### Tool Implementation Pattern
Each registrar follows a consistent structure:

```typescript
export function registerXTools(server: McpServer, sdk: any) {
  server.tool("tool-name", "description", { PARAM: z.string().describe("...") }, async ({ PARAM }) => {
    try {
      const data = await sdk.domain.method(PARAM);
      return { content: [{ type: "text", text: JSON.stringify(data) }] };
    } catch (error: unknown) {
      return { isError: true, content: [{ type: "text", text: `Error: ${errorMessage}` }] };
    }
  });
}
```

- All tools use Zod for parameter validation
- SDK methods are wrapped; errors are caught and returned with `isError: true`
- Results serialized to JSON strings
- Tools without parameters pass empty `{}` object

### Prompts & Resources
- **`src/prompts/register.ts`**: Currently empty (no prompts implemented)
- **`src/resources/register.ts`**: Currently empty (no resources implemented)
- These can be extended in the future to add MCP prompts and resources capabilities

### Configuration
- **`src/config/version.ts`**: Hard-coded version string (1.0.0)
- **`tsconfig.json`**: Targets ES2022, uses Node16 module resolution, strict mode enabled
- Environment variables required:
  - `ZESTY_SESSION_TOKEN`: User authentication token
  - `ZESTY_INSTANCE_ZUID`: Target Zesty instance identifier
  - Optional (for non-prod environments): `ZESTY_AUTH_API`, `ZESTY_ACCOUNTS_API`, `ZESTY_INSTANCES_API`, `ZESTY_MEDIA_MANAGER_API`

### Dependencies
- **@modelcontextprotocol/sdk**: MCP protocol implementation
- **@zesty-io/sdk**: Zesty API client (wraps REST endpoints)
- **zod**: Parameter schema validation
- **@sentry/node**: Error tracking and monitoring (initialized with DSN at startup)

## Key Implementation Details

**Tool Organization**: 40+ tools organized across 5 main categories. The hierarchical registration approach (tools → categories → sub-categories) scales well as new tools are added.

**Error Handling**: All tools follow consistent try-catch pattern. Errors are surfaced to AI clients via MCP error responses rather than thrown exceptions.

**SDK Integration**: The Zesty SDK abstraction handles all REST API calls. SDK is initialized once in main `registerAllTools()` with auth token and instance ZUID, then passed to all registration functions.

**Type Safety**: Uses Zod schemas for runtime parameter validation. SDK itself is typed as `any` (see `src/types/zesty-io__sdk.d.ts` which is a minimal module declaration).

## Extension Points

- **New Tools**: Add a new registration file in appropriate domain under `src/tools/`, export its function, and call it from the parent registrar
- **Prompts**: Implement `registerAllPrompts()` to add MCP prompts
- **Resources**: Implement `registerAllResources()` to add MCP resources
- **Custom API Endpoints**: Pass optional API URL overrides in `registerAllTools()` when instantiating SDK (see lines 10-16 in `src/tools/register.ts`)

## Configuration for AI Clients

Update your MCP client config (e.g., Claude Desktop's `claude_desktop_config.json`):

```json
{
  "mcpServers": {
    "zesty": {
      "command": "node",
      "args": ["/ABSOLUTE/PATH/TO/build/index.js"],
      "env": {
        "ZESTY_SESSION_TOKEN": "your_token",
        "ZESTY_INSTANCE_ZUID": "your_instance_zuid"
      }
    }
  }
}
```

Requires **absolute paths** and **Node.js v20+**.
