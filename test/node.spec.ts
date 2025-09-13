import { describe, expect, it } from "vitest";

import { add, getSecureRandomId, greet } from "../src";

describe("node adapter", () => {
  it("exposes core and node helpers", () => {
    expect(add(5, 7)).toBe(12);
    expect(greet("Grace")).toBe("Hello, Grace.");
    const id = getSecureRandomId();
    expect(typeof id).toBe("string");
    expect(id).toMatch(/^[0-9a-z]+-[A-Za-z0-9_-]+$/);
  });
});
