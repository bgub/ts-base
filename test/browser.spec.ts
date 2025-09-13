import { beforeAll, describe, expect, it, vi } from "vitest";

import { add, getRandomId, getSecureRandomId, greet } from "../src/browser";

beforeAll(() => {
  // Ensure btoa exists in Node test environment
  // biome-ignore lint/suspicious/noExplicitAny: this is fine
  if (!(globalThis as any).btoa) {
    // biome-ignore lint/suspicious/noExplicitAny: this is fine
    (globalThis as any).btoa = (str: string) =>
      Buffer.from(str, "binary").toString("base64");
  }
});

describe("browser adapter", () => {
  it("re-exports core functions", () => {
    expect(add(1, 2)).toBe(3);
    expect(greet("Ada")).toBe("Hello, Ada.");
  });

  it("generates deterministic getRandomId with injected RNG", () => {
    const id = getRandomId(() => 0.99);
    expect(id).toMatch(/^[0-9a-z]+-[0-9a-z]+$/);
  });
});

describe("getSecureRandomId (browser)", () => {
  it("uses crypto.getRandomValues when available", () => {
    const spy = vi.spyOn(globalThis.crypto, "getRandomValues");
    const id = getSecureRandomId();
    expect(typeof id).toBe("string");
    expect(spy).toHaveBeenCalledOnce();
    spy.mockRestore();
  });
});
