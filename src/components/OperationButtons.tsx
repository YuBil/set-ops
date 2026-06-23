import type { ReactElement } from 'react';
import type { SetOperation } from '../types/set-operations';

interface OperationButtonsProps {
  active: SetOperation;
  onSelect: (op: SetOperation) => void;
}

function UnionIcon() {
  return (
    <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="9" fill="currentColor" opacity="0.25" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="18" cy="10" r="9" fill="currentColor" opacity="0.25" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function IntersectionIcon() {
  return (
    <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="18" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
      {/* overlap lens shape */}
      <path
        d="M14 2.2a9 9 0 0 1 0 15.6A9 9 0 0 1 14 2.2z"
        fill="currentColor"
        opacity="0.35"
      />
    </svg>
  );
}

function DifferenceIcon() {
  return (
    <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="9" fill="currentColor" opacity="0.25" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="18" cy="10" r="9" fill="white" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

const OPERATIONS: { id: SetOperation; label: string; notation: string; Icon: () => ReactElement }[] = [
  { id: 'union', label: 'Union', notation: 'A ∪ B', Icon: UnionIcon },
  { id: 'intersection', label: 'Intersection', notation: 'A ∩ B', Icon: IntersectionIcon },
  { id: 'difference', label: 'Difference', notation: 'A − B', Icon: DifferenceIcon },
];

export function OperationButtons({ active, onSelect }: OperationButtonsProps) {
  return (
    <div className="flex justify-center gap-3 flex-wrap">
      {OPERATIONS.map(({ id, label, notation, Icon }) => {
        const isActive = active === id;
        return (
          <button
            key={id}
            onClick={() => onSelect(id)}
            className={`flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors
              ${isActive
                ? 'border-gray-800 bg-gray-800 text-white'
                : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:text-gray-800'
              }`}
          >
            <Icon />
            <span>{label}</span>
            <span className="font-mono text-xs opacity-60">{notation}</span>
          </button>
        );
      })}
    </div>
  );
}
