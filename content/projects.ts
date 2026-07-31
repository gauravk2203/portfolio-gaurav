export type ProjectDomain =
  | "product"
  | "platform"
  | "design-system"
  | "oss"
  | "research";

export type ProjectSection = {
  title: string;
  body?: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type ProjectFeature = {
  title: string;
  body: string;
  bullets?: string[];
};

export type TechGroup = {
  label: string;
  items: string[];
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  year: number;
  role: string;
  cover: {
    gradient: string;
    label: string;
  };
  stack: string[];
  /** Only real outcomes — avoid invented percentages */
  metrics: { label: string; value: string }[];
  links: {
    github?: string;
    live?: string;
    docs?: string;
  };
  featured: boolean;
  domains: ProjectDomain[];
  problem: string;
  approach: string;
  impact: string;
  challenges: string[];
  architecture: string[];
  lessons: string[];
  timeline: string;
  sections: ProjectSection[];
  /** Optional product-case-study fields */
  overview?: string[];
  goals?: string[];
  features?: ProjectFeature[];
  techGroups?: TechGroup[];
  architectureDiagram?: string;
  engineeringDecisions?: string[];
  roadmap?: string[];
  statusNote?: string;
  /** Product screenshots / diagrams under /public */
  visuals?: {
    label: string;
    src: string;
    alt: string;
  }[];
  /** Optional cover image for cards (path under /public) */
  coverImage?: string;
  /**
   * Layout tone for the case study page:
   * - product: deep product case study (Job Tracker)
   * - showcase: image-first frontend engineering showcase
   * - default: compact project page
   */
  layout?: "product" | "showcase" | "default";
  /** Showcase-style challenge cards (Frontend Mentor, etc.) */
  showcaseChallenges?: {
    title: string;
    description: string;
    skills: string[];
    image?: string;
    featured?: boolean;
    source?: string;
    live?: string;
  }[];
  skillObjectives?: {
    label: string;
    items: string[];
  }[];
  whyBuilt?: string[];
  repositoryNote?: string;
  /** Explicit ownership / contribution bullets */
  contributions?: string[];
  securityLayers?: { label: string; items: string[] }[];
  researchNotes?: string[];
  solutionSteps?: string[];
};

/**
 * Projects approved for the portfolio.
 * Live demo URLs omitted unless explicitly provided — GitHub only for now.
 */
export const projects: Project[] = [
  {
    slug: "job-tracker",
    title: "Job Tracker",
    summary:
      "A full-stack platform for managing the entire job search process—from application tracking and resume management to AI-powered insights and automated follow-ups.",
    year: 2025,
    role: "Full-Stack Project · Personal Product",
    cover: {
      gradient:
        "linear-gradient(145deg, #1a1410 0%, #2a1f18 40%, #0e1a22 100%)",
      label: "Product · Active",
    },
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "TanStack Query",
      "Tailwind CSS",
      "Groq API",
      "Vercel",
    ],
    metrics: [
      { label: "API routes", value: "29" },
      { label: "HTTP handlers", value: "44" },
      { label: "Screens", value: "15" },
      { label: "Prisma models", value: "10" },
    ],
    links: {
      github: "https://github.com/rj25031/job_tracker",
      live: "https://job-tracker-rj.vercel.app/sign-in",
    },
    featured: true,
    domains: ["product"],
    problem:
      "Modern job searching is continuous, not a single application. Candidates submit many applications, maintain resume versions, talk to recruiters, prepare for interviews, and track responses over months. Spreadsheets become inefficient and cannot answer higher-level questions about whether a search strategy is working.",
    approach:
      "I built Job Tracker as a product I could use every day during my own job search while leveling up full-stack skills. It is a monolithic Next.js App Router application—UI and API in one codebase—with Prisma/PostgreSQL, session auth, AI assistance via Groq, Cloudinary resumes, scheduled SMTP follow-ups via GitHub Actions, and extension APIs for saving jobs from the browser.",
    impact:
      "The project evolved into a complete workflow platform combining application tracking, analytics, AI assistance, resume management, networking, and automation. It remains under active development, refined from real-world usage rather than hypothetical feature lists.",
    challenges: [
      "Learning Next.js App Router at production scale—server components, middleware, route handlers, deployment, and project organization—beyond tutorials.",
      "Defining a data model flexible enough for analytics, resume tracking, networking, AI insights, and automation without unnecessary complexity (multiple schema iterations).",
      "Integrating Cloudinary, Groq, Nodemailer, GitHub Actions, and Chrome extension APIs while keeping auth and UX consistent.",
    ],
    architecture: [
      "Monolithic full-stack Next.js (App Router)—frontend and backend in one repo",
      "Next.js middleware for session authentication",
      "React UI with TanStack React Query for server state",
      "Next.js API routes / route handlers for business logic",
      "Prisma ORM over PostgreSQL (Neon)",
      "Browser / Chrome extension clients via token-secured extension APIs",
    ],
    lessons: [
      "Design database schemas before implementing UI",
      "Structure full-stack apps with Next.js App Router deliberately",
      "Manage authentication securely with HTTP-only cookies",
      "Coordinate multiple third-party services in one product",
      "Deploy and maintain a production application end to end",
      "Building around a real problem produces better design decisions than demo-only features",
    ],
    timeline: "2025 · Active development",
    layout: "product",
    overview: [
      "Job Tracker started after my own job search became hard to manage. As I applied to more companies, I was switching between spreadsheets, emails, job portals, notes, and calendars just to understand where I stood with each application.",
      "The biggest problem was not applying—it was understanding what was working. I could not answer simple questions: which resume version gets more interview calls; how many applications I submitted this month; which companies need follow-ups; which interview stages I repeatedly fail; whether my strategy is improving over time.",
      "Most existing tools were either too simple for meaningful insight or too heavy for daily use. I built Job Tracker to centralize the workflow and improve my full-stack engineering practice. Today it combines tracking, analytics, AI assistance, resume management, networking, and automation in one app, and it continues to evolve from real usage.",
    ],
    goals: [
      "Centralize every job application in one place",
      "Replace spreadsheets with a dedicated workflow",
      "Track the complete application lifecycle",
      "Organize resumes and relate them to applications",
      "Automate repetitive follow-up tasks",
      "Generate AI-assisted recruiter emails",
      "Visualize progress through analytics",
      "Ship a production-ready full-stack app with modern tooling",
    ],
    features: [
      {
        title: "Job application management",
        body: "Create, edit, update, archive, and delete applications with detailed opportunity data. Search and filters keep large volumes navigable.",
        bullets: [
          "Company and position",
          "Application status and interview stages",
          "Notes and important dates",
          "Resume used per application",
          "Follow-up reminders",
        ],
      },
      {
        title: "Dashboard",
        body: "A high-level view of the job search so the most important signals are visible without opening every record.",
        bullets: [
          "Total applications",
          "Active opportunities",
          "Interview pipeline",
          "Follow-ups requiring attention",
          "Recent activity",
          "Overall application progress",
        ],
      },
      {
        title: "Resume management",
        body: "Upload and organize multiple resume versions instead of scattering files across folders. Resumes are stored with Cloudinary and linked to applications so you can see which version was used where.",
      },
      {
        title: "Analytics",
        body: "Summaries of job search activity over time to surface trends and support strategy changes—more visibility than counting rows in a spreadsheet.",
      },
      {
        title: "AI features",
        body: "Groq-powered assistance to reduce repetitive writing and support communication with recruiters.",
        bullets: [
          "AI-generated recruiter emails",
          "AI-powered application insights",
          "Context-aware suggestions based on stored job data",
        ],
      },
      {
        title: "Scheduled emails",
        body: "Users configure their own SMTP credentials. The platform can send follow-up emails on a schedule, with GitHub Actions used as the scheduling mechanism.",
      },
      {
        title: "Networking",
        body: "Maintain recruiter and professional contacts, conversations, and follow-ups inside the same workflow as applications.",
      },
      {
        title: "Chrome extension support",
        body: "Extension APIs secured with dedicated API tokens so a browser extension can save opportunities without exposing user session credentials.",
      },
    ],
    techGroups: [
      {
        label: "Frontend",
        items: [
          "Next.js 16 (App Router)",
          "React 19",
          "TypeScript",
          "Tailwind CSS",
          "TanStack React Query",
          "Recharts",
          "Lucide React",
          "next-themes",
        ],
      },
      {
        label: "Backend",
        items: ["Next.js Route Handlers", "Node.js runtime"],
      },
      {
        label: "Database",
        items: ["PostgreSQL", "Prisma ORM", "Neon"],
      },
      {
        label: "Authentication",
        items: [
          "Custom session authentication",
          "HTTP-only cookies",
          "Email verification",
          "scrypt password hashing",
        ],
      },
      {
        label: "Infrastructure",
        items: [
          "Vercel",
          "Cloudinary",
          "Nodemailer",
          "GitHub Actions",
          "Groq API",
          "pnpm",
        ],
      },
    ],
    architectureDiagram: `Browser / Chrome Extension
            │
            ▼
Next.js Middleware
(Session Authentication)
            │
            ▼
React UI (App Router)
            │
            ▼
TanStack React Query
            │
            ▼
Next.js API Routes
            │
            ▼
Business Logic
            │
            ▼
Prisma ORM
            │
            ▼
PostgreSQL (Neon)`,
    engineeringDecisions: [
      "Keep deployment simple without giving up a clear full-stack structure: one Next.js App Router codebase instead of separate frontend/backend repos, with logical separation between presentation, business logic, and persistence.",
      "Shared TypeScript types across UI and API layers, single deploy pipeline (Vercel), one development workflow.",
      "Prisma for strongly typed database access, migrations, and a better DX on PostgreSQL.",
      "TanStack React Query for server state—fewer unnecessary network requests and UI kept in sync with backend data.",
    ],
    roadmap: [
      "AI-powered resume analysis",
      "Personalized job search recommendations",
      "Market trend analysis",
      "Resume optimization suggestions",
      "Success probability predictions",
      "Enhanced analytics dashboards",
      "Smarter follow-up automation",
      "Expanded Chrome extension capabilities",
    ],
    statusNote:
      "Job Tracker is actively used as my personal job search management platform and continues to evolve as I identify new workflows and automation opportunities. Features are driven by real-world usage rather than hypothetical requirements.",
    coverImage: "/Job_Tracker/Dashboard.png",
    visuals: [
      {
        label: "Dashboard overview",
        src: "/Job_Tracker/Dashboard.webp",
        alt: "Job Tracker dashboard showing application stats, pipeline, and recent activity",
      },
      {
        label: "Kanban board",
        src: "/Job_Tracker/kanban.webp",
        alt: "Job Tracker kanban board of applications by status",
      },
      {
        label: "Analytics",
        src: "/Job_Tracker/analytics.webp",
        alt: "Job Tracker analytics charts and job search trends",
      },
      {
        label: "AI email generator",
        src: "/Job_Tracker/email_generator.webp",
        alt: "Job Tracker AI-assisted recruiter email generator",
      },
      {
        label: "System architecture",
        src: "/Job_Tracker/System_architecture.webp",
        alt: "Job Tracker system architecture diagram",
      },
    ],
    sections: [
      {
        title: "Implementation snapshot",
        body: "Current implementation includes full authentication, AI-powered features, resume management, browser extension APIs, scheduled email automation, a PostgreSQL database, and production deployment on Vercel—alongside the route, handler, screen, and model counts shown above.",
      },
    ],
  },
  {
    slug: "habit-tracker",
    title: "AI Agentic Habit Tracker",
    summary:
      "Full-stack AI-powered habit tracking that generates personalized habit plans and adapts recommendations from user activity patterns.",
    year: 2025,
    role: "Full-Stack Developer",
    cover: {
      gradient:
        "linear-gradient(160deg, #12141a 0%, #1c1820 45%, #142018 100%)",
      label: "AI · Product",
    },
    stack: [
      "Next.js",
      "FastAPI",
      "LangChain",
      "Grok API",
      "PostgreSQL",
    ],
    metrics: [
      { label: "Type", value: "Full-stack" },
      { label: "AI", value: "Agentic" },
      { label: "Status", value: "Hosted" },
    ],
    links: {
      github: "https://github.com/rj25031/habit-tracker",
    },
    featured: false,
    domains: ["product"],
    problem:
      "Generic habit apps ignore context. People need plans that adapt to how they actually behave — not static checklists.",
    approach:
      "Developed a full-stack platform with an agentic workflow: LangChain integrated with the Grok API for autonomous habit planning, adjustments, and feedback-driven routine optimization. Backend services on FastAPI with PostgreSQL for users, history, and AI-generated recommendations.",
    impact:
      "A complete path from UI to agent workflow to persistent data — demonstrating LLM integration inside a real product surface, not a notebook demo.",
    challenges: [
      "Designing agent workflows that stay useful and controllable",
      "Storing habit history and recommendations efficiently in PostgreSQL",
      "Connecting Next.js frontend to FastAPI services cleanly",
    ],
    architecture: [
      "Next.js frontend for tracking and plan review",
      "FastAPI backend services for domain logic and AI orchestration",
      "LangChain agent workflow with Grok API",
      "PostgreSQL for user data, habit history, and recommendations",
    ],
    lessons: [
      "Agentic features need clear product boundaries, not unbounded autonomy",
      "PostgreSQL schema design matters as much as the model prompt",
    ],
    timeline: "Personal / portfolio project",
    sections: [
      {
        title: "Stack (from resume)",
        body: "Next.js, FastAPI, LangChain, Grok API, and PostgreSQL — chosen to cover modern full-stack delivery plus practical LLM integration.",
      },
      {
        title: "Repository",
        body: "Public repo: github.com/rj25031/habit-tracker. Hosted deployment is live; add the public URL to this case study when you want it linked.",
      },
    ],
  },
  {
    slug: "frontend-mentor",
    title: "Frontend Mentor UI Challenges",
    summary:
      "15 Frontend Mentor challenges built from scratch to strengthen HTML, CSS, and JavaScript fundamentals before transitioning into modern frontend frameworks and full-stack development.",
    year: 2023,
    role: "Learning Repository · Frontend fundamentals",
    cover: {
      gradient:
        "linear-gradient(135deg, #0c1218 0%, #152028 50%, #1a1612 100%)",
      label: "UI · Practice",
    },
    stack: ["HTML5", "CSS3", "JavaScript (ES6)", "Git", "Netlify"],
    metrics: [
      { label: "Challenges", value: "15" },
      { label: "Stack", value: "HTML/CSS/JS" },
      { label: "Responsive", value: "100%" },
      { label: "Deployments", value: "15" },
    ],
    links: {
      github: "https://github.com/gauravk2203/Frontend",
    },
    featured: true,
    domains: ["design-system", "oss"],
    layout: "showcase",
    coverImage: "/Frontend_Mentor/bento.jpg",
    problem:
      "Watching tutorials alone was not enough. I needed practical exercises that forced layout problem-solving, clean CSS, and interactive behaviour without frameworks.",
    approach:
      "I worked through Frontend Mentor challenges over several months—each providing a professional design I implemented from scratch with semantic HTML, responsive CSS, and JavaScript where required, then deployed individually on Netlify.",
    impact:
      "These projects established frontend principles I still apply in React and full-stack work: component decomposition, responsive layouts, and confident DOM-driven interaction.",
    challenges: [
      "Translating static designs into responsive, interactive interfaces",
      "Building without frameworks so fundamentals stayed sharp",
    ],
    architecture: [
      "Study the provided design",
      "Break the layout into reusable sections",
      "Build semantic HTML",
      "Implement responsive CSS",
      "Add JavaScript interactions where required",
      "Test across screen sizes",
      "Deploy to Netlify",
    ],
    architectureDiagram: `Frontend Mentor Design
            │
            ▼
 Layout Planning
            │
            ▼
 Semantic HTML
            │
            ▼
 Responsive CSS
            │
            ▼
 JavaScript Interactions
            │
            ▼
 Cross-Browser Testing
            │
            ▼
 Netlify Deployment`,
    lessons: [
      "Strong frontend craft comes from repetition—solving layout problems and refining responsiveness",
      "Component decomposition, responsive layouts, and DOM interactions still shape how I build React apps",
      "Building real designs beats passive tutorials for lasting confidence",
    ],
    timeline: "2023 · 15 challenges",
    overview: [
      "Every developer has a starting point. Before React and full-stack apps, I wanted solid fundamentals for the web.",
      "I completed a collection of Frontend Mentor challenges over several months. Each challenge provided a professional UI design that I implemented entirely from scratch using HTML, CSS, and JavaScript.",
      "The goal was not merely to finish challenges—it was to gain confidence translating static designs into responsive, interactive interfaces while improving JavaScript through hands-on DOM work. These projects remain a milestone because they established principles I still use in larger applications.",
    ],
    whyBuilt: [
      "Focus on semantic HTML structure",
      "Practice responsive layouts with Flexbox and Grid",
      "Build cleaner CSS architecture and spacing systems",
      "Strengthen JavaScript DOM manipulation and event handling",
      "Ship interactive UIs with cross-device compatibility",
    ],
    skillObjectives: [
      {
        label: "HTML",
        items: [
          "Semantic, accessible markup",
          "Well-structured page layouts",
          "Reusable content sections",
        ],
      },
      {
        label: "CSS",
        items: [
          "Responsive layouts",
          "Flexbox & CSS Grid",
          "Spacing and typography",
          "Hover and focus states",
          "Mobile-first development",
        ],
      },
      {
        label: "JavaScript",
        items: [
          "DOM manipulation",
          "Event handling",
          "Form validation",
          "Interactive UI behaviour",
          "State updates in the UI",
        ],
      },
    ],
    showcaseChallenges: [
      {
        title: "Bento Grid",
        description:
          "Responsive bento-style multi-panel layout with careful grid alignment and adaptive sections.",
        skills: ["CSS Grid", "Responsive Design", "Layout"],
        image: "/Frontend_Mentor/bento.jpg",
        featured: true,
        source:
          "https://github.com/gauravk2203/Frontend/tree/main/bento-grid-main",
        live: "https://bentogrid-by-gaurav.netlify.app",
      },
      {
        title: "Time Tracking Dashboard",
        description:
          "Dashboard UI for tracking activity time—layout hierarchy, cards, and interactive state switches.",
        skills: ["Layout", "JavaScript", "UI State"],
        image: "/Frontend_Mentor/time-tracking.jpg",
        featured: true,
        source:
          "https://github.com/gauravk2203/Frontend/tree/main/time-tracking-dashboard-main",
        live: "https://timetracking-by-gaurav.netlify.app",
      },
      {
        title: "Testimonials Grid",
        description:
          "Multi-card testimonial section showcasing complex responsive grid composition.",
        skills: ["CSS Grid", "Typography", "Responsive Design"],
        image: "/Frontend_Mentor/testimonials.jpg",
        featured: true,
        source:
          "https://github.com/gauravk2203/Frontend/tree/main/testimonials-grid-section-main",
        live: "https://testmonial-grid-by-gaurav.netlify.app",
      },
      {
        title: "Interactive Rating Component",
        description:
          "Rating interface focused on event handling, selection state, and dynamic UI updates.",
        skills: ["JavaScript", "DOM", "HTML", "CSS"],
        image: "/Frontend_Mentor/rating.jpg",
        featured: true,
        source:
          "https://github.com/gauravk2203/Frontend/tree/main/interactive-rating-component-main",
        live: "https://ratingcomponent-by-gaurav.netlify.app",
      },
      {
        title: "Newsletter Sign-Up",
        description:
          "Responsive sign-up flow with form validation and success-state messaging.",
        skills: ["Forms", "Validation", "Responsive Design"],
        image: "/Frontend_Mentor/newsletter.jpg",
        featured: true,
        source:
          "https://github.com/gauravk2203/Frontend/tree/main/newsletter-sign-up-with-success-message-main",
        live: "https://newsletter-by-gaurav.netlify.app",
      },
      {
        title: "FAQ Accordion",
        description:
          "Accordion component with toggle behaviour and smooth interactive states.",
        skills: ["JavaScript", "Accessibility basics", "CSS"],
        image: "/Frontend_Mentor/faq.jpg",
        featured: true,
        source:
          "https://github.com/gauravk2203/Frontend/tree/main/faq-accordion-main",
        live: "https://faqs-by-gaurav.netlify.app",
      },
      {
        title: "Tip Calculator",
        description:
          "Interactive tip calculator with real-time updates for bill splitting.",
        skills: ["JavaScript", "Forms", "DOM"],
        image: "/Frontend_Mentor/tip-calculator.jpg",
        featured: true,
        source:
          "https://github.com/gauravk2203/Frontend/tree/main/tip-calculator-app-main",
        live: "https://tipcalculator-by-gaurav.netlify.app",
      },
      {
        title: "Recipe Page",
        description:
          "Content-rich recipe layout with clear hierarchy and readable typography.",
        skills: ["Semantic HTML", "Typography", "Responsive Design"],
        image: "/Frontend_Mentor/recipe.jpg",
        featured: true,
        source:
          "https://github.com/gauravk2203/Frontend/tree/main/recipe-page-main",
        live: "https://recipepage-by-gaurav.netlify.app",
      },
      {
        title: "QR Code Component",
        description:
          "Responsive card component built with semantic HTML and modern CSS.",
        skills: ["HTML", "CSS", "Responsive Design"],
        image: "/Frontend_Mentor/qr-code-design.jpg",
        featured: false,
        source: "https://github.com/gauravk2203/Frontend/tree/main/QR-code",
        live: "https://qr-by-gaurav.netlify.app",
      },
      {
        title: "Four Card Feature Section",
        description:
          "Feature grid with consistent card structure and responsive arrangement.",
        skills: ["CSS Grid", "Flexbox", "UI Patterns"],
        image: "/Frontend_Mentor/four-card.jpg",
        featured: false,
        source:
          "https://github.com/gauravk2203/Frontend/tree/main/four-card-feature-section-master",
        live: "https://fourcard-feature-by-gaurav.netlify.app",
      },
      {
        title: "Product Preview Card",
        description:
          "Product card presenting essentials with clean responsive design.",
        skills: ["CSS", "Layout", "Responsive Design"],
        image: "/Frontend_Mentor/product-preview.jpg",
        featured: false,
        source:
          "https://github.com/gauravk2203/Frontend/tree/main/product-preview-card-component-main",
        live: "https://product-preview-card-by-gaurav.netlify.app",
      },
      {
        title: "Blog Preview Card",
        description:
          "Blog post preview card with image and text for scannable content.",
        skills: ["HTML", "CSS", "Card UI"],
        image: "/Frontend_Mentor/blog-preview.jpg",
        featured: false,
        source:
          "https://github.com/gauravk2203/Frontend/tree/main/blog-preview-card-main",
        live: "https://blog-previewcard-by-gaurav.netlify.app",
      },
      {
        title: "Article Preview Card",
        description:
          "Article preview with interactive hover treatment and share affordances.",
        skills: ["CSS", "JavaScript", "Interaction"],
        image: "/Frontend_Mentor/article-preview.jpg",
        featured: false,
        source:
          "https://github.com/gauravk2203/Frontend/tree/main/article-preview-component-master",
        live: "https://articlepreviewcard-by-gaurav.netlify.app",
      },
      {
        title: "Social Links Profile",
        description:
          "Profile card with social links—modern, compact, and polished.",
        skills: ["HTML", "CSS", "Component UI"],
        image: "/Frontend_Mentor/social-links.jpg",
        featured: false,
        source:
          "https://github.com/gauravk2203/Frontend/tree/main/social-links-profile-main",
        live: "https://social-links-card-by-gaurav.netlify.app",
      },
      {
        title: "Contact Form",
        description:
          "Contact form with validation states and success feedback.",
        skills: ["Forms", "Validation", "CSS States"],
        image: "/Frontend_Mentor/contact-form.jpg",
        featured: false,
        source:
          "https://github.com/gauravk2203/Frontend/tree/main/Contact-form",
        live: "https://contactform-by-gaurav.netlify.app",
      },
    ],
    techGroups: [
      {
        label: "Frontend",
        items: ["HTML5", "CSS3", "JavaScript (ES6)"],
      },
      {
        label: "Tools",
        items: ["Git", "GitHub", "Netlify"],
      },
    ],
    repositoryNote:
      "The repository holds all 15 challenge implementations. Each project was developed independently and deployed as a standalone app. Together they document my frontend fundamentals journey and the groundwork for later React and full-stack work.",
    sections: [],
  },
  {
    slug: "document-verification-blockchain",
    title: "Document Verification Using Blockchain",
    summary:
      "A decentralized document verification platform that leverages Ethereum smart contracts and IPFS to create tamper-proof academic document verification. Final-year major project combining academic research with a production-style implementation — Best Research Paper Award at ICEE 2025.",
    year: 2025,
    role: "Research · Full-Stack Development · Academic Major Project",
    cover: {
      gradient:
        "linear-gradient(150deg, #14120e 0%, #1a1e24 55%, #121816 100%)",
      label: "Research · Blockchain",
    },
    stack: [
      "React 19",
      "Node.js",
      "Express",
      "MongoDB",
      "Solidity",
      "Ethereum",
      "IPFS",
      "Ethers.js",
      "Hardhat",
    ],
    metrics: [
      { label: "Award", value: "Best paper" },
      { label: "Venue", value: "ICEE 2025" },
      { label: "Stack", value: "Eth + IPFS" },
      { label: "Build", value: "Full-stack" },
    ],
    links: {
      github:
        "https://github.com/gauravk2203/Document-Verification-Using-Blockchain",
    },
    featured: true,
    domains: ["research", "oss"],
    layout: "product",
    problem:
      "Universities and organizations verify student documents through manual phone calls, email checks, physical validation, and centralized databases. That process is slow, human-dependent, opaque, and vulnerable to tampering—with limited auditability and a single point of failure. The challenge was independent authenticity checks with immutable records.",
    approach:
      "The platform records immutable document fingerprints on Ethereum while storing original files on IPFS. On upload, a cryptographic hash is generated, the file is pinned via IPFS/Pinata, and the hash is written on-chain through a Solidity smart contract. Verification re-hashes the document and compares it to the blockchain record—any change breaks the match.",
    impact:
      "Demonstrated that blockchain can improve document verification through immutable records, transparent checks, reduced manual dependency, and stronger integrity between institutions. Presented at the 4th International Conference on Engineering Excellence (ICEE 2025) and received the Best Research Paper Award. Personally, it was a turning point from frontend-heavy work into full-stack and distributed systems.",
    challenges: [
      "Learning blockchain development from scratch—smart contracts, gas, wallets, ABIs, and deployment tooling.",
      "Smart contract communication: Express failed to talk to the deployed contract for nearly four days until an ABI/version compatibility issue was identified and fixed.",
      "Integrating MongoDB, Ethereum, IPFS, Express, and React while keeping decentralized and centralized data consistent.",
    ],
    architecture: [
      "React + Vite frontend for presentation and verification UI",
      "Express REST API for business logic and orchestration",
      "MongoDB for users, metadata, and verification records",
      "IPFS (Pinata) for document file storage",
      "Ethereum smart contract for immutable hash storage and verification",
      "Server-side Ethereum wallet for controlled on-chain writes",
    ],
    architectureDiagram: `User Uploads Document
          │
          ▼
Generate Cryptographic Hash
          │
          ├──────────────► Upload Original File to IPFS
          │
          ▼
Store Document Hash on Ethereum
          │
          ▼
Document Verification Request
          │
          ▼
Generate Hash Again
          │
          ▼
Compare With Blockchain Hash
          │
          ▼
Verified ✓ / Invalid ✕`,
    lessons: [
      "End-to-end request lifecycle across UI, API, database, and chain",
      "Authentication, authorization, and role-based access in a real app",
      "REST API architecture and file upload pipelines",
      "Smart contracts, ABIs, and blockchain tooling (Hardhat, Ethers.js)",
      "Distributed storage with IPFS alongside traditional databases",
      "Layered architecture—and how independent systems form one product",
    ],
    timeline: "2025 · Final-year major project",
    overview: [
      "This project was our final-year engineering major project with a team of four. Research and paper publication were collaborative; I independently designed and developed the complete software application.",
      "The goal was to address a core limitation of traditional document verification: trust. Instead of relying only on centralized databases and manual checks, the platform stores immutable document fingerprints on Ethereum and holds the original files on IPFS so authorized parties can verify authenticity without depending on a single organization.",
      "The work combined academic research, blockchain development, distributed storage, and full-stack engineering into one system—and later received the Best Research Paper Award at ICEE 2025.",
    ],
    solutionSteps: [
      "Generate a unique cryptographic hash of the uploaded document",
      "Upload the original file to IPFS",
      "Permanently store the hash on Ethereum via a smart contract",
      "On verification, hash the document again",
      "Compare the new hash against the blockchain record",
      "Return verified if hashes match; invalid if they differ (tamper detection)",
    ],
    contributions: [
      "Frontend development (React + Vite)",
      "Backend API development (Express)",
      "Database design (MongoDB / Mongoose)",
      "JWT authentication and role-based access control",
      "Smart contract integration and Ethereum communication (Ethers.js)",
      "IPFS integration and document upload pipeline",
      "Hash generation and verification workflow",
      "Overall application architecture",
    ],
    features: [
      {
        title: "Secure authentication",
        body: "Account security and protected access across the application.",
        bullets: [
          "JWT authentication",
          "Password hashing with bcrypt",
          "Protected routes and session management",
        ],
      },
      {
        title: "Document upload",
        body: "Academic documents move through a pipeline that separates storage from integrity proofs.",
        bullets: [
          "Upload academic documents",
          "Store files on IPFS",
          "Generate unique document hashes",
        ],
      },
      {
        title: "Blockchain integration",
        body: "On-chain fingerprints provide immutability without storing full files on Ethereum.",
        bullets: [
          "Immutable hashes on Ethereum",
          "Smart contract-based verification",
          "Permanent audit trail",
        ],
      },
      {
        title: "Verification portal",
        body: "Operators re-check a document against the chain in a clear, end-to-end flow.",
        bullets: [
          "Upload document",
          "Generate hash",
          "Compare blockchain record",
          "Return verification status",
        ],
      },
      {
        title: "Decentralized storage model",
        body: "Clear separation of concerns across storage layers.",
        bullets: [
          "Documents on IPFS",
          "Metadata in MongoDB",
          "Only fingerprints on blockchain",
        ],
      },
      {
        title: "Administrative dashboard",
        body: "Operational views for running the verification platform.",
        bullets: [
          "Document management",
          "User management",
          "Verification records",
          "Transaction monitoring",
        ],
      },
    ],
    techGroups: [
      {
        label: "Frontend",
        items: [
          "React 19",
          "Vite 6",
          "Tailwind CSS 4",
          "React Router DOM 7",
          "Axios",
          "React Hot Toast",
          "React Icons / Font Awesome",
          "Three.js",
          "JS Cookie",
        ],
      },
      {
        label: "Backend",
        items: [
          "Node.js",
          "Express.js",
          "MongoDB",
          "Mongoose",
          "JWT",
          "bcryptjs",
          "Multer",
          "Cookie Parser",
          "CORS",
          "dotenv",
        ],
      },
      {
        label: "Blockchain",
        items: [
          "Solidity",
          "Ethereum",
          "Hardhat",
          "Hardhat Ignition",
          "Ethers.js v6",
          "Alchemy RPC",
        ],
      },
      {
        label: "Storage",
        items: ["IPFS", "Pinata"],
      },
      {
        label: "Security",
        items: [
          "JWT authentication",
          "Password hashing",
          "Role-based access",
          "Server-side Ethereum wallet",
        ],
      },
    ],
    engineeringDecisions: [
      "Only document fingerprints live on-chain so verification stays immutable while keeping gas costs practical.",
      "React handles presentation; Express exposes REST APIs; MongoDB stores users and metadata; IPFS holds files; Ethereum stores hashes—each layer has a single responsibility.",
      "Solidity contract stores hashes, associates them with student identifiers, prevents duplicate registrations, and returns verification status.",
      "Server-side wallet and environment-based secrets keep chain writes controlled from the backend rather than exposing keys in the browser.",
    ],
    securityLayers: [
      {
        label: "Authentication",
        items: ["JWT tokens", "Password hashing", "Protected APIs"],
      },
      {
        label: "Blockchain",
        items: ["Immutable transaction records", "Smart contract validation"],
      },
      {
        label: "Storage",
        items: ["IPFS content addressing", "Hash-based integrity verification"],
      },
      {
        label: "Backend",
        items: [
          "Secure server-side Ethereum wallet",
          "Environment-based secret management",
          "Request validation",
        ],
      },
    ],
    researchNotes: [
      "Problem identification and literature review",
      "Blockchain architecture research",
      "System implementation and experimental validation",
      "Research paper publication and conference presentation",
      "Best Research Paper Award — 4th International Conference on Engineering Excellence (ICEE 2025)",
    ],
    repositoryNote:
      "Source is public at github.com/gauravk2203/Document-Verification-Using-Blockchain. Optional portfolio assets: hero screenshot, architecture diagram, verification UI, award certificate — drop files in public/Document_Verification/ when ready.",
    sections: [
      {
        title: "Smart contract role",
        body: "The Solidity contract is the immutable source of truth: store document hash, associate it with a student identifier, prevent duplicate registrations, verify authenticity, and return status—without putting full documents on-chain.",
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: projects[index - 1] ?? null,
    next: projects[index + 1] ?? null,
  };
}
