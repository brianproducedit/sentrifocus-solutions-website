type SectionBadgeProps = {
  text: string;
};

export function SectionBadge({ text }: SectionBadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
      {text}
    </span>
  );
}
