import type { Testimonial } from "../../types";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="bg-white dark:bg-background-dark p-8 rounded-2xl shadow-xl dark:shadow-primary/5 flex flex-col justify-between">
      <div>
        <div className="flex text-yellow-400 mb-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <span className="material-symbols-outlined" key={index}>
              star
            </span>
          ))}
        </div>
        <p className="text-slate-700 dark:text-slate-300 italic text-lg leading-relaxed mb-6">{testimonial.quote}</p>
      </div>
      <div className="flex items-center gap-4 border-t border-slate-100 dark:border-slate-800 pt-6">
        <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">{testimonial.initials}</div>
        <div>
          <p className="text-slate-900 dark:text-white font-bold">{testimonial.name}</p>
          <p className="text-slate-500 text-sm">{testimonial.role}</p>
        </div>
      </div>
    </article>
  );
}
