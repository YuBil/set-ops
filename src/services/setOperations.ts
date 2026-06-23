export function union<T>(a: Set<T>, b: Set<T>): Set<T> {
  return new Set([...a, ...b]);
}

export function intersection<T>(a: Set<T>, b: Set<T>): Set<T> {
  return new Set([...a].filter((item) => b.has(item)));
}

export function difference<T>(a: Set<T>, b: Set<T>): Set<T> {
  return new Set([...a].filter((item) => !b.has(item)));
}

// Parses a string into a Set of trimmed, non-empty strings.
// Accepts any combination of commas, spaces, and newlines as delimiters.
export function parseSet(input: string): Set<string> {
  return new Set(input.split(/[\s,]+/).filter(Boolean));
}

export function formatSet(set: Set<string>): string {
  return [...set].join(', ');
}

export function formatQuotedSet(set: Set<string>): string {
  return [...set].map((el) => `'${el}'`).join(', ');
}
