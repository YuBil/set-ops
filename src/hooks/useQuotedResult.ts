import { useState } from 'react';

export function useQuotedResult() {
  const [isQuoted, setIsQuoted] = useState(false);
  return { isQuoted, toggle: () => setIsQuoted((v) => !v) };
}
