/**
 * Honest capabilities — not fictional agency packages.
 * Page is secondary nav only (“Capabilities”).
 */
export const services = [
  {
    id: "frontend-product",
    title: "Product frontend",
    summary:
      "React and TypeScript UIs: dashboards, complex forms, Redux state, and design-system-aligned screens.",
    deliverables: [
      "React / Next.js application UI",
      "Redux or Context-based state for multi-screen flows",
      "REST API integration with clear error handling",
      "Responsive layouts and accessible interaction patterns",
    ],
  },
  {
    id: "component-libraries",
    title: "Component libraries",
    summary:
      "Shared UI building blocks so product teams stop re-implementing the same patterns.",
    deliverables: [
      "Reusable React/TypeScript components",
      "Tailwind-based styling conventions",
      "Consistency across related product surfaces",
    ],
  },
  {
    id: "full-stack",
    title: "Full-stack features",
    summary:
      "End-to-end slices: UI plus Node/Express or FastAPI services and a relational or document database.",
    deliverables: [
      "API design and JWT-oriented auth patterns",
      "PostgreSQL / MongoDB data models for the feature",
      "Deployed personal products as proof of shipping",
    ],
  },
  {
    id: "ai-integration",
    title: "LLM-assisted product features",
    summary:
      "Practical agent-style workflows wired into an app — as in the habit tracker with LangChain and Grok API.",
    deliverables: [
      "LangChain-style orchestration boundaries",
      "Backend services that store and serve model outputs",
      "Product UI for reviewing and acting on AI suggestions",
    ],
  },
] as const;

export const engagementNotes = [
  "Open to full-stack developer roles (Mumbai / remote-friendly as agreed)",
  "Strongest in React, TypeScript, Tailwind, and API-integrated product UI",
  "Also build personal full-stack and AI-assisted apps end to end",
  "Contact: g.kadam.dev@gmail.com",
];
