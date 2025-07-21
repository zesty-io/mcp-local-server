import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';

export function registerInstancesTools(server: McpServer, sdk: any) {
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

    server.tool(
        "get-fields",
        "Get all fields of a content model",
        { MODEL_ZUID: z.string().describe("Model ZUID") },
        async ({ MODEL_ZUID }) => {
            const data = await sdk.instance.getModelFields(MODEL_ZUID);

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
        "get-field",
        "Get a specific field of a content model",
        {
            MODEL_ZUID: z.string().describe("Model ZUID"),
            FIELD_ZUID: z.string().describe("Field ZUID")
        },
        async ({ MODEL_ZUID, FIELD_ZUID }) => {
            const data = await sdk.instance.getModelField(MODEL_ZUID, FIELD_ZUID);

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
        "get-web-headers",
        "Returns all legacy headers",
        {},
        async () => {
            const data = await sdk.instance.getWebHeaders();

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
        "get-head-tags",
        "Returns all headtags",
        {},
        async () => {
            const data = await sdk.instance.getHeadTags();

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
        "get-head-tag",
        "Returns a specific headtag",
        { HEADTAG_ZUID: z.string().describe("Headtag ZUID") },
        async ({ HEADTAG_ZUID }) => {
            const data = await sdk.instance.getHeadTag(HEADTAG_ZUID);

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
        "get-item-labelings",
        "Retuns item labelings of a content item in a content model",
        {
            MODEL_ZUID: z.string().describe("Model ZUID"),
            ITEM_ZUID: z.string().describe("Content Item ZUID")
        },
        async ({ MODEL_ZUID, ITEM_ZUID }) => {
            const data = await sdk.instance.fetchItemLabelings(MODEL_ZUID, ITEM_ZUID);

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
        "get-item-labeling",
        "Retuns a specific item labeling of a content item in a content model",
        {
            MODEL_ZUID: z.string().describe("Model ZUID"),
            ITEM_ZUID: z.string().describe("Content Item ZUID"),
            LABEL_ZUID: z.string().describe("Label ZUID")
        },
        async ({ MODEL_ZUID, ITEM_ZUID, LABEL_ZUID }) => {
            const data = await sdk.instance.fetchItemLabeling(MODEL_ZUID, ITEM_ZUID, LABEL_ZUID);

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
        "get-items",
        "Returns the most recently edited item, by latest version and date created, on a collection content object",
        {
            MODEL_ZUID: z.string().describe("Model ZUID")
        },
        async ({ MODEL_ZUID }) => {
            const data = await sdk.instance.getItems(MODEL_ZUID);

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
        "get-item",
        "Returns a single content item object",
        {
            MODEL_ZUID: z.string().describe("Model ZUID"),
            ITEM_ZUID: z.string().describe("Content Item ZUID")
        },
        async ({ MODEL_ZUID, ITEM_ZUID }) => {
            const data = await sdk.instance.getItem(MODEL_ZUID, ITEM_ZUID);

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
        "get-item-publishings",
        "Retrieves all item publishing records of a given item",
        {
            MODEL_ZUID: z.string().describe("Model ZUID"),
            ITEM_ZUID: z.string().describe("Content Item ZUID")
        },
        async ({ MODEL_ZUID, ITEM_ZUID }) => {
            const data = await sdk.instance.getItemPublishings(MODEL_ZUID, ITEM_ZUID);

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
        "get-item-publishing",
        "Retrieve an item publishing record of a given item",
        {
            MODEL_ZUID: z.string().describe("Model ZUID"),
            ITEM_ZUID: z.string().describe("Content Item ZUID"),
            PUBLISHING_ZUID: z.string().describe("Publishing ZUID")
        },
        async ({ MODEL_ZUID, ITEM_ZUID, PUBLISHING_ZUID }) => {
            const data = await sdk.instance.getItemPublishing(MODEL_ZUID, ITEM_ZUID, PUBLISHING_ZUID);

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
        "get-item-versions",
        "Retrieves all item versions of a given item",
        {
            MODEL_ZUID: z.string().describe("Model ZUID"),
            ITEM_ZUID: z.string().describe("Content Item ZUID")
        },
        async ({ MODEL_ZUID, ITEM_ZUID }) => {
            const data = await sdk.instance.getItemVersions(MODEL_ZUID, ITEM_ZUID);

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
        "get-item-version",
        "Retrieves specific item version of a given item",
        {
            MODEL_ZUID: z.string().describe("Model ZUID"),
            ITEM_ZUID: z.string().describe("Content Item ZUID"),
            VERSION: z.string().describe("Item Version")
        },
        async ({ MODEL_ZUID, ITEM_ZUID, VERSION }) => {
            const data = await sdk.instance.getItemVersion(MODEL_ZUID, ITEM_ZUID, VERSION);

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
        "get-labels",
        "Retrieves Labels",
        {},
        async () => {
            const data = await sdk.instance.fetchLabels();

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
        "get-label",
        "Retrieves specific Label",
        { LABEL_ZUID: z.string().describe("Label ZUID") },
        async ({ LABEL_ZUID }) => {
            const data = await sdk.instance.fetchLabel(LABEL_ZUID);

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
        "get-langs",
        "Returns the non-deleted languages available for this instance",
        {},
        async () => {
            const data = await sdk.instance.fetchLangs();

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
        "get-links",
        "Retrieves all link created within an instance",
        {},
        async () => {
            const data = await sdk.instance.fetchLinks();

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
        "get-link",
        "Retrieves a specific link",
        { LINK_ZUID: z.string().describe("Link ZUID") },
        async ({ LINK_ZUID }) => {
            const data = await sdk.instance.fetchLink(LINK_ZUID);

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
        "get-models",
        "Retrieves all models",
        {},
        async () => {
            const data = await sdk.instance.getModels();

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
        "get-model",
        "Retrieves specific model",
        { MODEL_ZUID: z.string().describe("Model ZUID") },
        async ({ MODEL_ZUID }) => {
            const data = await sdk.instance.getModel(MODEL_ZUID);

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
        "get-redirects",
        "Retrieves all redirects",
        {},
        async () => {
            const data = await sdk.instance.fetchRedirects();

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
        "get-redirect",
        "Retrieves specific redirect",
        { REDIRECT_ZUID: z.string().describe("Redirect ZUID") },
        async ({ REDIRECT_ZUID }) => {
            const data = await sdk.instance.fetchRedirect(REDIRECT_ZUID);

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
        "get-settings",
        "Retrieves all settings",
        {},
        async () => {
            const data = await sdk.instance.getSettings();

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
        "get-setting",
        "Retrieves specific setting",
        { SETTING_ZUID: z.string().describe("Setting ZUID") },
        async ({ SETTING_ZUID }) => {
            const data = await sdk.instance.getSetting(SETTING_ZUID);

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
        "get-stylesheets",
        "Retrieves all stylesheets",
        {},
        async () => {
            const data = await sdk.instance.getStylesheets();

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
        "get-stylesheet",
        "Retrieves specific stylesheet",
        { STYLESHEET_ZUID: z.string().describe("Stylesheet ZUID") },
        async ({ STYLESHEET_ZUID }) => {
            const data = await sdk.instance.getStylesheet(STYLESHEET_ZUID);

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
        "get-stylesheet-variables",
        "Retrieves all stylesheet variables",
        {},
        async () => {
            const data = await sdk.instance.fetchStylesheetVariables();

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
        "get-stylesheet-variable",
        "Retrieves specific stylesheet variable",
        { VARIABLE_ZUID: z.string().describe("Stylesheet ZUID") },
        async ({ VARIABLE_ZUID }) => {
            const data = await sdk.instance.fetchStylesheetVariable(VARIABLE_ZUID);

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