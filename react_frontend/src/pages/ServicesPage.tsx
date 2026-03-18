import { PageWrapper } from "../components/layout/PageWrapper";
import { serviceCards } from "../data/services";
import { SectionBadge } from "../components/ui/SectionBadge";
import { ServiceCard } from "../components/ui/ServiceCard";
import { CTASection } from "../components/ui/CTASection";

export function ServicesPage() {
  return (
    <PageWrapper>
      <section className="relative px-6 py-16 lg:px-20 lg:py-24 overflow-hidden">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col gap-6 max-w-3xl">
            <SectionBadge text="Our Expertise" />
            <h1 className="text-4xl font-black tracking-tight sm:text-6xl text-slate-900 dark:text-white">
              Next-Gen Technology <span className="text-primary">Solutions</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              We provide cutting-edge ICT services designed to secure your property, automate your workflow, and keep you connected.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 lg:px-20 lg:pb-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCards.map((service) => (
              <ServiceCard key={service.title} service={service} withImage />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to upgrade your infrastructure?"
        text="Our experts are ready to design a custom solution for your home, tuckshop, supermarket, or business."
        primaryLabel="Contact Sales"
        secondaryLabel="Browse Portfolio"
      />
    </PageWrapper>
  );
}
