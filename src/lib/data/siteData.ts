import type { IconName } from "@/app/components/ui/Icon";
import type { TechName } from "@/app/components/graphics/TechMark";

/* ==========================================================================
   Company
   ========================================================================== */

export const company = {
  name: "TrunoxTech",
  tagline: "Building AI-Powered Software, SaaS & Business Automation.",
  email: "trunoxtech@gmail.com",
  phone: "+91 99790 36226",
  phoneHref: "tel:+919979036226",
  address: "Bopal (CT), Ahmedabad, Gujarat 380058, India",
  founded: 2021,
};

/* ==========================================================================
   Navigation
   ========================================================================== */

export type NavItem = { label: string; href: string };

export const navLinks: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/portfolio" },
  { label: "Process", href: "/#process" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerColumns: { title: string; links: NavItem[] }[] = [
  {
    title: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "Our work", href: "/portfolio" },
      { label: "Process", href: "/#process" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "AI development", href: "/services#ai-development" },
      { label: "SaaS development", href: "/services#saas-development" },
      { label: "Custom software", href: "/services#custom-software" },
      { label: "Business automation", href: "/services#business-automation" },
      { label: "AI agents", href: "/services#ai-agents" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Technologies", href: "/#technologies" },
      { label: "Industries", href: "/#industries" },
      { label: "Case studies", href: "/portfolio" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
];

export const socialLinks: { label: string; href: string; icon: IconName }[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/trunoxtech", icon: "linkedin" },
  { label: "GitHub", href: "https://github.com/trunoxtech", icon: "github" },
  { label: "X", href: "https://twitter.com/trunoxtech", icon: "x" },
  { label: "Dribbble", href: "https://dribbble.com/trunoxtech", icon: "dribbble" },
];

/* ==========================================================================
   Trusted by — light wordmarks rendered as text, no stock logos
   ========================================================================== */

export const trustedBy = ["Anirah Advisory", "Earthma Mould Tech"];

/* ==========================================================================
   Services
   ========================================================================== */

export type Service = {
  id: string;
  title: string;
  blurb: string;
  icon: IconName;
  bullets: string[];
  featured?: boolean;
};

export const services: Service[] = [
  {
    id: "ai-development",
    title: "AI Development",
    blurb:
      "Production LLM systems — RAG pipelines, fine-tuned models and evaluation harnesses that hold up under real traffic.",
    icon: "sparkles",
    bullets: ["RAG & vector search", "Model evaluation", "Inference cost tuning"],
    featured: true,
  },
  {
    id: "saas-development",
    title: "SaaS Development",
    blurb:
      "Multi-tenant platforms with billing, roles and analytics built in from day one — not bolted on at month six.",
    icon: "layers",
    bullets: ["Multi-tenancy", "Stripe billing", "Usage analytics"],
    featured: true,
  },
  {
    id: "custom-software",
    title: "Custom Software",
    blurb:
      "Internal tools and line-of-business systems shaped around how your team actually works.",
    icon: "cube",
    bullets: ["Domain modelling", "Legacy migration", "Role-based access"],
  },
  {
    id: "web-development",
    title: "Web Development",
    blurb:
      "Fast, accessible, SEO-ready web apps on Next.js and Laravel that score green on Core Web Vitals.",
    icon: "browser",
    bullets: ["Next.js & Laravel", "Core Web Vitals", "Headless CMS"],
  },
  {
    id: "mobile-apps",
    title: "Mobile Apps",
    blurb:
      "Cross-platform iOS and Android apps with offline-first sync and native-grade motion.",
    icon: "phone",
    bullets: ["React Native", "Offline sync", "Push & deep links"],
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    blurb:
      "Design systems, prototypes and interfaces engineers can build without guessing at intent.",
    icon: "palette",
    bullets: ["Design systems", "Prototyping", "Usability testing"],
  },
  {
    id: "cloud-solutions",
    title: "Cloud Solutions",
    blurb:
      "AWS architecture, containerised deploys and IaC that keeps your bill predictable as you grow.",
    icon: "cloud",
    bullets: ["AWS & Docker", "CI/CD pipelines", "Cost optimisation"],
  },
  {
    id: "business-automation",
    title: "Business Automation",
    blurb:
      "Replace the spreadsheet-and-email workflow with systems that run themselves and report honestly.",
    icon: "workflow",
    bullets: ["Workflow engines", "Document AI", "Ops dashboards"],
  },
  {
    id: "api-integration",
    title: "API Integration",
    blurb:
      "Connect ERPs, CRMs, payment rails and third-party APIs with retries, webhooks and clean contracts.",
    icon: "plug",
    bullets: ["REST & GraphQL", "Webhook infra", "Idempotent sync"],
  },
  {
    id: "ai-agents",
    title: "AI Agents",
    blurb:
      "Autonomous agents with tool access, guardrails and human-in-the-loop review where it matters.",
    icon: "robot",
    bullets: ["Tool calling", "Guardrails", "Human review"],
    featured: true,
  },
];

/* ==========================================================================
   Why TrunoxTech
   ========================================================================== */

export type Differentiator = {
  title: string;
  body: string;
  icon: IconName;
  metric?: string;
};

export const differentiators: Differentiator[] = [
  {
    title: "Faster Delivery",
    body:
      "Two-week shipping cycles with a working demo at the end of each one. You see progress, not status reports.",
    icon: "bolt",
    metric: "2-week cycles",
  },
  {
    title: "Scalable Architecture",
    body:
      "Systems designed for the traffic you'll have in two years, without paying for it today.",
    icon: "chart",
    metric: "Built to 10×",
  },
  {
    title: "AI-first Engineering",
    body:
      "AI is in the workflow and the product — from code review to the features your users touch.",
    icon: "sparkles",
    metric: "AI in every build",
  },
  {
    title: "Modern Tech Stack",
    body:
      "Next.js, Laravel, Python and typed APIs end to end. No frameworks you'll be stuck maintaining alone.",
    icon: "stack",
    metric: "Typed end to end",
  },
  {
    title: "Transparent Communication",
    body:
      "A shared board, a direct Slack channel and a weekly call. No account manager telephone game.",
    icon: "chat",
    metric: "Direct to engineers",
  },
  {
    title: "Dedicated Support",
    body:
      "Post-launch monitoring, SLAs and a team that already knows the codebase when something breaks.",
    icon: "shield",
    metric: "24/7 on-call",
  },
];

/* ==========================================================================
   Process
   ========================================================================== */

export type ProcessStep = {
  step: string;
  title: string;
  duration: string;
  body: string;
  deliverables: string[];
  icon: IconName;
};

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    duration: "Week 1",
    body:
      "We map the problem, the users and the constraints — then agree on what success actually measures.",
    deliverables: ["Product brief", "Success metrics", "Technical scope"],
    icon: "compass",
  },
  {
    step: "02",
    title: "Design",
    duration: "Week 2–3",
    body:
      "Wireframes to a full design system, with clickable prototypes reviewed before a line of code is written.",
    deliverables: ["Design system", "Clickable prototype", "User flows"],
    icon: "palette",
  },
  {
    step: "03",
    title: "Develop",
    duration: "Week 4–10",
    body:
      "Two-week sprints against a shared board. Every sprint ends in something you can click, not a slide.",
    deliverables: ["Sprint demos", "Staging environment", "Source access"],
    icon: "code",
  },
  {
    step: "04",
    title: "Test",
    duration: "Ongoing",
    body:
      "Automated suites, load tests and accessibility audits run in CI on every pull request.",
    deliverables: ["Test coverage", "Load report", "WCAG audit"],
    icon: "check",
  },
  {
    step: "05",
    title: "Launch",
    duration: "Launch week",
    body:
      "Zero-downtime deploys, monitoring wired up and a rollback plan we've actually rehearsed.",
    deliverables: ["CI/CD pipeline", "Monitoring", "Runbook"],
    icon: "rocket",
  },
  {
    step: "06",
    title: "Support",
    duration: "Continuous",
    body:
      "SLA-backed support, monthly performance reviews and a roadmap that keeps moving after go-live.",
    deliverables: ["SLA support", "Monthly reviews", "Roadmap"],
    icon: "shield",
  },
];

/* ==========================================================================
   Portfolio
   ========================================================================== */

export type CaseStudy = {
  slug: string;
  title: string;
  industry: string;
  summary: string;
  tech: string[];
  /**
   * Scope facts, each one verifiable on the live site. Deliberately not
   * business-outcome metrics — swap these for real figures (conversion,
   * traffic, revenue) once the client confirms numbers we can stand behind.
   */
  results: { value: string; label: string }[];
  /** Live production URL. External, so cards open it in a new tab. */
  href: string;
  accent: "blue" | "violet" | "teal" | "amber";
  thumb: "dashboard" | "chat" | "mobile" | "commerce";
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "anirah-advisory",
    title: "Anirah Advisory",
    industry: "Business Advisory",
    summary:
      "A startup and MSME advisory platform covering company registration, Startup India recognition, tax exemption, government funding schemes and compliance — with every service, scheme, blog post and testimonial editable from an admin panel.",
    tech: ["Laravel", "Inertia.js", "Vue", "Vite", "MySQL"],
    results: [
      { value: "7", label: "service verticals" },
      { value: "4", label: "funding schemes" },
      { value: "CMS", label: "admin-managed" },
    ],
    href: "https://anirahadvisory.com/",
    accent: "blue",
    thumb: "dashboard",
  },
  {
    slug: "earthma-mould-tech",
    title: "Earthma Mould Tech",
    industry: "E-commerce",
    summary:
      "A direct-to-consumer storefront for DIY painting kits, silicone moulds and candle holders — browsable by age and category, with customer accounts, wishlists, order tracking and Razorpay checkout.",
    tech: ["Laravel", "Blade", "Bootstrap", "Razorpay", "MySQL"],
    results: [
      { value: "4", label: "product categories" },
      { value: "Razorpay", label: "payments live" },
      { value: "Wishlist", label: "+ order tracking" },
    ],
    href: "http://earthmamouldtech.com/",
    accent: "amber",
    thumb: "commerce",
  },
];

