import { useState } from 'react';
import { SetInput } from './components/SetInput';
import { SetResult } from './components/SetResult';
import { SetStats } from './components/SetStats';
import { OperationButtons } from './components/OperationButtons';
import { Footer } from './components/Footer';
import { parseSet, formatSet, formatQuotedSet, union, intersection, difference } from './services/setOperations';
import { useQuotedResult } from './hooks/useQuotedResult';
import type { SetOperation } from './types/set-operations';

const operations: Record<SetOperation, (a: Set<string>, b: Set<string>) => Set<string>> = {
  union,
  intersection,
  difference,
};

export default function App() {
  const [setA, setSetA] = useState('');
  const [setB, setSetB] = useState('');
  const [operation, setOperation] = useState<SetOperation>('union');
  const { isQuoted, toggle } = useQuotedResult();

  const parsedA = parseSet(setA);
  const parsedB = parseSet(setB);
  const resultSet = operations[operation](parsedA, parsedB);
  const result = isQuoted ? formatQuotedSet(resultSet) : formatSet(resultSet);

  return (
    <main className="min-h-screen bg-gray-50 p-6 md:p-10 flex flex-col">
      <div className="mx-auto w-full max-w-7xl space-y-6">
        <h1 className="text-xl font-semibold text-gray-800">Set Operations</h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <SetInput
            label="Set A"
            value={setA}
            onChange={setSetA}
            placeholder="1, 2, 3, 4"
          />
          <SetInput
            label="Set B"
            value={setB}
            onChange={setSetB}
            placeholder="3, 4, 5, 6"
          />
        </div>

        <OperationButtons active={operation} onSelect={setOperation} />

        <SetResult value={result} isQuoted={isQuoted} onQuote={toggle} />
        <SetStats countA={parsedA.size} countB={parsedB.size} countResult={resultSet.size} />
      </div>
      <Footer />
    </main>
  );
}
