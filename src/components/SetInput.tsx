interface SetInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function SetInput({ label, value, onChange, placeholder }: SetInputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-500">{label}</label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="h-48 resize-none rounded-lg border border-gray-200 bg-gray-100 p-3 text-sm text-gray-800 outline-none focus:border-gray-400 focus:bg-white transition-colors"
      />
    </div>
  );
}
