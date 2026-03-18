import { PageWrapper } from "../components/layout/PageWrapper";
import { CTASection } from "../components/ui/CTASection";
import { SectionBadge } from "../components/ui/SectionBadge";
import { founders } from "../data/founders";
import { trustSignals } from "../data/trust";

export function AboutPage() {
  return (
    <PageWrapper>
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionBadge text="Our Story" />
            <h1 className="text-5xl lg:text-7xl font-black my-8 leading-[1.1]">
              Pioneering the <span className="text-primary">Digital Frontier</span> in Zimbabwe.
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
              We are a Zimbabwe startup building secure, modern, and practical ICT foundations for households, tuckshops, supermarkets, and growing organizations.
            </p>
          </div>
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBha4GzTmchZVrr8UeHu8RuMqadmPwy6T4UOX5nSntza7MDoF01tX8IpPUd7DDpvp4MZpbCuA5wPVvVPI8TckT49gXcrbwyiZnfF8ar2ign_erSzS6rKp3AV7XGvp94FNQA_uCtjcDfozmuCtKPscjtCeGVYNAOtF5oNEg2MU9GkFoaEKDVSlcZIO3OSTfgaObwyVgqSzRLLyvC5WF_CinVpiwY0imajPNVjF8FaipTEwyMc-bNletwAPnk31NzCRKeQcsV97v1lYbe"
              alt="Modern high-tech office"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <article className="p-10 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
              To empower businesses and communities through reliable, innovative, and accessible ICT solutions.
            </p>
          </article>
          <article className="p-10 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
              To be the leading catalyst for digital transformation in the Southern African region.
            </p>
          </article>
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-black mb-4">The Pillars of Our Success</h2>
        <p className="text-slate-500 max-w-2xl mx-auto mb-16">
          Our values define how we design, deploy, and support mission-critical systems.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          <article>
            <h4 className="text-xl font-bold mb-4">Transparency</h4>
            <p className="text-slate-600 dark:text-slate-400">Open communication and honest partnerships.</p>
          </article>
          <article>
            <h4 className="text-xl font-bold mb-4">Reliability</h4>
            <p className="text-slate-600 dark:text-slate-400">Dependable support for mission-critical systems.</p>
          </article>
          <article>
            <h4 className="text-xl font-bold mb-4">Excellence</h4>
            <p className="text-slate-600 dark:text-slate-400">World-class standards in delivery and support.</p>
          </article>
        </div>
      </section>

      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <article className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 p-8">
            <h3 className="text-2xl font-bold mb-5">How We Keep Work Transparent</h3>
            <div className="space-y-3">
              {trustSignals.map((signal) => (
                <div className="flex gap-3" key={signal}>
                  <span className="material-symbols-outlined text-primary">task_alt</span>
                  <p className="text-slate-600 dark:text-slate-400">{signal}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 p-8">
            <h3 className="text-2xl font-bold mb-5">Founders</h3>
            <div className="space-y-6">
              {founders.map((founder) => (
                <div key={founder.name} className="flex items-start gap-4">
                  <img src={founder.avatar} alt={founder.name} className="w-14 h-14 rounded-lg object-cover" />
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">{founder.name}</h4>
                    <p className="text-xs uppercase tracking-widest text-primary mb-1">{founder.role}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{founder.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <CTASection
        title="Ready to work with a transparent ICT partner?"
        text="Let us map your current challenges into a practical implementation roadmap."
        primaryLabel="Request Quote"
        secondaryLabel="View Our Work"
      />
    </PageWrapper>
  );
}
