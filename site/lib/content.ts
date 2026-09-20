/**
 * Single source of truth for everything the site says.
 * Edit here; every page reads from these exports.
 */

export const SITE = {
  name: "Wasif Ali",
  handle: "wasifali",
  role: "Senior Full Stack Developer",
  tagline:
    "Ten years of Node.js and TypeScript backends, microservices at 200K requests a day, React and Angular front ends, Web3 integrations.",
  location: "Lahore, Pakistan",
  timezone: "UTC+5",
  overlap: "EU afternoon · US morning",
  email: "wasifale@gmail.com",
  phoneDisplay: "+92 321 3555 225",
  phoneHref: "tel:+923213555225",
  whatsapp: "https://wa.me/923213555225",
  linkedin: "https://www.linkedin.com/in/wasifali1",
  github: "https://github.com/wasifali",
  resumeUrl: "/resume/Wasif-Ali-Resume.pdf",
  available: true,
  availableFor: "Senior / Lead / Staff roles",
  url: "https://wasifali.dev",
} as const;

export const NAV = [
  { label: "Work", href: "/work" },
  { label: "Experience", href: "/experience" },
  { label: "About", href: "/about" },
] as const;

export const STATS = [
  { value: "10", label: "years in production" },
  { value: "52", label: "services led · BMW ERP" },
  { value: "1M+", label: "marketplace transactions" },
  { value: "−60%", label: "API latency · 1500 → 600 ms" },
  { value: "−70%", label: "post-release defects" },
  { value: "15+", label: "engineers mentored" },
] as const;

export const STACK = {
  daily: ["Node.js", "TypeScript", "NestJS", "React", "MongoDB", "Redis", "REST APIs"],
  shipped: ["Angular", "Go", "Solidity", "Web3.js", "AWS", "Docker", "WebSockets", "Jenkins"],
  working: ["Next.js", "PostgreSQL", "Datadog", "Coralogix", "Ethers.js", "Polygon"],
} as const;

