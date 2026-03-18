import { Button } from "./Button";

type CTASectionProps = {
  title: string;
  text: string;
  primaryLabel: string;
  secondaryLabel: string;
};

export function CTASection({ title, text, primaryLabel, secondaryLabel }: CTASectionProps) {
  return (
    <section className="py-24 px-4">
      <div className="max-w-5xl mx-auto rounded-3xl bg-primary overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
            <path d="M0 0 L100 0 L100 100 L0 100 Z" fill="none" stroke="currentColor" strokeDasharray="4 2" strokeWidth="0.5" />
          </svg>
        </div>
        <div className="relative z-10 py-16 px-8 md:px-16 flex flex-col items-center text-center">
          <h3 className="text-white text-3xl md:text-5xl font-black mb-6 leading-tight">{title}</h3>
          <p className="text-white/80 text-lg mb-10 max-w-2xl">{text}</p>
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <Button variant="secondary" className="bg-white text-primary px-10 py-4 text-lg font-black hover:bg-slate-100">
              {primaryLabel}
            </Button>
            <Button variant="outline" className="border-white/20 text-white px-10 py-4 text-lg font-black hover:bg-white/10">
              {secondaryLabel}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