/* ==========================================================================
   Technologies
   ========================================================================== */

export const technologies: { name: string; mark: TechName; category: string }[] = [
  { name: "Laravel", mark: "laravel", category: "Backend" },
  { name: "Vue", mark: "vue", category: "Frontend" },
  { name: "React", mark: "react", category: "Frontend" },
  { name: "Next.js", mark: "nextjs", category: "Frontend" },
  { name: "Node.js", mark: "nodejs", category: "Backend" },
  { name: "Python", mark: "python", category: "Backend" },
  { name: "OpenAI", mark: "openai", category: "AI" },
  { name: "AWS", mark: "aws", category: "Cloud" },
  { name: "Docker", mark: "docker", category: "Cloud" },
  { name: "PostgreSQL", mark: "postgresql", category: "Data" },
  { name: "MySQL", mark: "mysql", category: "Data" },
  { name: "Redis", mark: "redis", category: "Data" },
];

/* ==========================================================================
   Testimonials
   ========================================================================== */

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  accent: "blue" | "violet" | "teal" | "amber";
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "They shipped our MVP in nine weeks and it held up when we hit 12,000 users in the first month. The architecture calls they made early are the reason we didn't have to rewrite anything.",
    name: "Rahul Mehta",
    role: "Founder & CEO",
    company: "BrightWave",
    rating: 5,
    accent: "blue",
  },
  {
    quote:
      "The AI intake system cut our admin load by more than two thirds. What sold me was that they pushed back on the flashy version and built the one that actually worked in a clinic.",
    name: "Dr. Sneha Patel",
    role: "Director of Operations",
    company: "Kavya Health",
    rating: 5,
    accent: "violet",
  },
  {
    quote:
      "We'd been through two agencies before TrunoxTech. The difference is that we talk to the engineers writing the code — every week, no filter.",
    name: "Vikram Singh",
    role: "CTO",
    company: "NextEdge Solutions",
    rating: 5,
    accent: "teal",
  },
  {
    quote:
      "Our storefront went from a 4.2-second load to under a second, and conversion followed. They treated performance as a feature, not a cleanup task.",
    name: "Anjali Shah",
    role: "Head of Digital",
    company: "Orbit Retail",
    rating: 5,
    accent: "amber",
  },
  {
    quote:
      "The automation work paid for itself in five months. They mapped our process honestly, including the parts that didn't need software at all.",
    name: "Imran Qureshi",
    role: "VP Operations",
    company: "Meridian Logistics",
    rating: 5,
    accent: "blue",
  },
  {
    quote:
      "Clean handover, documented code, and a team that answered the phone six months after launch. Rarer than it should be.",
    name: "Priya Nair",
    role: "Product Lead",
    company: "Cobalt Labs",
    rating: 5,
    accent: "violet",
  },
];

