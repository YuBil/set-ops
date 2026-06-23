import { CopyButton } from './CopyButton';

interface SetResultProps {
  value: string;
  isQuoted: boolean;
  onQuote: () => void;
}

export function SetResult({ value, isQuoted, onQuote }: SetResultProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-500">Result</label>
      <div className="relative">
        <textarea
          value={value}
          readOnly
          disabled
          className="h-24 w-full resize-none rounded-lg border border-gray-200 bg-gray-100 p-3 text-sm text-gray-500 cursor-not-allowed"
        />
        <CopyButton text={value} />
      </div>
      <div className="flex">
        <button
          onClick={onQuote}
          className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors
            ${isQuoted
              ? 'border-gray-800 bg-gray-800 text-white'
              : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:text-gray-800'
            }`}
        >
          Wrap in single quotes
        </button>
      </div>
    </div>
  );
}
