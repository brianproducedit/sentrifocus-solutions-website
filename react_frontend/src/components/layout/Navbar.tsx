import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navItems } from "../../data/navigation";
import { Button } from "../ui/Button";
import { Code, Menu, X, ChevronDown } from "lucide-react";
import type { NavItem } from "../../types";

function DropdownMenu({ item }: { item: Required<Pick<NavItem, "label" | "children">> }) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const show = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };
  const hide = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  };

  return (
    <div className="relative" onMouseEnter={show} onMouseLeave={hide}>
      <button
        className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary px-2 py-1 rounded-lg"
        aria-expanded={open}
        aria-haspopup="true"
      >
        {item.label}
        <ChevronDown size={13} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-60 rounded-xl border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-900 shadow-xl shadow-black/10 p-1.5 z-50">
          {item.children.map((child) => (
            <NavLink
              key={child.href}
              to={child.href}
              className={({ isActive }) =>
                `flex flex-col rounded-lg px-4 py-3 transition-colors ${
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200"
                }`
              }
              onClick={() => setOpen(false)}
            >
              <span className="text-sm font-semibold">{child.label}</span>
              {child.description && (
                <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{child.description}</span>
              )}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 10);
      if (y < 60) {
        setVisible(true);
      } else {
        setVisible(y < lastY.current);
      }
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full border-b border-primary/40 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-xl transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      } ${scrolled ? "shadow-lg shadow-black/10" : ""}`}
    >
      <div className="hidden md:block border-b border-slate-200/10 bg-slate-900 text-slate-100 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between">
          <p className="tracking-wide">Zimbabwe-owned ICT startup • Harare HQ • Transparent delivery process</p>
          <p className="text-slate-300">Support: support@galaxyict.co.zw</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 sm:h-20">
          {/* Logo */}
          <Link className="flex items-center gap-3 flex-[2]" to="/">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white">
              <Code size={24} />
            </div>
            <div>
              <h2 className="text-slate-900 dark:text-white text-lg sm:text-xl font-bold tracking-tight">Galaxy ICT Solutions</h2>
              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Built in Zimbabwe</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
              item.children ? (
                <DropdownMenu key={item.label} item={item as Required<Pick<NavItem, "label" | "children">>} />
              ) : (
                <NavLink
                  key={item.href}
                  to={item.href!}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors px-2 py-1 rounded-lg ${isActive ? "text-primary" : "hover:text-primary"}`
                  }
                  end
                >
                  {item.label}
                </NavLink>
              )
            )}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-4 flex-[2] justify-end">
            <Link to="/request-quote">
              <Button className="hidden sm:inline-flex">Request Quote</Button>
            </Link>
            <button
              className="lg:hidden text-slate-900 dark:text-white"
              aria-label="Open menu"
              onClick={() => setOpen((prev) => !prev)}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden pb-5">
            <nav className="flex flex-col gap-1 rounded-xl border border-slate-200/20 bg-slate-900/90 p-3">
              {navItems.map((item) =>
                item.children ? (
                  <div key={item.label}>
                    <button
                      className="w-full flex items-center justify-between rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-slate-800"
                      onClick={() =>
                        setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                      }
                    >
                      {item.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${mobileExpanded === item.label ? "rotate-180" : ""}`}
                      />
                    </button>
                    {mobileExpanded === item.label && (
                      <div className="ml-3 mt-1 mb-1 flex flex-col gap-0.5 border-l-2 border-primary/30 pl-3">
                        {item.children.map((child) => (
                          <NavLink
                            key={child.href}
                            to={child.href}
                            className={({ isActive }) =>
                              `rounded-lg px-3 py-2 text-sm ${isActive ? "bg-primary text-white" : "text-slate-300 hover:bg-slate-800"}`
                            }
                            onClick={() => {
                              setOpen(false);
                              setMobileExpanded(null);
                            }}
                          >
                            {child.label}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink
                    key={item.href}
                    to={item.href!}
                    className={({ isActive }) =>
                      `rounded-lg px-3 py-2 text-sm ${isActive ? "bg-primary text-white" : "text-slate-200 hover:bg-slate-800"}`
                    }
                    onClick={() => setOpen(false)}
                    end
                  >
                    {item.label}
                  </NavLink>
                )
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
