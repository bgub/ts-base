// Browser adapter. Re-export core utilities; avoid Node-only APIs.
export { add, getRandomId, greet } from "./internal";

export function getSecureRandomId(): string {
  const timePart = Date.now().toString(36);
  const array = new Uint8Array(12);
  crypto.getRandomValues(array);
  const rand = btoa(String.fromCharCode(...array))
    .replaceAll("+", "-")
    .replaceAll("/", "_")
    .replaceAll("=", "");
  return `${timePart}-${rand}`;
}
