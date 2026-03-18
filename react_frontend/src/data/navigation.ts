import type { NavItem, NavLink } from "../types";

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Our Work", href: "/our-work" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Request Quote", href: "/request-quote" },
  { label: "Contact", href: "/contact" },
];

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "What We Do",
    children: [
      { label: "Services", href: "/services", description: "CCTV, POS systems, networking and smart setups" },
      { label: "Gallery", href: "/gallery", description: "Photos from real on-site installations" },
      { label: "Pricing", href: "/request-quote", description: "Custom scope and quote builder" },
    ],
  },
  {
    label: "Portfolio",
    children: [
      { label: "Our Work", href: "/our-work", description: "Completed projects across Zimbabwe" },
      { label: "Case Studies", href: "/case-studies", description: "Detailed delivery outcomes" },
    ],
  },
  {
    label: "Company",
    children: [
      { label: "About Us", href: "/about", description: "Our story, values and team" },
      { label: "Contact", href: "/contact", description: "Message or review our team" },
    ],
  },
];
