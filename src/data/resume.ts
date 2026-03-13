export interface ExperienceItem {
  company: string
  role: string
  period: string
  bullets: string[]
  leadBullets?: string[]
  logo?: string
}

export interface Project {
  name: string
  description: string
  highlights: string[]
  platforms?: string[]
  architecture?: string
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
export const resumeTitle = "Full Stack Developer"
export const resumeTagline = "4+ years building scalable web applications with React, Node.js, TypeScript, PostgreSQL, AWS & Azure"

export const resumeObjective = `Motivated and detail-oriented Full Stack Developer with over 4+ years of experience in designing, developing, and deploying scalable web applications using modern technologies such as React, Node.js, TypeScript, PostgreSQL, AWS, and Azure. Strong background in cloud-native development, responsive UI design, API integrations, and observability tools. Adept at working in Agile environments, with a solid focus on code quality, performance optimization, and secure programming practices.`

export const resumeExperience: ExperienceItem[] = [
  {
    company: "Brightspot Technology Solutions",
    role: "Full Stack Developer",
    period: "Mar 2022 – Present",
    logo: "BTS",
    bullets: [
      "Developed dynamic and responsive web applications for e-commerce and service-based platforms using React and Node.js.",
      "Built an AI-driven email segmentation agent using LangGraph for workflow orchestration and LangSmith for tracing, evaluation, and optimization, enabling automated and highly accurate user-segment classification.",
      "Implemented real-time communication using WebSockets to deliver instant payment status updates across clients, while adding concurrency controls to prevent conflicting or duplicate user actions during critical transactions.",
      "Played a key role in the development of Corksy, a multi-tenant wine e-commerce platform with Web App, Mobile App, and POS, using Duda for storefront website building.",
      "Adopted Agent IDE with Vibe mode—alongside tools like Cursor and Antigravity—to enhance workflow efficiency, automate repetitive coding tasks, and maintain consistent, high-quality coding standards.",
      "Implemented Google Analytics (gtag.js) to track detailed user interactions, including page views, button clicks, and custom events, enabling data-driven insights for product and UX improvements.",
      "Built secure backend services with Node.js and PostgreSQL, including protection against SQL injections and bot attacks.",
      "Optimized SQL queries to improve data fetching speeds by up to 40%.",
      "Leveraged AWS and Azure cloud services for scalable deployments, serverless architecture, and managed infrastructure.",
      "Automated deployment pipelines and infrastructure using Terraform and CI/CD tools.",
      "Integrated observability tools like OpenTelemetry for distributed tracing and metrics collection across services.",
      "Implemented monitoring and alerting using Datadog, enabling faster root cause analysis and proactive issue resolution.",
      "Designed and built single-page applications (SPA) with React and styled-components for clients in retail and education domains.",
      "Used Flipt for feature flag management, enabling safe deployment and Unit testing of new features.",
      "Built and maintained dashboards for real-time performance metrics and error tracking.",
      "Integrated third-party services such as payment gateways, Email services, and analytics platforms.",
      "Ensured high availability and uptime through improved monitoring, log management, and recovery strategies.",
      "Improved SEO and page load speed through code splitting, lazy loading, and image optimization techniques.",
      "Integrated third-party services using GraphQL and RESTful APIs.",
      "Architected reusable React component libraries with TypeScript generics, reducing frontend development time across projects by 30%.",
      "Implemented state management patterns using Redux Toolkit and Zustand, optimizing global state handling for complex multi-step checkout flows.",
      "Built and consumed RESTful and GraphQL APIs with proper error handling, request caching, and retry logic using Axios interceptors.",
      "Developed custom React hooks for debounced search, infinite scroll pagination, and form validation to promote code reuse.",
      "Configured Webpack and Vite build pipelines with tree-shaking, chunk splitting, and environment-specific optimizations for production deployments.",
      "Implemented JWT-based authentication and role-based access control (RBAC) across frontend and backend services.",
      "Designed PostgreSQL schemas with normalized tables, composite indexes, and materialized views to support high-read workloads.",
      "Set up serverless functions with API Gateway for microservices, reducing infrastructure costs by ~35%.",
      "Containerized services with Docker and orchestrated deployments using cloud container services and managed platforms.",
      "Configured Jenkins CI/CD pipelines to automate Docker image builds, run test suites, and push tagged images to container registries on every merge to main.",
      "Implemented SSH-based deployment workflows where Jenkins triggers remote server connections to pull the latest Docker images and perform rolling container restarts with zero downtime.",
      "Set up Nginx as a reverse proxy and web server for production environments, configuring SSL/TLS termination, gzip compression, caching headers, and load balancing across multiple upstream containers.",
      "Designed multi-stage Dockerfiles to optimize image size and build speed, separating build dependencies from production runtime for leaner deployments.",
      "Automated release tagging and Docker image versioning through Jenkins pipelines, enabling instant rollback to previous versions via tagged images.",
      "Wrote comprehensive unit and integration tests using Jest, React Testing Library, and Playwright for end-to-end coverage.",
      "Implemented responsive layouts with Tailwind CSS utility-first approach and CSS Grid/Flexbox, achieving consistent cross-browser rendering.",
      "Architected event-driven microservices using NATS as the messaging backbone, enabling decoupled, high-throughput communication between services with publish/subscribe and request/reply patterns.",
      "Built real-time notification systems using message queues, step functions, and NATS JetStream for durable, asynchronous event-driven workflows with at-least-once delivery guarantees.",
      "Applied rate limiting, WAF rules, and load balancer configurations to mitigate DDoS and bot attacks on production endpoints.",
      "Leveraged Cursor IDE with Claude (Anthropic) as the AI backbone for intelligent code generation, refactoring, and real-time debugging across large codebases.",
      "Built multi-step AI agents using LangGraph with tool-calling capabilities, enabling autonomous task execution for email classification and content generation workflows.",
      "Integrated Claude CLI into development workflows to automate code reviews, generate test cases, and scaffold boilerplate, reducing manual effort by ~40%.",
      "Adopted Vibe Coding methodology using Cursor's Agent Mode and Anthropic Claude to accelerate feature development while maintaining strict code quality standards.",
      "Designed prompt engineering patterns for structured output parsing, chain-of-thought reasoning, and few-shot classification to power customer-facing AI features.",
      "Built AI-powered search and recommendation features using OpenAI embeddings with cosine similarity for personalized product discovery.",
      "Used LangSmith for end-to-end tracing, evaluation, and optimization of LLM-powered pipelines, reducing hallucination rates and improving response accuracy.",
      "Integrated Antigravity AI tools for automated codebase analysis, migration planning, and dependency auditing across microservices.",
    ],
    leadBullets: [
      "Collaborated closely with cross-functional teams, including designers, QA, and product owners, to deliver high-quality features on time.",
      "Led code reviews and provided mentorship to junior developers, promoting best practices and improving team code quality.",
      "Defined project deliverables and timelines, ensuring alignment with business objectives and client expectations.",
      "Addressed and resolved critical production issues quickly to minimize downtime and maintain service reliability.",
      "Conducted performance tuning of applications and infrastructure to ensure scalability under increased user loads.",
      "Participated actively in Agile ceremonies including sprint planning, daily stand-ups, and retrospectives to foster continuous improvement.",
      "Facilitated communication between development and operations teams to streamline deployment workflows and improve release processes.",
      "Documented system architecture and development processes to enhance knowledge sharing within the team.",
    ],
  },
]

export const resumeProjects: Project[] = [
  {
    name: "Corksy",
    description: "Multi-tenant wine e-commerce platform with Web App, Mobile App, and POS — powered by Duda for storefront e-commerce.",
    architecture: "Multi-Tenant",
    platforms: ["Web App", "Mobile App", "POS", "Duda E-commerce"],
    highlights: [
      "Architected a multi-tenant system enabling each winery to operate an isolated storefront, inventory, and configuration under a shared platform infrastructure.",
      "Built the Corksy Web App for winery staff to manage orders, customers, inventory, analytics, and subscription wine clubs from a centralized dashboard.",
      "Developed the Corksy Mobile App for Android devices, providing on-the-go order management, POS operations, and real-time inventory sync.",
      "Integrated Duda as the e-commerce website builder, enabling wineries to create and manage branded storefronts with custom domains, themes, and SEO settings.",
      "Built POS solutions for in-person tasting room sales with PAX payment device integration, supporting card, tap, and manual entry transactions.",
      "Implemented payment provider configuration supporting multiple gateways (Stripe, Square, etc.) with automatic routing and failover per tenant.",
      "Designed and integrated shipping modules with carrier rate calculation, label generation, and order fulfillment tracking.",
      "Built analytics and revenue tracking dashboards for real-time business insights across all sales channels (web, mobile, POS).",
      "Created a unified multi-channel system where online orders (Duda storefront), mobile orders, and POS transactions sync in real time using NATS event-driven messaging.",
      "Migrated comprehensive winery data, product catalogs, and customer records to the new multi-tenant platform.",
      "Managed support ticket system to efficiently track, prioritize, and resolve user issues across tenants.",
      "Provided ongoing support services and maintenance to ensure platform stability and customer satisfaction.",
    ],
  },
]

export const resumeEducation: EducationEntry[] = [
  {
    degree: "BE - Electronics and Communication Engineering",
    year: "2021",
    score: "75%",
    institution: "M.P.Nachimuthu M.Jaganathan Engineering College (Anna University)",
    location: "Chennimalai, Erode",
  },
  {
    degree: "HSC",
    year: "2017",
    score: "82%",
    institution: "Gov Hr. Sec. School",
    location: "Chennampatti, Erode",
  },
  {
    degree: "SSLC",
    year: "2015",
    score: "89%",
    institution: "Gov Hr. Sec. School",
    location: "Chennampatti, Erode",
  },
]

export const resumeSkillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    items: [
      "React.js",
      "Redux",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Tailwind CSS",
      "Responsive Web Design",
      "Lodash",
      "Zustand",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "Go (Golang)",
      "GraphQL",
      "Python",
      "REST APIs",
      "Event-Driven Architecture",
      "NATS Server",
      "AI Agent",
      "LangGraph",
    ],
  },
  {
    title: "Database",
    items: ["PostgreSQL", "SQL Optimization"],
  },
  {
    title: "DevOps & Cloud",
    items: [
      "Docker",
      "Jenkins",
      "Nginx",
      "SSH Deployment",
      "NATS / JetStream",
      "AWS",
      "Azure",
      "Terraform",
      "CI/CD Pipelines",
    ],
  },
  {
    title: "Observability",
    items: ["OpenTelemetry", "Datadog", "Flipt"],
  },
  {
    title: "Tools & Practices",
    items: [
      "Git",
      "Agile",
      "Github",
      "NPM",
      "Lodash",
      "Playwright",
      "Open Source Contributions",
      "AI Tooling",
    ],
  },
  {
    title: "AI & ML Tooling",
    items: [
      "Claude (Anthropic)",
      "Cursor IDE",
      "LangGraph",
      "LangChain",
      "LangSmith",
      "AI Agents",
      "Prompt Engineering",
      "Claude CLI",
      "Vibe Coding",
      "Antigravity",
      "OpenAI API",
      "Vector Embeddings",
    ],
  },
  {
    title: "Security",
    items: [
      "SQL Injection Prevention",
      "Bot Attack Mitigation",
      "Rate Limit",
      "WAF",
      "Load Balancer",
    ],
  },
]

export const resumeInterpersonal: string[] = [
  "Problem-solving",
  "Strong leadership skills",
  "Skilled in time and risk management",
  "Being receptive to feedback",
  "Open-source contributions",
  "NPM Package Development",
]
