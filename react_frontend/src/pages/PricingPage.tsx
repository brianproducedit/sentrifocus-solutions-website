import { useRef, useState } from "react";
import { PageWrapper } from "../components/layout/PageWrapper";
import { solutionBundles } from "../data/pricing";
import { contactFormAction, formsConfigured } from "../config/forms";
import type { SolutionBundle } from "../types";

export function PricingPage() {
  const quoteSectionRef = useRef<HTMLElement | null>(null);
  const requirementsRef = useRef<HTMLTextAreaElement | null>(null);
  const [selectedScope, setSelectedScope] = useState<string>("");

  const handleScopeRequest = (plan: SolutionBundle) => {
    setSelectedScope(plan.name);

    if (requirementsRef.current) {
      requirementsRef.current.value = `Selected Scope: ${plan.name}\nTier: ${plan.tier}\nPreferred Timeline: ${plan.timeline}\n\nPlease describe your site, goals, and required outcomes.`;
      requirementsRef.current.focus();
    }

    quoteSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <PageWrapper>
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            Delivery-Focused ICT Programs for <span className="text-primary">Every Scale</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            We do not publish one-size-fits-all pricing. We define scope, deliverables, and implementation milestones, then provide a tailored quote.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutionBundles.map((plan) => (
            <article
              key={plan.name}
              className={`flex flex-col gap-6 rounded-xl p-8 shadow-sm transition-shadow ${
                plan.featured
                  ? "border-2 border-primary bg-white dark:bg-slate-900 scale-105 z-20"
                  : "border border-slate-200 dark:border-primary/20 bg-white dark:bg-slate-900/50"
              }`}
            >
              <div className="flex flex-col gap-2">
                <span className="text-primary font-bold text-sm uppercase tracking-widest">{plan.tier}</span>
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mt-2">
                  <span className="text-sm text-slate-500">Timeline: {plan.timeline}</span>
                </div>
                <p className="text-sm text-slate-500">Support: {plan.support}</p>
              </div>
              <ul className="flex flex-col gap-4 flex-1">
                {plan.deliverables.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => handleScopeRequest(plan)}
                className={`w-full rounded-lg py-3 text-sm font-bold transition-all ${
                  plan.featured
                    ? "bg-primary text-white hover:bg-primary/90"
                    : "bg-slate-100 dark:bg-primary/10 text-primary hover:bg-primary hover:text-white"
                }`}
              >
                {plan.cta}
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="py-20 px-4 bg-slate-100 dark:bg-slate-900/30" ref={quoteSectionRef}>
        <div className="max-w-4xl mx-auto bg-white dark:bg-background-dark border border-slate-200 dark:border-primary/20 rounded-2xl p-6 md:p-10 shadow-2xl">
          <h2 className="text-3xl font-bold mb-4">Request a Custom Quote</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            Share your requirements and we will respond with a scope and quote proposal.
          </p>
          {selectedScope ? (
            <p className="text-sm text-primary font-semibold mb-4">Selected Scope: {selectedScope}</p>
          ) : null}
          {!formsConfigured ? (
            <p className="text-xs text-amber-600 mb-4">
              Formspree is not fully configured yet. Set VITE_FORMSPREE_CONTACT_FORM_ID and VITE_FORMSPREE_FEEDBACK_FORM_ID in your environment.
            </p>
          ) : null}
          <form className="space-y-6" method="POST" action={contactFormAction}>
            <input type="hidden" name="_subject" value="Galaxy ICT - New Quote Request" />
            <input type="hidden" name="selected_scope" value={selectedScope} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input className="rounded-lg border p-3 bg-slate-50 dark:bg-slate-900/50" placeholder="Your full name" name="name" required />
              <input className="rounded-lg border p-3 bg-slate-50 dark:bg-slate-900/50" placeholder="you@example.com" type="email" name="email" required />
            </div>
            <input className="rounded-lg border p-3 bg-slate-50 dark:bg-slate-900/50" placeholder="Household, tuckshop, supermarket, school, or company name" name="company" />
            <textarea
              ref={requirementsRef}
              className="w-full rounded-lg border p-3 bg-slate-50 dark:bg-slate-900/50"
              rows={5}
              placeholder="Describe your needs: site type, location, priority issues, preferred timeline, and expected deliverables."
              name="requirements"
              required
            />
            <button className="rounded-lg bg-primary px-8 py-3 text-sm font-bold text-white hover:bg-primary/90" type="submit">
              Submit Quote Request
            </button>
          </form>
        </div>
      </section>
    </PageWrapper>
  );
}
