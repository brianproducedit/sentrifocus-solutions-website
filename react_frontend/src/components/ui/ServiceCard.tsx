import type { Service } from "../../types";
import { IconRenderer } from "../../utils/IconRenderer";

type ServiceCardProps = {
  service: Service;
  withImage?: boolean;
};

export function ServiceCard({ service, withImage = false }: ServiceCardProps) {
  return (
    <article className="glass-card group flex flex-col overflow-hidden rounded-xl transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10">
      {withImage && service.image ? (
        <div className="aspect-video w-full overflow-hidden">
          <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src={service.image} alt={service.title} />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <IconRenderer name={service.icon} size={24} />
        </div>
        <h3 className="mb-2 text-xl font-bold">{service.title}</h3>
        <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{service.description}</p>
        {service.deliverables?.length ? (
          <ul className="mb-6 space-y-2">
            {service.deliverables.slice(0, 3).map((deliverable) => (
              <li key={deliverable} className="text-xs text-slate-500 dark:text-slate-400 flex gap-2">
                <IconRenderer name="CheckCircle" size={16} className="text-primary flex-shrink-0 mt-0.5" />
                <span>{deliverable}</span>
              </li>
            ))}
          </ul>
        ) : null}
        <button className="flex items-center gap-2 text-sm font-bold text-primary hover:underline">
          View Deliverables <IconRenderer name="ArrowRight" size={16} />
        </button>
      </div>
    </article>
  );
}
