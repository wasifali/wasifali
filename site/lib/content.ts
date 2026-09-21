/**
 * Single source of truth for everything the site says.
 * Mirrors public/resume/Wasif-Ali-Resume.pdf; edit here and every page follows.
 */

export const SITE = {
  name: "Wasif Ali",
  handle: "wasifali",
  role: "Engineering Leader & Architect",
  /** One-line positioning, as printed under the name on the résumé. */
  headline: "Engineering Leader · Team Lead & Architect · Node.js · TypeScript · React · AWS",
  tagline:
    "Ten years in software, the last five running teams. Node.js and TypeScript backends, Go services, React front ends, microservices at 200K requests a day, and 15+ engineers mentored.",
  summary:
    "Engineering leader with ten years in software and the last five running teams. Led a 7-person cross-functional group, spanning frontend, backend, blockchain and QA, that owned architecture, delivery and code quality for a marketplace serving 50K+ users and 1M+ transactions, plus the 5-person backend group behind ERP microservices for BMW Mini and Motorrad at 200K requests a day. Most recently contracted for 16 months on Go and React services, leading technical discussions and mentoring junior developers. Have mentored 15+ engineers, set the code review and QA standards the teams I've led run on, and still write production code in Node/TypeScript, Go and React. Comfortable being the person accountable for both the technical call and the ship date.",
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
  availableFor: "Engineering Lead / Staff / EM roles",
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
  { value: "7", label: "engineers led · cross-functional" },
  { value: "1M+", label: "marketplace transactions" },
  { value: "−60%", label: "API latency · 1500 → 600 ms" },
  { value: "−70%", label: "post-release defects" },
  { value: "15+", label: "engineers mentored" },
] as const;