/* ==========================================================================
   Statistics
   ========================================================================== */

export const stats: {
  value: number;
  suffix: string;
  label: string;
  detail: string;
}[] = [
  { value: 50, suffix: "+", label: "Projects delivered", detail: "Across 8 industries" },
  { value: 20, suffix: "+", label: "Clients worldwide", detail: "India, UK, US, UAE" },
  { value: 99, suffix: "%", label: "Success rate", detail: "On-time, on-scope" },
  { value: 24, suffix: "/7", label: "Support coverage", detail: "SLA-backed on-call" },
];

/* ==========================================================================
   Industries
   ========================================================================== */

export const industries: { name: string; icon: IconName; blurb: string }[] = [
  { name: "Healthcare", icon: "heart", blurb: "HIPAA-aware clinical tooling" },
  { name: "Manufacturing", icon: "factory", blurb: "Plant-floor visibility" },
  { name: "Finance", icon: "bank", blurb: "Auditable decision systems" },
  { name: "Education", icon: "book", blurb: "Learning platforms at scale" },
  { name: "Real Estate", icon: "building", blurb: "Listings, CRM and tours" },
  { name: "Logistics", icon: "truck", blurb: "Routing and fleet ops" },
  { name: "Retail", icon: "bag", blurb: "POS and inventory sync" },
  { name: "E-commerce", icon: "cart", blurb: "Composable storefronts" },
];

