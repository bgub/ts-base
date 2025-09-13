import { describe, expect, it, vi } from "vitest";

import { add, getRandomId, greet } from "../src/internal";

describe("core: add", () => {
  it("adds two numbers", () => {
    expect(add(2, 3)).toBe(5);
  });
});

describe("core: greet", () => {
  it("greets with period by default", () => {
    expect(greet("Ben")).toBe("Hello, Ben.");
  });

  it("greets with shout when enabled", () => {
    expect(greet("Ben", { shout: true })).toBe("HELLO, BEN!");
  });
});

describe("core: getRandomId", () => {
  it("uses injected RNG for determinism", () => {
    const rng = vi.fn().mockReturnValue(0.123456789);
    const id = getRandomId(rng);
    expect(id).toMatch(/^[0-9a-z]+-[0-9a-z]+$/);
    expect(id.split("-")[1].length).toBeGreaterThan(0);
  });
});