/** Skill groups exactly as they appear on the résumé. */
export const SKILLS = [
  {
    title: "Leadership & Delivery",
    items: ["Team leadership (5–7 engineers)", "Mentoring & career growth", "Hiring and onboarding", "Architecture ownership", "Technical roadmapping", "Delivery coordination", "Code review programs", "Engineering standards", "QA collaboration", "Agile/Scrum"],
  },
  {
    title: "Languages & Frameworks",
    items: ["JavaScript (ES6+)", "TypeScript", "Go", "Node.js", "React.js", "NestJS", "Express.js", "Angular"],
  },
  {
    title: "Backend & Data",
    items: ["PostgreSQL", "SQL", "MongoDB", "Redis", "REST APIs", "Event-driven APIs", "Queues", "Microservices architecture", "WebSockets/RTC", "Database design", "Query optimization", "Data migrations"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS", "AWS Lambda", "Serverless architecture", "Docker", "Jenkins", "Git", "CI/CD", "JIRA"],
  },
  {
    title: "Blockchain / Web3",
    items: ["Solidity", "Ethereum", "Web3.js", "Hardhat", "ERC-721 / ERC-1155", "Smart contract security"],
  },
] as const;

/** Short pill sets for the bento tiles; SKILLS above is the long form. */
export const STACK = {
  daily: ["Node.js", "TypeScript", "Go", "React", "NestJS", "PostgreSQL", "MongoDB", "Redis", "REST APIs"],
  shipped: ["Angular", "Express.js", "Solidity", "Web3.js", "Hardhat", "AWS Lambda", "Docker", "Jenkins", "WebSockets", "CI/CD"],
  leadership: ["Team leadership", "Mentoring", "Hiring & onboarding", "Architecture ownership", "Technical roadmapping", "Code review programs", "QA collaboration", "Agile/Scrum"],
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
  /** CSS gradient behind the artwork; also the fallback when `image` is absent */
  art: string;
  /** Themed SVG illustration in /public/work, 1600×600 (8:3) */
  image?: string;
  live?: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "bmw-erp-microservices",
    title: "BMW Mini & Motorrad ERP",
    short: "Microservices platform behind two global marques",
    tag: "Enterprise · ERP",
    period: "2021 → Dec 2025",
    company: "Big Immersive",
    role: "Engineering lead, backend",
    team: "5-person backend group",
    stack: ["Node.js", "TypeScript", "NestJS", "PostgreSQL", "MongoDB", "Redis", "AWS Lambda", "Docker"],
    metrics: [
      { value: "200K", label: "requests per day sustained" },
      { value: "−60%", label: "average latency, 1500 ms → 600 ms" },
      { value: "−70%", label: "post-release defects" },
    ],
    summary:
      "Backend platform behind the digital surfaces of two BMW marques, built to absorb dealer and consumer traffic without degradation.",
    problem:
      "Two global marques, one shared backend, and traffic that arrived in dealer-hours bursts. Response times hovered around 1.5 seconds and every new feature landed as another tightly coupled module. The estate needed service boundaries, a caching strategy and a review process that could hold a five-person backend group to one standard.",
    built: [
      "Led backend development across the 52-service estate and set the architecture direction and review standards for the backend group, making the trade-offs between performance, maintainability, reliability and delivery speed.",
      "Designed the Redis caching layers and REST APIs, including invalidation and cold-start behaviour, that cut average response time from 1500 ms to 600 ms.",
      "Built production services in Node.js, TypeScript, PostgreSQL, Redis, queues and JWT auth, with AWS Lambda and serverless workloads where bursty traffic justified them.",
      "Established peer code review and mentored 10 junior engineers, reducing post-release defects by 70%.",
      "Refactored the front-end architecture and expanded QA coverage, cutting page load time by 75%.",
    ],
    broke:
      "The first cache design invalidated by entity, which meant a single dealer update fanned out into hundreds of evictions during peak hours and briefly made latency worse. Moving to versioned keys with request coalescing fixed the stampede and is the pattern I now reach for first.",
    results:
      "Sustained throughput across a service estate serving two global marques, 200K requests a day, with average response time down from 1500 ms to 600 ms and post-release defects down 70% after the review program.",
    image: "/work/bmw-erp.svg",
    art: "linear-gradient(150deg, #7C2D12, #1a0a05)",
  },
  {
    slug: "consumer-marketplace",
    title: "Consumer Marketplace",
    short: "Web3 payments and ownership under a React front end",
    tag: "Consumer · Web3",
    period: "2021 → Dec 2025",
    company: "Big Immersive",
    role: "Engineering lead and architect",
    team: "7 engineers · 2 frontend, 2 backend, 1 blockchain, 2 QA",
    stack: ["React", "Node.js", "TypeScript", "Solidity", "Web3.js", "Hardhat", "MongoDB"],
    metrics: [
      { value: "50K+", label: "users" },
      { value: "1M+", label: "transactions processed" },
      { value: "−75%", label: "page load time" },
    ],
    summary:
      "A consumer marketplace with blockchain-based payment and ownership flows layered under a conventional React front end, so on-chain ownership stays legible to non-crypto users.",
    problem:
      "Users wanted the guarantees of on-chain ownership without learning what a wallet is. Early flows exposed gas, confirmations and failed transactions directly, and drop-off at checkout was severe. Delivery ran across four disciplines that had never shipped as one team.",
    built: [
      "Led the 7-person cross-functional team, owning technical direction, delivery planning, code quality and cross-functional execution from design through release.",
      "Architected and launched the marketplace on React and Node.js, including the transaction pipeline and blockchain-based payment and ownership flows.",
      "Integrated MetaMask and WalletConnect authentication, reused across 15+ production applications.",
      "Authored and gas-optimised the Solidity contracts (ERC-721 and ERC-1155) with Hardhat, cutting transaction costs by 10%.",
      "Refactored the React architecture and expanded QA coverage, cutting page load 75%.",
    ],
    broke:
      "Wallet sessions did not survive network switches, so a user who changed chains mid-checkout lost their cart. A session layer keyed on account plus chain, with explicit chain guards before signing, removed the whole class of support tickets.",
    results:
      "50K+ users and over a million transactions processed by a team that shipped as one unit, with gas-optimised contracts and wallet flows reused across 15+ applications.",
    image: "/work/marketplace.svg",
    art: "linear-gradient(150deg, #C2410C, #1a0a05)",
  },
  {
    slug: "ocr-annotation-platform",
    title: "OCR Annotation Platform",
    short: "MERN pipeline for 100+ client teams",
    tag: "MERN · Automation",
    period: "2019 → 2021",
    company: "CreativeMorph",
    role: "Team lead",
    team: "5 engineers · 2 frontend, 2 backend, 1 QA",
    stack: ["MongoDB", "Express", "React", "Node.js", "NestJS", "PostgreSQL"],
    metrics: [
      { value: "1000+", label: "images per month" },
      { value: "100+", label: "client teams" },
      { value: "10+ h", label: "saved per week via webhooks" },
    ],
    summary:
      "An OCR-driven annotation platform with admin dashboards, built for client teams processing recurring image workloads.",
    problem:
      "Client operations lived in manual handoffs between annotation, review and delivery. Every step happened in a different tool and nobody had a single view of the queue. Three Silicon Valley startup clients shared one five-person team on aggressive release cycles.",
    built: [
      "Led the 5-person team, coordinating implementation and delivery for three Silicon Valley startup clients.",
      "Built the OCR annotation pipeline and admin dashboards on the MERN stack.",
      "Designed the NestJS + TypeScript reference architecture adopted as the standard across 20+ client projects.",
      "Delivered Microsoft Teams messaging extensions and modular dashboard UIs adopted by 10K+ end users.",
      "Automated cross-tool workflows with custom Slack, Trello, JIRA and GitHub webhooks, and drove a legacy refactor that lifted test coverage by 20%.",
    ],
    broke:
      "OCR confidence scores were trusted too early, so low-quality scans flowed straight to clients. A review threshold with a human-in-the-loop queue fixed quality without slowing the happy path.",
    results:
      "1000+ images a month for 100+ clients, 10K+ end users on the dashboards, and 10+ hours a week returned to operations.",
    image: "/work/ocr-platform.svg",
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
    stack: ["Angular", "Node.js", "PostgreSQL", "WebSockets", "AWS", "Jenkins"],
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
      "Developed payment gateway integrations and CMS platforms with PostgreSQL, queues and JWT authentication.",
      "Built the Angular front-end architecture with real-time WebSocket communication.",
      "Automated production deployment with AWS and Jenkins, taking release time from hours to minutes.",
      "Designed and led internal Angular and DevOps training for five engineers.",
    ],
    broke:
      "The first WebSocket layer re-broadcast full schedules on every change and fell over on Monday mornings. Delta updates and per-client subscriptions brought it back under control.",
    results:
      "100K+ users served, deployment time cut from hours to minutes, and a team trained to keep it that way.",
    image: "/work/fitness-cms.svg",
    art: "linear-gradient(150deg, #FDBA74, #7C2D12)",
  },
];

