# Zesty MCP Local Server

Zesty MCP Server implements the [Model Context Protocol](https://modelcontextprotocol.ai) to connect your Zesty instances with AI tools like Claude, Cursor, and VS Code.

## Quickstart

### Prerequisites

Before using the MCP server, ensure you have:
1. A Zesty.io user account or an active access token
2. Git and Node.js (version 20 or higher) installed on your machine.

This MCP server supports any compatible with the Model Context Protocol, including:
- [Claude Desktop](https://modelcontextprotocol.io/quickstart/user)
- [Cursor IDE](https://docs.cursor.com/context/model-context-protocol)
- [Visual Studio Code](https://code.visualstudio.com/docs/copilot/chat/mcp-servers)

### System Setup

#### Install Git

Git is required to clone the repository and manage version control.

- **Windows:**
  1. Download the installer from [git-scm.com](https://git-scm.com/download/win).
  2. Run the installer and follow the on-screen instructions.

- **macOS:**
  - **Option 1 (Homebrew):** Run `brew install git` in your terminal.
  - **Option 2 (Installer):** Download from [git-scm.com](https://git-scm.com/download/mac).

- **Linux (Ubuntu/Debian):**
  ```bash
  sudo apt update
  sudo apt install git
  ```

Verify Installation: Open your terminal or command prompt and run:
```
git --version
```

#### Install Node.js (v20+)

This project requires Node.js v20.0.0 or greater.

- **Option A: Direct Installer:**
  1. Visit the [official Node.js website](https://nodejs.org).
  2. Click on the LTS (Long Term Support) version (ensure it is v20 or higher) or the Current version.
  3. Download and run the installer for your operating system

- **Option B: Using NVM:**

  Using a version manager like nvm allows you to switch between Node versions easily and avoids permission issues.
  - **macOS / Linux**:
    1. Install nvm using the official script
    ```
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
    ```
    2. Install Node 20
    ```
    nvm install 20
    nvm use 20
    ```

  - **Windows**:
    1. Download [nvm-windows installer](https://github.com/coreybutler/nvm-windows/releases)
    2. Run the installer
    3. Open PowerShell or Command Prompt (Run as Administrator) and run:
    ```
    nvm install 20
    nvm use 20
    ```

Verify Installation: Ensure you are on version 20+ by running:
```
node -v
```

### Installation
Clone source code

```
git clone https://github.com/zesty-io/mcp-local-server.git
```

Build source code
```
cd mcp-local-server
```
```
npm i
```
```
npm run build
```

### Configuration

To use the Zesty MCP Server, you must add it to your application's configuration file (e.g. `claude_desktop_config.json` in Claude Desktop Developer Settings):

Add the following object to the `mcpServers` block:
```
{
  "mcpServers": {
    "zesty": {
      "command": "node",
      "args": ["/ABSOLUTE/PATH/TO/mcp-local-server/build/index.js"],
      "env": {
        "ZESTY_SESSION_TOKEN": "your_access_or_session_token",
        "ZESTY_INSTANCE_ZUID": "your_instance_zuid"
      }
    }
  }
}
```

**Important**
- **Absolute Path**: You must replace `/ABSOLUTE/PATH/TO/...` with the full file path on your machine starting with `/Users`. Relative paths (e.g. `./build` will not work)
- Restart: You must restart Claude Desktop (or any of the application you used) after savuing the configuration for changes to take effect. 

## Tools

### Accounts
- **get-instances** – Gets all instances a user has access to
- **get-instance** – Gets a single instance by its ZUID
- **get-instance-users** – Returns all the users of the given instance ZUID

### Auth
- **verify-session** – Verify if session token is valid

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

### Media
- **get-bins** – Return all bins of an instance
- **get-bin** – Return a bin
- **get-groups** – Return groups of a bin
- **get-group** – Return a group
- **get-files** – Return files of a bin
- **get-file** – Return a file
