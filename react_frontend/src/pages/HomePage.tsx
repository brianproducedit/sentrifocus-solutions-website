import { PageWrapper } from "../components/layout/PageWrapper";
import { serviceCards } from "../data/services";
import { CTASection } from "../components/ui/CTASection";
import { ServiceCard } from "../components/ui/ServiceCard";
import { SectionBadge } from "../components/ui/SectionBadge";
import { StatBadge } from "../components/ui/StatBadge";
import { Button } from "../components/ui/Button";
import { founders } from "../data/founders";
import { transparencyStats, trustSignals } from "../data/trust";
import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <PageWrapper>
      <section className="relative min-h-[85vh] flex items-center justify-center px-4 hero-gradient">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
            Zimbabwe-owned • Advanced ICT Delivery
          </div>
          <h1 className="text-slate-900 dark:text-white text-5xl md:text-7xl font-black leading-tight tracking-tight mb-6">
            Trusted ICT Infrastructure for a <span className="text-primary">Faster, Safer Future</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            SentriFocus Solutions designs, deploys, and supports secure digital systems across Zimbabwe with transparent planning and measurable outcomes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/request-quote">
              <Button className="w-full sm:w-auto min-w-[180px] h-14 text-base">Request Quote</Button>
            </Link>
            <Link to="/gallery">
              <Button variant="secondary" className="w-full sm:w-auto min-w-[180px] h-14 text-base">
                Browse Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {transparencyStats.map((stat) => (
            <article key={stat.label} className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 p-5 text-center">
              <p className="text-2xl font-black text-primary">{stat.value}</p>
              <p className="text-xs uppercase tracking-widest text-slate-500 mt-2">{stat.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <SectionBadge text="Our Expertise" />
            <h3 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-black mt-3">
              Comprehensive ICT Solutions for Every Scale
            </h3>
          </div>
          <p className="text-slate-600 dark:text-slate-400 max-w-sm">
            From household connectivity to enterprise security, we deliver performance-driven results.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceCards.slice(0, 3).map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </section>

      <section className="bg-slate-100 dark:bg-slate-900/50 py-24 px-4 overflow-hidden relative">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl relative aspect-square">
              <img
                alt="Server room with blue lighting"
                className="object-cover w-full h-full"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBG9BYq7Q6NVHMfSgHjj6FacWcuDtwGO3bB7KWx8Okjt_fhpRoDw_AkvO6ZcCr3z6mUtbBCkUu7LG8R6L7__9z5UpB1-5pW69i6V75G189pEYoWrnz46_xD2Sw19ndfC2yZcZFzQlwBSEtbUk5axMDTObbZ0ULiGWtifb2Bj7Y8VQCTnVIurle-puJe5U7LNx57-T88x89JzRe4kNprqQVrpvL9_GDBWSX5PB8MPAF0OpIxlgokHh7HZ39sDPiVZSJoXhVEpEQjzVjr"
              />
            </div>
            <StatBadge value="99.9%" label="System Reliability" className="absolute -bottom-6 -right-6 hidden sm:block" />
          </div>
          <div className="lg:w-1/2">
            <SectionBadge text="Why Partner With Us" />
            <h3 className="text-slate-900 dark:text-white text-3xl md:text-5xl font-black mb-8 mt-3 leading-tight">
              Transparency, Trustworthiness, and Technical Excellence
            </h3>
            <div className="space-y-4 text-slate-600 dark:text-slate-400">
              {trustSignals.map((signal) => (
                <div key={signal} className="flex gap-3">
                  <span className="material-symbols-outlined text-primary">task_alt</span>
                  <p>{signal}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-10">
          <div>
            <SectionBadge text="Founders" />
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mt-3">Leadership You Can Meet and Trust</h3>
          </div>
          <Link className="text-primary font-semibold" to="/about">
            Learn more about the team
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {founders.map((founder) => (
            <article key={founder.name} className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 p-6 flex gap-4 items-start">
              <img src={founder.avatar} alt={founder.name} className="w-20 h-20 rounded-xl object-cover" />
              <div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">{founder.name}</h4>
                <p className="text-sm uppercase tracking-wider text-primary mb-2">{founder.role}</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm">{founder.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTASection
        title="Ready to Transform Your Digital Infrastructure?"
        text="Request a tailored scope of work and we will map your deliverables, timeline, and support model."
        primaryLabel="Request Quote"
        secondaryLabel="Contact Team"
      />
    </PageWrapper>
  );
}