export interface Role {
  slug: string;
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
    slug: "ibanera",
    period: "Jan 2025 — Apr 2026",
    title: "Full Stack Engineer (Contract)",
    company: "Ibanera",
    companyUrl: "https://www.linkedin.com/company/ibanera-llc/",
    mode: "Contract · Remote",
    summary:
      "Sixteen months of fintech product engineering: React front ends over Go backend services, leading technical discussions and mentoring junior developers.",
    bullets: [
      "Led technical discussions and mentored junior developers, working with product managers, designers and business stakeholders to translate requirements into technical solutions.",
      "Set code quality standards through clean architecture, code reviews and testing.",
      "Architected and implemented RESTful and event-driven APIs with a focus on performance and security.",
      "Designed, developed and maintained scalable web applications with React on the front end and Go powering backend services.",
      "Built and optimised Go backend systems for high-throughput, low-latency workloads; improved application performance, scalability and data access across services.",
      "Integrated third-party services, authentication mechanisms and external APIs.",
    ],
    tags: ["React", "Go", "TypeScript", "Event-driven APIs", "REST"],
  },
  {
    slug: "big-immersive",
    period: "2021 — Dec 2025",
    title: "Engineering Lead / Senior Full Stack Developer",
    company: "Big Immersive",
    mode: "Full-time · Lahore",
    summary:
      "Led a 7-person cross-functional team and the backend group behind BMW ERP microservices, owning architecture, delivery, review standards and mentorship.",
    bullets: [
      "Led a 7-person cross-functional team, 2 frontend, 2 backend, 1 blockchain and 2 QA engineers, owning technical direction, delivery planning, code quality and cross-functional execution.",
      "Set architecture direction and review standards across the backend group, making the trade-offs between performance, maintainability, reliability and delivery speed.",
      "Established peer code review and mentored 10 junior engineers, reducing post-release defects by 70%.",
      "Architected and launched a consumer marketplace (React, Node.js) serving 50K+ users and processing 1M+ transactions, including blockchain-based payment and ownership flows.",
      "Led backend development of ERP microservices powering BMW Mini & BMW Motorrad digital platforms, handling 200K requests/day across 52 services.",
      "Designed Redis caching layers and REST APIs, cutting average response time from 1500 ms to 600 ms, and page load time by 75% through architecture refactoring and expanded QA coverage.",
      "Built production services in Node.js, TypeScript, PostgreSQL, Redis, queues and JWT auth with AWS Lambda/serverless workloads; integrated wallet authentication (MetaMask, WalletConnect) into 15+ production applications.",
    ],
    tags: ["Node.js", "TypeScript", "NestJS", "PostgreSQL", "Redis", "AWS Lambda", "Solidity"],
  },
  {
    slug: "creativemorph",
    period: "2019 — 2021",
    title: "Team Lead / Senior JavaScript Engineer",
    company: "CreativeMorph",
    mode: "Full-time · Lahore",
    summary:
      "Led a 5-person team delivering for three Silicon Valley startup clients, and authored the NestJS reference architecture the agency standardised on.",
    bullets: [
      "Led a 5-person team of 2 frontend, 2 backend and 1 QA engineer, coordinating implementation and delivering full-stack web applications for 3 Silicon Valley startups on aggressive release cycles.",
      "Designed a reusable NestJS + TypeScript reference architecture adopted as the standard across 20+ client projects, improving development consistency and scalability.",
      "Built an OCR-powered image annotation platform and scalable admin dashboards on the MERN stack, processing 1000+ images/month for 100+ clients.",
      "Developed Microsoft Teams messaging extensions and modular dashboard interfaces adopted by 10K+ end users.",
      "Refactored legacy codebases and strengthened automated testing, lifting test coverage by 20%; worked hands-on with PostgreSQL, queues and JWT authentication in production.",
      "Automated workflows across Slack, Trello, JIRA and GitHub with custom webhooks, saving the team 10+ engineering hours per week.",
      "Recognised with the company-wide Performance Award twice in one year for engineering impact and delivery.",
    ],
    tags: ["NestJS", "TypeScript", "React", "MongoDB", "PostgreSQL", "Webhooks"],
  },
  {
    slug: "novatore-solutions",
    period: "2016 — 2019",
    title: "Software Engineer",
    company: "Novatore Solutions",
    mode: "Full-time · Lahore",
    summary:
      "Payment and CMS platforms for consumer health products serving 100K+ users, plus the deployment automation and internal training that made releases routine.",
    bullets: [
      "Developed payment gateway integrations and CMS platforms for fitness and health applications serving 100K+ users, built on PostgreSQL, queues and JWT authentication.",
      "Architected and developed Angular front-end applications with real-time communication over WebSockets.",
      "Automated CI/CD deployments with AWS and Jenkins, reducing production release cycles from hours to minutes.",
      "Designed and led internal technical training on Angular and DevOps practices, mentoring and upskilling a team of 5 engineers.",
    ],
    tags: ["Angular", "Node.js", "PostgreSQL", "WebSockets", "AWS", "Jenkins"],
  },
];

export const PRINCIPLES = [
  { title: "Own the call and the ship date.", body: "A lead is accountable for the architecture decision and for the delivery plan that follows from it. One person, both answers." },
  { title: "Production is the only real test.", body: "Shipped means it has handled real users and real failures, not that it passed review." },
  { title: "Review is a system, not a favour.", body: "A program with owners and metrics cut post-release defects by 70%." },
  { title: "Write it down.", body: "Distributed teams run on notes a teammate can read without a meeting." },
] as const;

export const EDUCATION = { degree: "BS Computer Science", school: "PUCIT, Lahore", years: "2012 – 2016" } as const;

export const CERTIFICATIONS = [
  { title: "Ethereum and Solidity: The Complete Developer's Guide", issuer: "Udemy" },
  { title: "Go: The Complete Developer's Guide", issuer: "Udemy" },
] as const;

export const WRITING_SOON = [
  "Redis caching that survives cold starts and cache stampedes",
  "NestJS + TypeScript as a reusable service baseline",
  "Wallet flows legible to non-crypto users",
] as const;
