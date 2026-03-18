import type { SolutionBundle } from "../types";

export const solutionBundles: SolutionBundle[] = [
  {
    tier: "Starter",
    name: "Security and Monitoring Foundation",
    timeline: "1-2 weeks",
    support: "Business-hours support",
    cta: "Request This Scope",
    deliverables: [
      "On-site security risk assessment",
      "CCTV and alarm installation",
      "Remote monitoring enablement",
      "Handover and user onboarding",
    ],
  },
  {
    tier: "Growth",
    name: "Connectivity and Operations Upgrade",
    timeline: "2-4 weeks",
    support: "Priority support window",
    cta: "Request This Scope",
    featured: true,
    deliverables: [
      "LAN and Wi-Fi redesign",
      "POS and access control integration",
      "Network policy and segmentation",
      "Monitoring dashboards and alerts",
      "Operational training for internal teams",
    ],
  },
  {
    tier: "Enterprise",
    name: "Mission-Critical Infrastructure Program",
    timeline: "4-10 weeks",
    support: "Dedicated account team",
    cta: "Request This Scope",
    deliverables: [
      "Multi-site architecture and rollout plan",
      "Redundancy and business continuity controls",
      "Compliance-ready documentation",
      "Quarterly optimization reviews",
    ],
  },
];
