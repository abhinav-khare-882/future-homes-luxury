interface VariantSelectorProps {
  label: string;
  options: string[];
  selected: string;
  onSelect: (option: string) => void;
  type?: 'text' | 'color';
}

const colorMap: Record<string, string> = {
  'Charcoal': '#1A1A1A',
  'Sand': '#C4B9A9',
  'Ivory': '#FFFFF0',
  'Slate': '#708090',
  'Walnut': '#5D432C',
  'Oak': '#D4A574',
  'Black': '#000000',
  'White': '#FFFFFF',
  'Gray': '#808080',
  'Beige': '#F5F5DC',
};

export const VariantSelector = ({
  label,
  options,
  selected,
  onSelect,
  type = 'text',
}: VariantSelectorProps) => {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-sm text-text-secondary uppercase tracking-wide">
          {label}
        </span>
        <span className="text-sm text-text-primary">{selected}</span>
      </div>

      <div className="flex flex-wrap gap-2">
        {type === 'color'
          ? options.map((option) => (
              <button
                key={option}
                onClick={() => onSelect(option)}
                className={`w-10 h-10 rounded-full border-2 transition-all duration-300 ${
                  selected === option
                    ? 'border-primary ring-2 ring-primary ring-offset-2'
                    : 'border-border hover:border-primary/50'
                }`}
                style={{ backgroundColor: colorMap[option] || option }}
                title={option}
              />
            ))
          : options.map((option) => (
              <button
                key={option}
                onClick={() => onSelect(option)}
                className={`px-6 py-3 text-sm tracking-wide border transition-all duration-300 ${
                  selected === option
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-background text-text-secondary border-border hover:border-primary'
                }`}
              >
                {option}
              </button>
            ))}
      </div>
    </div>
  );
};
