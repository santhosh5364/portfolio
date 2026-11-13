export interface ExperienceItem {
  company: string
  role: string
  period: string
  bullets: string[]
  leadBullets?: string[]
  logo?: string
}

export type ProjectStatus = "production" | "internal"

export interface Project {
  name: string
  description: string
  highlights: string[]
  platforms?: string[]
  architecture?: string
  status?: ProjectStatus
}

export interface EducationEntry {
  degree: string
  year: string
  score: string
  institution: string
  location: string
}

export interface SkillGroup {
  title: string
  items: string[]
}

export const resumeName = "Santhosh.G"
export const resumeTitle = "Full Stack & AI Engineer"
export const resumeTagline =
  "4.5+ years building scalable enterprise systems with Python, FastAPI, React, LangGraph, PostgreSQL & AWS"

export const resumeObjective = `Full Stack & AI Engineer with 4.5+ years of experience designing, developing, and deploying scalable enterprise production systems across Python, FastAPI, Flask, Node.js, React, Go, PostgreSQL, and AWS. Deep hands-on expertise in Agentic AI, architecting multi-agent RAG platforms with LangGraph, MCP, and confidence-gated orchestration that automate real business workflows end-to-end. Proven track record of measurable impact: 30% faster development velocity, 95%+ AI-classification accuracy, and 40% faster data retrieval, achieved through a strong foundation in object-oriented design, cloud-native architecture, observability, and secure engineering practices.`

export const resumeExperience: ExperienceItem[] = [
  {
    company: "Brightspot Technology Solutions",
    role: "Developer Lead / Full Stack Developer",
    period: "Mar 2022 – Present",
    logo: "BTS",
    leadBullets: [
      "Lifted team development velocity 30%, measured across sprint cycle time, by designing custom AI-assisted coding skills, prompts, and code-review workflows adopted org-wide.",
      "Cut critical-incident resolution time and downtime by leading rapid-response debugging, triage, and proactive performance tuning across production infrastructure under increased user load.",
      "Raised team code quality, measured by review defect rate, by leading code reviews and mentoring junior developers on best practices and secure coding standards.",
      "Kept delivery on schedule across concurrent workstreams by defining project scope, deliverables, and timelines aligned to business and client objectives.",
      "Improved cross-team execution by facilitating communication between development and operations to streamline deployment workflows and release processes.",
      "Strengthened knowledge continuity by documenting system architecture and development processes for the wider engineering team.",
      "Sustained continuous improvement by actively driving Agile ceremonies including sprint planning, daily stand-ups, and retrospectives.",
    ],
    bullets: [
      "Reduced manual user-segmentation effort 80% while achieving 95%+ classification accuracy by architecting a Python, LangGraph-orchestrated email classification system with LangSmith tracing and continuous evaluation.",
      "Accelerated data fetch performance 40% by optimizing SQL queries and redesigning PostgreSQL indexing strategy across high-traffic production services.",
      "Delivered instant, concurrency-safe payment status updates by building a WebSocket-based real-time communication layer across client platforms.",
      "Hardened backend services against SQL injection and bot attacks by implementing layered security controls (JWT auth, WAF, rate limiting) in Node.js and PostgreSQL.",
      "Improved release reliability and cut manual deployment effort by automating CI/CD pipelines and infrastructure-as-code using Terraform and Jenkins.",
      "Increased incident-detection speed and system visibility by integrating OpenTelemetry and Datadog for distributed tracing and metrics collection.",
      "De-risked feature rollouts by adopting Flipt for feature-flag-gated deployments, enabling safe testing of new functionality in production.",
      "Expanded platform reach by integrating third-party payment gateways, email services, and analytics platforms via GraphQL and RESTful APIs.",
      "Improved UX decision-making by implementing Google Analytics (gtag.js) to track detailed user interactions, custom events, and button-level engagement.",
      "Delivered responsive, production-grade single-page applications using React and styled-components for retail and education-sector clients.",
      "Leveraged AWS cloud services to enable scalable deployments and serverless architecture across client-facing applications.",
    ],
  },
]

