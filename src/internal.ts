// Core, runtime-agnostic functionality for the template library starter.
// Keep browser- or Node-specific code out of this module so it runs in any JS runtime.

export interface CoreOptions {
  shout?: boolean;
}

export function add(a: number, b: number): number {
  return a + b;
}

export function greet(name: string, options: CoreOptions = {}): string {
  const base = `Hello, ${name}`;
  return options.shout ? `${base.toUpperCase()}!` : `${base}.`;
}

// Deterministic-friendly ID generator; inject a RNG for testability.
export function getRandomId(random: () => number = Math.random): string {
  const timePart = Date.now().toString(36);
  const randPart = Math.floor(random() * 1e9).toString(36);
  return `${timePart}-${randPart}`;
}