export interface Metric { value: string; label: string }
export interface CaseStudy {
  slug: string;
  title: string;
  short: string;
  tag: string;
  period: string;
  company: string;
  role: string;
  team: string;
  stack: string[];
  metrics: Metric[];
  summary: string;
  problem: string;
  built: string[];
  broke: string;
  results: string;
  /** CSS gradient used as the card art until a real screenshot is added to /public/work */
  art: string;
  image?: string;
  live?: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "bmw-erp-microservices",
    title: "BMW Mini & Motorrad ERP",
    short: "Microservices platform behind two global marques",
    tag: "Enterprise · ERP",
    period: "2021 → 2026",
    company: "Big Immersive",
    role: "Backend lead",
    team: "6 engineers",
    stack: ["Node.js", "TypeScript", "NestJS", "MongoDB", "Redis", "Docker"],
    metrics: [
      { value: "200K", label: "requests per day sustained" },
      { value: "−60%", label: "average latency, 1500 ms → 600 ms" },
      { value: "−70%", label: "post-release defects" },
    ],
    summary:
      "Backend platform behind the digital surfaces of two BMW marques, built to absorb dealer and consumer traffic without degradation.",
    problem:
      "Two global marques, one shared backend, and traffic that arrived in dealer-hours bursts. Response times hovered around 1.5 seconds and every new feature landed as another tightly coupled module. The estate needed service boundaries, a caching strategy and a review process that could hold a six-person team to one standard.",
    built: [
      "Defined service boundaries across the 52-service estate and the RESTful API contracts between them.",
      "Designed the Redis caching strategy, including invalidation and cold-start behaviour, that cut average latency by 60%.",
      "Ran architecture planning and code review for six engineers, and set up the peer review program.",
      "Refactored the front-end architecture, cutting page load by 75% alongside expanded QA coverage.",
    ],
    broke:
      "The first cache design invalidated by entity, which meant a single dealer update fanned out into hundreds of evictions during peak hours and briefly made latency worse. Moving to versioned keys with request coalescing fixed the stampede and is the pattern I now reach for first.",
    results:
      "Sustained throughput across a service estate serving two global marques, 200K requests a day, with average response time down from 1500 ms to 600 ms and post-release defects down 70% after the review program.",
    art: "linear-gradient(150deg, #7C2D12, #1a0a05)",
  },
  {
    slug: "consumer-marketplace",
    title: "Consumer Marketplace",
    short: "Web3 payments and ownership under a React front end",
    tag: "Consumer · Web3",
    period: "2021 → 2026",
    company: "Big Immersive",
    role: "Architect and lead",
    team: "Cross-functional product team",
    stack: ["React", "Node.js", "Solidity", "Web3.js", "MongoDB"],
    metrics: [
      { value: "50K+", label: "users" },
      { value: "1M+", label: "transactions processed" },
      { value: "−75%", label: "page load time" },
    ],
    summary:
      "A consumer marketplace with blockchain-based payment and ownership flows layered under a conventional React front end, so on-chain ownership stays legible to non-crypto users.",
    problem:
      "Users wanted the guarantees of on-chain ownership without learning what a wallet is. Early flows exposed gas, confirmations and failed transactions directly, and drop-off at checkout was severe.",
    built: [
      "Designed the transaction pipeline and integrated MetaMask and WalletConnect authentication.",
      "Authored and gas-optimised the Solidity contracts, cutting transaction costs by 10%.",
      "Integrated wallet and smart-contract flows into 15+ production applications.",
      "Refactored the React architecture and expanded QA coverage, cutting page load 75%.",
    ],
    broke:
      "Wallet sessions did not survive network switches, so a user who changed chains mid-checkout lost their cart. A session layer keyed on account plus chain, with explicit chain guards before signing, removed the whole class of support tickets.",
    results:
      "50K+ users and over a million transactions processed, with gas-optimised contracts and wallet flows reused across 15+ applications.",
    art: "linear-gradient(150deg, #C2410C, #1a0a05)",
  },
  {
    slug: "ocr-annotation-platform",
    title: "OCR Annotation Platform",
    short: "MERN pipeline for 100+ client teams",
    tag: "MERN · Automation",
    period: "2019 → 2021",
    company: "CreativeMorph",
    role: "Full-stack engineer",
    team: "Agency delivery team",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    metrics: [
      { value: "1000+", label: "images per month" },
      { value: "100+", label: "client teams" },
      { value: "10+ h", label: "saved per week via webhooks" },
    ],
    summary:
      "An OCR-driven annotation platform with admin dashboards, built for client teams processing recurring image workloads.",
    problem:
      "Client operations lived in manual handoffs between annotation, review and delivery. Every step happened in a different tool and nobody had a single view of the queue.",
    built: [
      "Built the annotation pipeline and admin surfaces on the MERN stack.",
      "Delivered Microsoft Teams messaging extensions and modular dashboards adopted by 10K+ end users.",
      "Automated cross-tool workflows with custom Slack, Trello, JIRA and GitHub webhooks.",
      "Refactored legacy code, improving test coverage by 20%.",
    ],
    broke:
      "OCR confidence scores were trusted too early, so low-quality scans flowed straight to clients. A review threshold with a human-in-the-loop queue fixed quality without slowing the happy path.",
    results:
      "1000+ images a month for 100+ clients, 10K+ end users on the dashboards, and 10+ hours a week returned to operations.",
    art: "linear-gradient(150deg, #F97316, #431407)",
  },
  {
    slug: "fitness-health-cms",
    title: "Fitness & Health CMS",
    short: "Payment rails and CMS for 100K+ users",
    tag: "Payments · CMS",
    period: "2016 → 2019",
    company: "Novatore Solutions",
    role: "Software engineer",
    team: "Product team of 5",
    stack: ["Angular", "Node.js", "WebSockets", "AWS", "Jenkins"],
    metrics: [
      { value: "100K+", label: "users served" },
      { value: "hours → min", label: "deployment time" },
      { value: "5", label: "engineers trained" },
    ],
    summary:
      "CMS platforms and payment gateway integrations for fitness and health applications, with real-time features and automated delivery.",
    problem:
      "Releases were manual events measured in hours, and the CMS had no real-time layer for live class schedules and payments.",
    built: [
      "Developed payment gateway integrations and CMS backends for fitness and health apps.",
      "Built the Angular front-end architecture with real-time WebSocket communication.",
      "Automated production deployment with AWS and Jenkins.",
      "Designed and led internal Angular and DevOps training for five engineers.",
    ],
    broke:
      "The first WebSocket layer re-broadcast full schedules on every change and fell over on Monday mornings. Delta updates and per-client subscriptions brought it back under control.",
    results:
      "100K+ users served, deployment time cut from hours to minutes, and a team trained to keep it that way.",
    art: "linear-gradient(150deg, #FDBA74, #7C2D12)",
  },
];