export const resumeProjects: Project[] = [
  {
    name: "Corksy",
    description:
      "Multi-site wine e-commerce and POS platform unifying online and offline sales channels.",
    architecture: "Multi-Tenant",
    status: "production",
    platforms: ["Web App", "Mobile App", "POS", "E-commerce"],
    highlights: [
      "Unified online and offline sales channels by delivering a comprehensive multi-site wine e-commerce and POS platform from the ground up.",
      "Enabled seamless, secure transactions across multiple providers by implementing configurable payment provider integration.",
      "Streamlined order fulfillment end-to-end by designing and integrating dedicated shipping modules into the platform.",
      "Extended in-store checkout capability by developing Android and web POS solutions, including direct integration with PAX payment devices.",
      "Improved customer support turnaround by managing a support ticket system to track, prioritize, and resolve user issues while migrating historical data to the new platform.",
      "Increased personalization and conversion potential by building AI-powered customer segmentation and recommendation workflows using Python and LLM-based technologies.",
    ],
  },
  {
    name: "ARA Support",
    description:
      "Internal multi-agent RAG tooling for support workflows, spec generation, and document analysis.",
    architecture: "Multi-Agent RAG",
    status: "internal",
    platforms: ["Python", "LangGraph", "FastAPI", "MCP"],
    highlights: [
      "Built an internal 6-microservice multi-agent RAG toolkit in Python (FastAPI) to automate support workflows, spec generation, and document analysis for the engineering team.",
      "Enabled multi-turn ticket-style resolution experiments by building AraChain, a Plan-Execute support agent with confidence-gated routing and human-in-the-loop resume.",
      "Sharpened retrieval relevance by designing an 8-stage hybrid retrieval pipeline combining BM25, dense search, MMR diversification, and Cohere reranking.",
      "Cut LLM cost overhead and eliminated context-overflow failures by building a Context Engineering library enforcing token/cost budgets and auto-compaction.",
      "Scaled agent capability to 80+ internal business tools across 13 domains by exposing them through a per-tenant-secured MCP tool platform.",
      "Hardened the internal toolkit with a JWT-authenticated API Gateway, Redis rate limiting, PII redaction, and OpenTelemetry observability.",
    ],
  },
]

export const resumeEducation: EducationEntry[] = [
  {
    degree: "B.E., Electronics and Communication Engineering",
    year: "2021",
    score: "CGPA 7.72",
    institution: "M.P. Nachimuthu M. Jaganathan Engineering College (Anna University)",
    location: "Chennimalai, Erode",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    year: "2017",
    score: "82%",
    institution: "Govt Hr. Sec. School",
    location: "Chennampatti, Erode",
  },
  {
    degree: "Secondary School Leaving Certificate (SSLC)",
    year: "2015",
    score: "89%",
    institution: "Govt Hr. Sec. School",
    location: "Chennampatti, Erode",
  },
]

export const resumeSkillGroups: SkillGroup[] = [
  {
    title: "Agentic AI",
    items: [
      "LangGraph",
      "LangChain",
      "LangSmith",
      "MCP / FastMCP",
      "Multi-Agent Orchestration",
      "RAG",
      "sentence-transformers",
      "HuggingFace Transformers",
    ],
  },
  {
    title: "Backend",
    items: [
      "Python",
      "FastAPI",
      "Flask",
      "Node.js",
      "Express.js",
      "Go (Golang)",
      "GraphQL",
      "REST APIs",
      "Microservices",
      "OOP",
    ],
  },
  {
    title: "Database",
    items: [
      "PostgreSQL",
      "ClickHouse",
      "SQL Optimization",
      "Redis",
      "Qdrant",
      "MongoDB",
    ],
  },
  {
    title: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "Redux",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Tailwind CSS",
      "Responsive Web Design",
      "Lodash.js",
      "Zustand",
      "Jest",
      "React Testing Library",
    ],
  },
  {
    title: "DevOps & Cloud",
    items: [
      "AWS",
      "Terraform",
      "CI/CD Pipelines",
      "Jenkins",
      "Redis Queue (RQ)",
    ],
  },
  {
    title: "Observability",
    items: ["OpenTelemetry", "Datadog", "Flipt", "New Relic"],
  },
  {
    title: "Tools & Practices",
    items: [
      "Git",
      "GitHub",
      "Agile",
      "NPM",
      "Playwright",
      "Open Source Contributions",
      "Cursor",
      "Claude",
      "AI Tooling",
    ],
  },
  {
    title: "Security",
    items: [
      "JWT",
      "SQL Injection Prevention",
      "Bot Attack Mitigation",
      "Rate Limiting",
      "WAF",
      "Load Balancer",
    ],
  },
]

export const resumeInterpersonal: string[] = [
  "Problem-Solving & Technical Leadership",
  "Time & Risk Management",
  "Open-Source Contributions & NPM Package Development",
  "Agile & Cross-Functional Collaboration",
]