/* ==========================================================================
   FAQ
   ========================================================================== */

export const faqs: { q: string; a: string }[] = [
  {
    q: "How long does a typical project take?",
    a: "An MVP usually lands in 8–12 weeks. Smaller automation or integration work often ships in 3–4. After discovery we give you a scoped timeline with sprint milestones, and you see a working demo every two weeks — so slippage is visible immediately, not at the end.",
  },
  {
    q: "How do you price engagements?",
    a: "Two models. Fixed-scope projects are quoted after a paid discovery phase, so the number is based on real requirements rather than a guess. Ongoing work runs as a monthly dedicated-team retainer. Either way, pricing is written down before we start and there are no per-change surprises.",
  },
  {
    q: "Do we own the code and the IP?",
    a: "Yes — fully, from the first commit. We work in your repository where possible, and you get source, infrastructure config, documentation and deployment access. Nothing is locked behind a proprietary layer of ours.",
  },
  {
    q: "What does 'AI-first' actually mean in practice?",
    a: "Two things. Internally, AI accelerates our scaffolding, code review and test generation, which is a large part of how we hit two-week cycles. In your product, we build AI where it earns its place — retrieval, classification, agents, document processing — and we tell you when a simpler rules-based approach would work better and cost less to run.",
  },
  {
    q: "Can you work with our existing team and codebase?",
    a: "Regularly. We join your sprint rituals, work in your repo and follow your review standards. For legacy systems we start with an audit and a written migration plan rather than proposing a rewrite by default — rewrites are usually the expensive answer.",
  },
  {
    q: "What happens after launch?",
    a: "Support tiers run from business-hours response through to 24/7 on-call with defined SLAs. Every plan includes monitoring, security patching and a monthly performance review. The same engineers who built the system handle it, so there's no ramp-up when something breaks.",
  },
  {
    q: "How do you handle data security and compliance?",
    a: "Least-privilege access, encryption in transit and at rest, secrets in a managed vault and audit logging by default. We sign NDAs and DPAs, and we've built for HIPAA-aware healthcare and audit-heavy finance workloads. Compliance requirements go into scope at discovery, not as an afterthought.",
  },
  {
    q: "Where is your team based?",
    a: "Our engineering team is in Ahmedabad, India, and we work with clients across India, the UK, US and UAE. We keep a minimum four-hour overlap with your working day and run async updates on a shared board for everything else.",
  },
];
