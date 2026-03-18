import { PageWrapper } from "../components/layout/PageWrapper";
import { galleryItems } from "../data/gallery";

export function GalleryPage() {
  return (
    <PageWrapper>
      <section className="px-4 md:px-8 lg:px-10 py-16 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Recent Deployments</p>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6">Gallery of Delivered ICT Work</h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            A live showcase of recently completed work across security, networking, automation, and retail technology projects.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 mt-12 space-y-6">
          {galleryItems.map((item) => (
            <article key={item.title} className="break-inside-avoid rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 shadow-sm">
              <img src={item.image} alt={item.title} className="w-full h-56 object-cover" />
              <div className="p-5">
                <p className="text-xs uppercase tracking-widest text-primary font-bold mb-2">{item.category}</p>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{item.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}
