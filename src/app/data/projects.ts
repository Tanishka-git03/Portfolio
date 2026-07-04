export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  role: string;
  year: string;
  liveUrl?: string;
  githubUrl?: string;
  features: string[];
  challenges: string;
  outcome: string;
}

export const projects: Project[] = [
  {
    id: "analytics-dashboard",
    title: "Analytics Dashboard",
    tagline: "Real-time data visualization platform",
    description:
      "A comprehensive analytics platform that surfaces key business metrics through interactive charts and live data streams.",
    longDescription:
      "Built to replace a clunky spreadsheet workflow, this dashboard aggregates data from multiple sources and presents it in a way that non-technical stakeholders can actually act on. I designed the information hierarchy from scratch based on user interviews, then implemented the front-end with React and Recharts.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBhcHAlMjBkYXNoYm9hcmQlMjBVSSUyMGRlc2lnbnxlbnwxfHx8fDE3ODI5OTcxMDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "TypeScript", "Recharts", "REST API", "Tailwind CSS"],
    role: "Full-Stack Developer",
    year: "2025",
    liveUrl: "#",
    githubUrl: "#",
    features: [
      "Live data polling with WebSocket fallback",
      "Customizable date range filters and comparison periods",
      "Exportable reports in CSV and PDF",
      "Role-based access control for team members",
    ],
    challenges:
      "The biggest technical challenge was reconciling data from three different APIs with mismatched time zones and inconsistent field names. I wrote a normalisation layer that maps incoming payloads to a single internal schema before any component touches the data.",
    outcome:
      "Reduced the weekly reporting cycle from 4 hours to under 15 minutes. The team now catches revenue anomalies the same day they occur.",
  },
  {
    id: "shopflow-mobile",
    title: "ShopFlow Mobile",
    tagline: "E-commerce app with a seamless checkout",
    description:
      "A cross-platform mobile shopping app focused on reducing checkout friction and boosting conversion rates.",
    longDescription:
      "ShopFlow started as a hackathon project and grew into a production app used by a boutique retailer. The goal was a one-thumb-friendly interface that keeps the path from product discovery to purchase under three taps. I led the React Native build and collaborated closely with a backend engineer on the cart and payment integration.",
    image:
      "https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzgzMTAzNTE5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React Native", "Expo", "Stripe", "Node.js", "PostgreSQL"],
    role: "Lead Mobile Developer",
    year: "2024",
    liveUrl: "#",
    githubUrl: "#",
    features: [
      "Biometric authentication for returning users",
      "Apple Pay & Google Pay via Stripe",
      "Optimistic UI updates for instant perceived performance",
      "Offline-first product browsing with local cache",
    ],
    challenges:
      "Stripe's mobile SDK behaved differently across Android manufacturers. I built an abstraction layer that normalises the payment sheet across devices and falls back to a WebView for unsupported configurations.",
    outcome:
      "Cart abandonment dropped by 34% in the first month. App Store rating sits at 4.8 stars across 200+ reviews.",
  },
  {
    id: "devcollab",
    title: "DevCollab",
    tagline: "Async collaboration tool for distributed teams",
    description:
      "A developer-first workspace that combines code review, async video messages, and project planning in one place.",
    longDescription:
      "Remote-first teams often juggle four or five tools just to ship a single feature. DevCollab folds the essentials—pull request review, short-form async video, and a lightweight kanban board—into a single interface. I built the front-end and designed the real-time presence system using CRDTs.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBjb2RpbmclMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzgzMTAzNTIwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "WebRTC", "CRDTs", "GraphQL", "Redis"],
    role: "Front-End Lead",
    year: "2025",
    githubUrl: "#",
    features: [
      "Real-time collaborative code annotations",
      "Async video replies up to 5 minutes",
      "GitHub & GitLab PR sync",
      "Presence indicators with CRDT-backed conflict resolution",
    ],
    challenges:
      "Getting WebRTC to work reliably behind restrictive corporate firewalls required a TURN server setup and a negotiation fallback to server-sent events for teams that blocked UDP entirely.",
    outcome:
      "Beta users reported a 40% reduction in synchronous meetings. The project won Best Developer Tool at a regional startup showcase.",
  },
  {
    id: "ecotracker",
    title: "EcoTracker",
    tagline: "Personal carbon footprint tracker",
    description:
      "A sustainability app that helps individuals measure, understand, and reduce their environmental impact.",
    longDescription:
      "EcoTracker grew from a personal frustration with carbon calculators that spit out a number and leave you with no idea what to do next. I designed the app around actionable weekly goals rather than abstract totals, and built an ML-assisted suggestion engine that learns from your past habits.",
    image:
      "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHx3ZWIlMjBhcHAlMjBkYXNoYm9hcmQlMjBVSSUyMGRlc2lnbnxlbnwxfHx8fDE3ODI5OTcxMDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Next.js", "Python", "FastAPI", "Chart.js", "OpenAI API"],
    role: "Solo Developer",
    year: "2024",
    liveUrl: "#",
    githubUrl: "#",
    features: [
      "Automated import from bank statements to infer purchases",
      "Weekly habit streaks and gamified milestones",
      "AI-generated personalised reduction tips",
      "Community leaderboard with anonymised comparisons",
    ],
    challenges:
      "Parsing bank statement PDFs accurately across dozens of bank formats required building a multi-pass extraction pipeline with manual fallback prompts for ambiguous line items.",
    outcome:
      "500+ active users, average tracked reduction of 12% carbon footprint within 3 months of onboarding.",
  },
];

export const getProjectById = (id: string) =>
  projects.find((p) => p.id === id);
