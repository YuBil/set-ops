interface SetResultProps {
  value: string;
}

export function SetResult({ value }: SetResultProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-500">Result</label>
      <textarea
        value={value}
        readOnly
        disabled
        className="h-24 resize-none rounded-lg border border-gray-200 bg-gray-100 p-3 text-sm text-gray-500 cursor-not-allowed"
      />
    </div>
  );
}
