export type SkillClusterId =
  | "frontend"
  | "backend"
  | "systems"
  | "design"
  | "leadership";

export type SkillNode = {
  id: string;
  label: string;
  detail: string;
  cluster: SkillClusterId;
};

export type SkillCluster = {
  id: SkillClusterId;
  label: string;
  description: string;
};

export const skillClusters: SkillCluster[] = [
  {
    id: "frontend",
    label: "Frontend",
    description: "Interfaces, state, and component systems in production apps.",
  },
  {
    id: "backend",
    label: "Backend & APIs",
    description: "Services, auth, and data access for full-stack features.",
  },
  {
    id: "systems",
    label: "Data & tooling",
    description: "Databases and day-to-day engineering tools.",
  },
  {
    id: "design",
    label: "UI & design",
    description: "Design systems, Tailwind, and information design.",
  },
  {
    id: "leadership",
    label: "AI & community",
    description: "LLM integration and technical community work.",
  },
];

/** Skills aligned to resume — no fake proficiency percentages */
export const skillNodes: SkillNode[] = [
  {
    id: "react",
    label: "React.js",
    detail: "Product UIs, hooks, component libraries at Leanqubit and personal apps.",
    cluster: "frontend",
  },
  {
    id: "next",
    label: "Next.js",
    detail: "App surfaces for projects such as the AI habit tracker.",
    cluster: "frontend",
  },
  {
    id: "typescript",
    label: "TypeScript / JavaScript",
    detail: "Typed React/TypeScript component libraries and application code.",
    cluster: "frontend",
  },
  {
    id: "redux",
    label: "Redux / Redux Toolkit",
    detail: "Complex application state across redesigned and consolidated product screens.",
    cluster: "frontend",
  },
  {
    id: "tailwind",
    label: "Tailwind CSS",
    detail: "Shared UI patterns and component library styling.",
    cluster: "frontend",
  },
  {
    id: "jest",
    label: "Jest",
    detail: "Unit testing framework setup for unified platform quality.",
    cluster: "frontend",
  },
  {
    id: "htmlcss",
    label: "HTML5 / CSS3",
    detail: "Semantic markup and layout — including Frontend Mentor practice.",
    cluster: "frontend",
  },
  {
    id: "node",
    label: "Node.js / Express",
    detail: "Backend services and REST APIs for full-stack work.",
    cluster: "backend",
  },
  {
    id: "fastapi",
    label: "FastAPI",
    detail: "Python services for the AI habit tracker backend.",
    cluster: "backend",
  },
  {
    id: "rest",
    label: "REST APIs",
    detail: "API binding, error handling, and multi-service integration.",
    cluster: "backend",
  },
  {
    id: "auth",
    label: "JWT / RBAC",
    detail: "Authentication and authorization patterns from full-stack training and projects.",
    cluster: "backend",
  },
  {
    id: "prisma",
    label: "Prisma ORM",
    detail: "Typed data access patterns in the backend skill set.",
    cluster: "backend",
  },
  {
    id: "postgres",
    label: "PostgreSQL",
    detail: "User data, habit history, and recommendations in the habit tracker.",
    cluster: "systems",
  },
  {
    id: "mongo",
    label: "MongoDB / MySQL",
    detail: "Additional databases used across full-stack learning and projects.",
    cluster: "systems",
  },
  {
    id: "python",
    label: "Python / SQL",
    detail: "Backend services, data work, and analysis coursework.",
    cluster: "systems",
  },
  {
    id: "git",
    label: "Git / GitHub",
    detail: "Source control and public repositories under gauravk2203 / rj25031.",
    cluster: "systems",
  },
  {
    id: "design-systems",
    label: "Component libraries",
    detail: "Reusable React/TypeScript library with Tailwind for platform consistency.",
    cluster: "design",
  },
  {
    id: "figma",
    label: "Figma",
    detail: "Design collaboration and newsletter/layout work.",
    cluster: "design",
  },
  {
    id: "newsletter",
    label: "Information design",
    detail: "Design lead for a technical newsletter (500+ subscribers).",
    cluster: "design",
  },
  {
    id: "langchain",
    label: "LangChain",
    detail: "Agent workflows in the AI habit tracker.",
    cluster: "leadership",
  },
  {
    id: "grok",
    label: "Grok API / LLM integration",
    detail: "LLM-backed planning and recommendation flows.",
    cluster: "leadership",
  },
  {
    id: "community",
    label: "Community & workshops",
    detail: "Core of a 100+ member community; 8+ workshops and hackathons.",
    cluster: "leadership",
  },
];
