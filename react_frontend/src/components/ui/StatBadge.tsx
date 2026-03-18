type StatBadgeProps = {
  value: string;
  label: string;
  className?: string;
};

export function StatBadge({ value, label, className = "" }: StatBadgeProps) {
  return (
    <div className={`bg-primary p-6 rounded-2xl shadow-2xl ${className}`.trim()}>
      <p className="text-white text-4xl font-black mb-1">{value}</p>
      <p className="text-white/80 text-sm font-medium">{label}</p>
    </div>
  );
}
