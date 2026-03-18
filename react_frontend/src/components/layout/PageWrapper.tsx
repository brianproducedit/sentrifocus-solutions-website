import { useEffect, useState } from "react";
import type { PropsWithChildren } from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { ArrowUp } from "lucide-react";

export function PageWrapper({ children }: PropsWithChildren) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = height > 0 ? (scrollTop / height) * 100 : 0;

      setScrollProgress(progress);
      setShowBackToTop(scrollTop > 480);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased overflow-x-hidden min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-[80] h-1 bg-transparent pointer-events-none">
        <div className="h-full bg-primary transition-[width] duration-150" style={{ width: `${scrollProgress}%` }} />
      </div>
      <Navbar />
      <main className="pt-16 sm:pt-20 md:pt-[116px]">{children}</main>
      <Footer />

      {showBackToTop ? (
        <button
          className="fixed bottom-6 right-6 z-[75] rounded-full bg-primary text-white w-12 h-12 shadow-lg shadow-primary/30 hover:scale-105 transition-transform flex items-center justify-center"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </button>
      ) : null}
    </div>
  );
}
