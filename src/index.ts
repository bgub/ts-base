// Node/Bun adapter. Exposes core utilities and Node-specific helpers.
export { add, getRandomId, greet } from "./internal";

import { randomBytes } from "node:crypto";

export function getSecureRandomId(): string {
  const timePart = Date.now().toString(36);
  const bytes = randomBytes(12).toString("base64url");
  return `${timePart}-${bytes}`;
}