export interface Role {
  period: string;
  title: string;
  company: string;
  companyUrl?: string;
  mode: string;
  summary: string;
  bullets: string[];
  tags: string[];
}

export const EXPERIENCE: Role[] = [
  {
    period: "Jan 2025 — Apr 2026",
    title: "Full Stack Engineer",
    company: "Ibanera",
    companyUrl: "https://www.linkedin.com/company/ibanera-llc/",
    mode: "Full-time · Remote",
    summary:
      "Fintech product engineering split between React front ends and Go / Node.js backend services.",
    bullets: [
      "Designed, developed and maintained scalable web applications with React on the front end and Node.js and Go services behind them.",
      "Architected RESTful and event-driven APIs with a focus on performance, reliability and security.",
      "Built high-throughput, low-latency backend services in Go and feature-rich application services in Node.js.",
      "Integrated third-party services, authentication mechanisms and external APIs.",
      "Led technical discussions, mentored junior developers, and contributed to architecture and technology decisions.",
    ],
    tags: ["React", "Node.js", "Go", "TypeScript", "Event-driven APIs"],
  },
  {
    period: "2021 — 2026",
    title: "Senior Full Stack Developer",
    company: "Big Immersive",
    mode: "Full-time · Lahore",
    summary:
      "Led backend architecture for enterprise ERP microservices and consumer Web3 platforms, with ownership of performance, review culture and mentorship.",
    bullets: [
      "Led backend development of ERP microservices powering BMW Mini & BMW Motorrad digital platforms: 200K requests/day across 52 services.",
      "Architected and launched a consumer marketplace (React, Node.js) serving 50K+ users and processing 1M+ transactions.",
      "Designed Redis caching layers and RESTful APIs, cutting average response time from 1500 ms to 600 ms.",
      "Established a peer code review program and mentored 10 junior engineers, reducing post-release defects by 70%.",
      "Integrated wallet authentication (MetaMask, WalletConnect) into 15+ production applications; gas-optimised Solidity cut costs 10%.",
    ],
    tags: ["NestJS", "TypeScript", "MongoDB", "Redis", "Solidity", "AWS"],
  },
  {
    period: "2019 — 2021",
    title: "Senior JavaScript Engineer",
    company: "CreativeMorph",
    mode: "Full-time · Lahore",
    summary:
      "Full-stack delivery for Silicon Valley startup clients, and the reference architecture the agency reused across its book of business.",
    bullets: [
      "Delivered full-stack features for three Silicon Valley startup clients on aggressive release cycles.",
      "Built the OCR annotation platform (MERN) processing 1000+ images/month for 100+ clients.",
      "Designed a NestJS + TypeScript reference architecture reused across 20+ client projects.",
      "Earned the company-wide performance award twice in one year.",
    ],
    tags: ["NestJS", "React", "Express", "MongoDB", "Webhooks"],
  },
  {
    period: "2016 — 2019",
    title: "Software Engineer",
    company: "Novatore Solutions",
    mode: "Full-time · Lahore",
    summary:
      "Payment and CMS platforms for consumer health products, and deployment automation for a release process that had been manual.",
    bullets: [
      "Developed payment gateway integrations and CMS platforms for fitness and health apps serving 100K+ users.",
      "Built Angular front-end architecture with real-time WebSocket features.",
      "Automated production deployments with AWS and Jenkins, reducing release time from hours to minutes.",
    ],
    tags: ["Angular", "Node.js", "WebSockets", "AWS", "Jenkins"],
  },
];

export const PRINCIPLES = [
  { title: "Production is the only real test.", body: "Shipped means it has handled real users and real failures, not that it passed review." },
  { title: "p95 is the number that matters.", body: "Averages hide the dealer who waited four seconds." },
  { title: "Review is a system, not a favour.", body: "A program with owners and metrics cut post-release defects by 70%." },
  { title: "Write it down.", body: "Distributed teams run on notes a teammate can read without a meeting." },
] as const;

export const EDUCATION = { degree: "BS Computer Science", school: "PUCIT, Lahore", years: "2012 – 2016" } as const;

export const CERTIFICATIONS = [
  { title: "Ethereum & Solidity: The Complete Developer's Guide", issuer: "Udemy" },
  { title: "Go (Golang): The Complete Developer's Guide", issuer: "Udemy" },
] as const;

export const WRITING_SOON = [
  "Redis caching that survives cold starts and cache stampedes",
  "NestJS + TypeScript as a reusable service baseline",
  "Wallet flows legible to non-crypto users",
] as const;
