export type Experience = {
  id: string;
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  summary: string;
  achievements: string[];
  technologies: string[];
};

/** Professional experience shown on the portfolio (Leanqubit only, per owner request). */
export const experiences: Experience[] = [
  {
    id: "leanqubit",
    company: "Leanqubit",
    role: "Software Engineer",
    location: "Remote",
    start: "Nov 2025",
    end: "Apr 2026",
    summary:
      "Frontend and full-stack product work across manufacturing planning, execution, and quality products — including consolidation into a unified platform.",
    achievements: [
      "Developed complex dashboard screens integrating multiple APIs to surface planning data across FactoPlan (smart production planning & scheduling).",
      "Resolved UI issues and closed a backlog of open bug tickets, improving overall product stability on FactoPlan.",
      "Contributed to a UI redesign of FactoMES (real-time manufacturing execution), rebuilding key screens with a consistent design system.",
      "Implemented and managed Redux-based state management across redesigned FactoMES screens for complex application state.",
      "Contributed to FactoVision (production count & quality inspection) UI — building and maintaining screens and components on the core product team.",
      "Resolved UI bugs and addressed open tickets on FactoVision to improve product quality and user experience.",
      "Led frontend architecture for merging FactoVision, FactoMES, and FactoPlan into a single unified platform ahead of the team’s transition.",
      "Established shared state management (Redux) and REST API integration standards across all three products.",
      "Handled API binding across the consolidated platform, connecting frontend screens to backend services and verifying data flow.",
      "Built a reusable React.js/TypeScript component library styled with Tailwind CSS, standardizing UI patterns and reducing duplicate component work.",
      "Conducted testing across the unified application, implementing a Jest unit testing framework to improve code quality before release.",
    ],
    technologies: [
      "React.js",
      "TypeScript",
      "Redux",
      "Tailwind CSS",
      "REST APIs",
      "Jest",
    ],
  },
];
