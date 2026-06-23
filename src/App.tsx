import { useState } from 'react';
import { SetInput } from './components/SetInput';
import { SetResult } from './components/SetResult';
import { OperationButtons } from './components/OperationButtons';
import { parseSet, formatSet, union, intersection, difference } from './services/setOperations';
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

  const result = formatSet(operations[operation](parseSet(setA), parseSet(setB)));

  return (
    <main className="min-h-screen bg-gray-50 p-6 md:p-10">
      <div className="mx-auto max-w-4xl space-y-6">
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

        <SetResult value={result} />
      </div>
    </main>
  );
}
