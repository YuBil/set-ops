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
// Accepts comma-separated, newline-separated, or mixed formats (e.g. "1,\n2,\n3").
export function parseSet(input: string): Set<string> {
  return new Set(
    input
      .split(/[\n,]/)
      .map((s) => s.trim())
      .filter(Boolean),
  );
}

export function formatSet(set: Set<string>): string {
  return [...set].join(', ');
}
