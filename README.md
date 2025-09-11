# Zesty MCP Local Server

Zesty MCP Server implements the [Model Context Protocol](https://modelcontextprotocol.ai) to connect your Zesty instances with AI tools like Claude, Cursor, and VS Code.

## Quickstart

### Prerequisites

Before using the MCP server, you need to have a user account or an active access token

This MCP server can be used with any application that supports the Model Context Protocol:
- [Claude Desktop](https://modelcontextprotocol.io/quickstart/user)
- [Cursor IDE](https://docs.cursor.com/context/model-context-protocol)
- [Visual Studio Code](https://code.visualstudio.com/docs/copilot/chat/mcp-servers)

### Installation

Build from source

```
git clone https://github.com/zesty-io/mcp-local-server.git
cd mcp-local-server
npm run build
```

### Add configuration for the Zesty MCP Server

Add the following configuration to your application's Developer Settings:

```
{
  "mcpServers": {
    "zesty": {
      "command": "path-file/bin/node",
      "args": ["path-file/mcp-local-server/build/index.js"],
      "env": {
        "ZESTY_SESSION_TOKEN": "your-access-or-session-token",
        "ZESTY_INSTANCE_ZUID": "your-instance-zuid"
      }
    }
  }
}
```

To use dev environment, add the following environment variables in the configuration:

```
"ZESTY_AUTH_API": "https://auth.api.dev.zesty.io",
"ZESTY_ACCOUNTS_API": "https://accounts.api.dev.zesty.io/v1",
"ZESTY_INSTANCES_API": ".api.dev.zesty.io/v1",
"ZESTY_MEDIA_MANAGER_API": "https://media-manager.api.dev.zesty.io"
```

To use stage environment, add the following environment variables in the configuration:

```
"ZESTY_AUTH_API": "https://auth.api.stage.zesty.io",
"ZESTY_ACCOUNTS_API": "https://accounts.api.stage.zesty.io/v1",
"ZESTY_INSTANCES_API": ".api.stage.zesty.io/v1",
"ZESTY_MEDIA_MANAGER_API": "https://media-manager.api.stage.zesty.io"
```

## Tools

### Accounts
- **get-instances** – Gets all instances a user has access to
- **get-instance** – Gets a single instance by its ZUID
- **get-instance-users** – Returns all the users of the given instance ZUID

### Instances
- **get-audit-logs** – Get all Audit trails of a given instance
- **get-audit-log** – Get a specific audit trail by audit ZUID
- **get-fields** – Get all fields of a content model
- **get-field** – Get a specific field of a content model
- **get-head-tags** – Returns all headtags
- **get-head-tag** – Returns a specific headtag
- **get-item-labelings** – Returns item labelings of a content item in a content model
- **get-item-labeling** – Returns a specific item labeling of a content item in a content model
- **get-item-publishings** – Retrieves all item publishing records of a given item
- **get-item-publishing** – Retrieve an item publishing record of a given item
- **get-item-versions** – Retrieves all item versions of a given item
- **get-item-version** – Retrieves specific item version of a given item
- **get-items** – Returns the most recently edited item, by latest version and date created, on a collection content object
- **get-item** – Returns a single content item object
- **search-content-item** - Allows searching for contents by either ZUID, meta text values or path-related values
- **get-labels** – Retrieves Labels
- **get-label** – Retrieves specific Label
- **get-langs** – Returns the non-deleted languages available for this instance
- **get-links** – Retrieves all link created within an instance
- **get-link** – Retrieves a specific link
- **get-models** – Retrieves all models
- **get-model** – Retrieves specific model
- **get-redirects** – Retrieves all redirects
- **get-redirect** – Retrieves specific redirect
- **get-settings** – Retrieves all settings
- **get-setting** – Retrieves specific setting
- **get-stylesheet-variables** – Retrieves all stylesheet variables
- **get-stylesheet-variable** – Retrieves specific stylesheet variable
- **get-stylesheets** – Retrieves all stylesheets
- **get-stylesheet** – Retrieves specific stylesheet
- **get-web-headers** – Returns all legacy headers

### Auth
- **verify-session** – Verify if session token is valid

### Media
- **get-bins** – Return all bins of an instance
- **get-bin** – Return a bin
- **get-groups** – Return groups of a bin
- **get-group** – Return a group
- **get-files** – Return files of a bin
- **get-file** – Return a file