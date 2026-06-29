import { describe, it, expect } from 'vitest';
import {
  union,
  intersection,
  difference,
  parseSet,
  formatSet,
  formatQuotedSet,
} from './setOperations';

describe('union', () => {
  it('combines elements from both sets', () => {
    expect(union(new Set([1, 2, 3]), new Set([3, 4, 5]))).toEqual(new Set([1, 2, 3, 4, 5]));
  });

  it('returns a copy of A when B is empty', () => {
    expect(union(new Set([1, 2]), new Set())).toEqual(new Set([1, 2]));
  });

  it('returns a copy of B when A is empty', () => {
    expect(union(new Set(), new Set([3, 4]))).toEqual(new Set([3, 4]));
  });

  it('returns empty set when both are empty', () => {
    expect(union(new Set(), new Set())).toEqual(new Set());
  });

  it('deduplicates elements present in both', () => {
    expect(union(new Set([1, 2]), new Set([1, 2]))).toEqual(new Set([1, 2]));
  });
});

describe('intersection', () => {
  it('returns only shared elements', () => {
    expect(intersection(new Set([1, 2, 3]), new Set([2, 3, 4]))).toEqual(new Set([2, 3]));
  });

  it('returns empty set when no elements are shared', () => {
    expect(intersection(new Set([1, 2]), new Set([3, 4]))).toEqual(new Set());
  });

  it('returns empty set when A is empty', () => {
    expect(intersection(new Set(), new Set([1, 2]))).toEqual(new Set());
  });

  it('returns the full set when A and B are identical', () => {
    expect(intersection(new Set([1, 2, 3]), new Set([1, 2, 3]))).toEqual(new Set([1, 2, 3]));
  });
});

describe('difference', () => {
  it('returns elements in A not in B', () => {
    expect(difference(new Set([1, 2, 3]), new Set([2, 3, 4]))).toEqual(new Set([1]));
  });

  it('returns A unchanged when B is empty', () => {
    expect(difference(new Set([1, 2, 3]), new Set())).toEqual(new Set([1, 2, 3]));
  });

  it('returns empty set when A is a subset of B', () => {
    expect(difference(new Set([1, 2]), new Set([1, 2, 3]))).toEqual(new Set());
  });

  it('returns empty set when A is empty', () => {
    expect(difference(new Set(), new Set([1, 2]))).toEqual(new Set());
  });
});

describe('parseSet', () => {
  it('parses comma-separated values', () => {
    expect(parseSet('a, b, c')).toEqual(new Set(['a', 'b', 'c']));
  });

  it('trims whitespace around values', () => {
    expect(parseSet('  x ,  y  ,z')).toEqual(new Set(['x', 'y', 'z']));
  });

  it('ignores empty entries from trailing commas', () => {
    expect(parseSet('a, b,')).toEqual(new Set(['a', 'b']));
  });

  it('returns empty set for empty string', () => {
    expect(parseSet('')).toEqual(new Set());
  });

  it('deduplicates repeated values', () => {
    expect(parseSet('a, a, b')).toEqual(new Set(['a', 'b']));
  });

  it('parses space-separated values', () => {
    expect(parseSet('a b c')).toEqual(new Set(['a', 'b', 'c']));
  });

  it('parses newline-separated values', () => {
    expect(parseSet('a\nb\nc')).toEqual(new Set(['a', 'b', 'c']));
  });

  it('parses mixed comma-and-newline format', () => {
    expect(parseSet('a,\nb,\nc')).toEqual(new Set(['a', 'b', 'c']));
  });

  it('handles Windows line endings (CRLF)', () => {
    expect(parseSet('a\r\nb\r\nc')).toEqual(new Set(['a', 'b', 'c']));
  });

  it('ignores blank lines', () => {
    expect(parseSet('a\n\nb')).toEqual(new Set(['a', 'b']));
  });
});

describe('formatSet', () => {
  it('joins values with comma and space', () => {
    expect(formatSet(new Set(['a', 'b', 'c']))).toBe('a,b,c');
  });

  it('returns empty string for empty set', () => {
    expect(formatSet(new Set())).toBe('');
  });
});

describe('formatQuotedSet', () => {
  it('wraps each value in single quotes and joins with comma', () => {
    expect(formatQuotedSet(new Set(['a', 'b', 'c']))).toBe("'a','b','c'");
  });

  it('returns empty string for empty set', () => {
    expect(formatQuotedSet(new Set())).toBe('');
  });

  it('handles a single value', () => {
    expect(formatQuotedSet(new Set(['x']))).toBe("'x'");
  });

  it('preserves values with spaces', () => {
    expect(formatQuotedSet(new Set(['hello world']))).toBe("'hello world'");
  });
});
