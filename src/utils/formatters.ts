import { Instance } from "./types.js";

export function formatInstances(instance: Instance): string {
  return [
    `ZUID: ${instance.ZUID || ""}`,
    `blueprintID: ${instance.blueprintID || ""}`,
    `blueprintZUID: ${instance.blueprintZUID || ""}`,
    `cancelledReason: ${instance.cancelledReason || ""}`,
    `createdAt: ${instance.createdAt || ""}`,
    `createdByUserZUID: ${instance.createdByUserZUID || ""}`,
    `deletedAt: ${instance.deletedAt || ""}`,
    `domain: ${instance.domain || ""}`,
    `ecoID: ${instance.ecoID || ""}`,
    `ecoZUID: ${instance.ecoZUID || ""}`,
    `id: ${instance.id || ""}`,
    `legacy: ${instance.legacy || ""}`,
    `name: ${instance.name || ""}`,
    `planID: ${instance.planID || ""}`,
    `prefs: ${instance.prefs || ""}`,
    `randomHashID: ${instance.randomHashID || ""}`,
    `requiresTwoFactor: ${instance.requiresTwoFactor || ""}`,
    `screenshotURL: ${instance.screenshotURL || ""}`,
    `updatedAt: ${instance.updatedAt || ""}`,
    `useTLS: ${instance.useTLS || ""}`,
    "---",
  ].join("\n");
}

export function formatInstance(instance: Instance): string {
  return `
    ZUID: ${instance.ZUID || ""},
    blueprintID: ${instance.blueprintID || ""},
    blueprintZUID: ${instance.blueprintZUID || ""},
    cancelledReason: ${instance.cancelledReason || ""},
    createdAt: ${instance.createdAt || ""},
    createdByUserZUID: ${instance.createdByUserZUID || ""},
    deletedAt: ${instance.deletedAt || ""},
    domain: ${instance.domain || ""},
    ecoID: ${instance.ecoID || ""},
    ecoZUID: ${instance.ecoZUID || ""},
    id: ${instance.id || ""},
    legacy: ${instance.legacy || ""},
    name: ${instance.name || ""},
    planID: ${instance.planID || ""},
    prefs: ${instance.prefs || ""},
    randomHashID: ${instance.randomHashID || ""},
    requiresTwoFactor: ${instance.requiresTwoFactor || ""},
    screenshotURL: ${instance.screenshotURL || ""},
    updatedAt: ${instance.updatedAt || ""},
    useTLS: ${instance.useTLS || ""}`;
}