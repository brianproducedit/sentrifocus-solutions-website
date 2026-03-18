import type { IconName } from "../utils/icons";

export type NavLink = {
  label: string;
  href: string;
};

export type NavChild = {
  label: string;
  href: string;
  description?: string;
};

export type NavItem = {
  label: string;
  href?: string;
  children?: NavChild[];
};

export type Service = {
  title: string;
  icon: IconName;
  description: string;
  image?: string;
  tag?: string;
  deliverables?: string[];
};

export type Project = {
  title: string;
  category: string;
  description: string;
  result: string;
  resultIcon: IconName;
  image: string;
  location?: string;
  year?: string;
};

export type GalleryItem = {
  title: string;
  category: string;
  image: string;
  summary: string;
};

export type Founder = {
  name: string;
  role: string;
  bio: string;
  avatar: string;
};

export type Testimonial = {
  initials: string;
  name: string;
  role: string;
  quote: string;
};

export type SolutionBundle = {
  tier: string;
  name: string;
  timeline: string;
  support: string;
  featured?: boolean;
  cta: string;
  deliverables: string[];
};
