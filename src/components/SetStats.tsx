interface SetStatsProps {
  countA: number;
  countB: number;
  countResult: number;
}

function plural(n: number) {
  return n === 1 ? '1 element' : `${n} elements`;
}

export function SetStats({ countA, countB, countResult }: SetStatsProps) {
  return (
    <div className="flex justify-center gap-4 text-sm text-gray-400">
      <span>Set A: <span className="font-medium text-gray-600">{plural(countA)}</span></span>
      <span className="text-gray-300">·</span>
      <span>Set B: <span className="font-medium text-gray-600">{plural(countB)}</span></span>
      <span className="text-gray-300">·</span>
      <span>Result: <span className="font-medium text-gray-600">{plural(countResult)}</span></span>
    </div>
  );
}
