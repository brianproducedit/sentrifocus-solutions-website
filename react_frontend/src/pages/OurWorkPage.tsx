import { useEffect, useMemo, useState } from "react";
import { PageWrapper } from "../components/layout/PageWrapper";
import { projects, testimonials } from "../data/portfolio";
import { TestimonialCard } from "../components/ui/TestimonialCard";
import { Link } from "react-router-dom";
import type { Project } from "../types";
import { IconRenderer } from "../utils/IconRenderer";

export function OurWorkPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [query, setQuery] = useState("");
  const [sortMode, setSortMode] = useState<"newest" | "impact">("newest");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = useMemo(() => ["All", ...new Set(projects.map((project) => project.category))], []);

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    const scoped = projects.filter((project) => {
      const categoryMatch = activeCategory === "All" || project.category === activeCategory;
      const textMatch =
        normalizedQuery.length === 0 ||
        [project.title, project.description, project.category, project.location].filter(Boolean).join(" ").toLowerCase().includes(normalizedQuery);

      return categoryMatch && textMatch;
    });

    return scoped.sort((a, b) => {
      if (sortMode === "impact") {
        return b.result.localeCompare(a.result);
      }

      return Number(b.year ?? 0) - Number(a.year ?? 0);
    });
  }, [activeCategory, query, sortMode]);

  useEffect(() => {
    if (!selectedProject) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <PageWrapper>
      <div className="px-6 md:px-20 py-12 md:py-20 flex flex-col items-center text-center max-w-5xl mx-auto">
        <h1 className="text-slate-900 dark:text-white text-4xl md:text-6xl font-black leading-tight tracking-tight mb-6">
          Our <span className="text-primary">Portfolio</span>
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed">
          Documented deployments that show architecture quality, practical implementation, and measurable delivery outcomes.
        </p>
      </div>

      <div className="px-6 md:px-20 mb-12">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 p-4 md:p-5 space-y-4">
          <div className="flex flex-col lg:flex-row gap-3 lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                    activeCategory === category
                      ? "bg-primary text-white shadow-lg shadow-primary/30"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-primary"
                  }`}
                  onClick={() => setActiveCategory(category)}
                  type="button"
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <label className="relative">
                <span className="material-symbols-outlined text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 text-base">search</span>
                <input
                  className="w-full sm:w-64 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 px-10 py-2 text-sm outline-none focus:border-primary"
                  placeholder="Search project, category, location..."
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                />
              </label>

              <select
                className="rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 px-3 py-2 text-sm"
                value={sortMode}
                onChange={(event) => setSortMode(event.target.value as "newest" | "impact")}
              >
                <option value="newest">Sort: Newest first</option>
                <option value="impact">Sort: Impact signal</option>
              </select>
            </div>
          </div>

          <p className="text-xs text-slate-500">
            Showing {filteredProjects.length} of {projects.length} projects
          </p>
        </div>
      </div>

      <section className="px-6 md:px-20 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <article
              key={project.title}
              className="group flex flex-col gap-5 interactive-card reveal-item"
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <div className="relative overflow-hidden rounded-xl aspect-[16/10] bg-slate-200 dark:bg-slate-800">
                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src={project.image} alt={project.title} />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary/90 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">{project.category}</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-slate-900 dark:text-white text-2xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">{project.description}</p>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  {[project.location, project.year].filter(Boolean).join(" • ")}
                </p>
                <div className="flex items-center gap-2 mt-2 bg-primary/10 dark:bg-primary/20 p-4 rounded-lg border border-primary/20">
                  <IconRenderer name={project.resultIcon} size={20} className="text-primary flex-shrink-0" />
                  <p className="text-primary text-sm font-semibold uppercase tracking-wide">{project.result}</p>
                </div>
                <button
                  className="mt-2 w-fit rounded-lg border border-primary/30 px-3 py-2 text-xs font-semibold text-primary hover:bg-primary hover:text-white transition-all"
                  onClick={() => setSelectedProject(project)}
                  type="button"
                >
                  Quick View
                </button>
              </div>
            </article>
          ))}
        </div>

        {filteredProjects.length === 0 ? (
          <div className="max-w-7xl mx-auto mt-8 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 p-8 text-center">
            <p className="text-slate-600 dark:text-slate-300">No projects matched your filters. Try another category or search phrase.</p>
            <button
              className="mt-4 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white"
              onClick={() => {
                setActiveCategory("All");
                setQuery("");
              }}
              type="button"
            >
              Reset Filters
            </button>
          </div>
        ) : null}
      </section>

      <section className="bg-slate-100 dark:bg-slate-900/50 py-24 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-slate-900 dark:text-white text-3xl md:text-5xl font-black mb-4">Client Success Stories</h2>
            <div className="w-20 h-1.5 bg-primary rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 md:px-20 text-center">
        <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-3">Want to see more field work?</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-6">Explore our visual gallery of recent deployments and implementation snapshots.</p>
        <Link className="inline-flex rounded-lg bg-primary px-6 py-3 text-sm font-bold text-white hover:bg-primary/90" to="/gallery">
          Open Gallery
        </Link>
      </section>

      {selectedProject ? (
        <div className="fixed inset-0 z-[70] bg-slate-950/70 backdrop-blur-sm p-4 flex items-center justify-center" onClick={() => setSelectedProject(null)}>
          <article
            className="w-full max-w-2xl rounded-2xl overflow-hidden border border-slate-200/20 bg-white dark:bg-slate-900"
            onClick={(event) => event.stopPropagation()}
          >
            <img className="w-full h-60 object-cover" src={selectedProject.image} alt={selectedProject.title} />
            <div className="p-6">
              <p className="text-xs uppercase tracking-widest text-primary font-bold">{selectedProject.category}</p>
              <h4 className="text-2xl font-bold text-slate-900 dark:text-white mt-2">{selectedProject.title}</h4>
              <p className="text-slate-600 dark:text-slate-300 mt-3">{selectedProject.description}</p>
              <p className="text-sm text-slate-500 mt-3">{[selectedProject.location, selectedProject.year].filter(Boolean).join(" • ")}</p>
              <div className="mt-4 rounded-lg bg-primary/10 border border-primary/20 p-3 text-sm font-semibold text-primary">{selectedProject.result}</div>
              <div className="mt-5 flex justify-end">
                <button className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white" onClick={() => setSelectedProject(null)}>
                  Close
                </button>
              </div>
            </div>
          </article>
        </div>
      ) : null}
    </PageWrapper>
  );
}
