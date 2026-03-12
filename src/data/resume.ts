export interface ExperienceItem {
  company: string
  role: string
  period: string
  bullets: string[]
  leadBullets?: string[]
}

export interface Project {
  name: string
  description: string
  highlights: string[]
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
export const resumeTagline = "4+ years building scalable web applications with React, Node.js, TypeScript, PostgreSQL & AWS"

export const resumeObjective = `Motivated and detail-oriented Full Stack Developer with over 4+ years of experience in designing, developing, and deploying scalable web applications using modern technologies such as React, Node.js, TypeScript, PostgreSQL, and AWS. Strong background in cloud-native development, responsive UI design, API integrations, and observability tools. Adept at working in Agile environments, with a solid focus on code quality, performance optimization, and secure programming practices.`

export const resumeExperience: ExperienceItem[] = [
  {
    company: "Brightspot Technology Solutions",
    role: "Full Stack Developer",
    period: "Mar 2022 – Present",
    bullets: [
      "Developed dynamic and responsive web applications for e-commerce and service-based platforms using React and Node.js.",
      "Built an AI-driven email segmentation agent using LangGraph for workflow orchestration and LangSmith for tracing, evaluation, and optimization, enabling automated and highly accurate user-segment classification.",
      "Implemented real-time communication using WebSockets to deliver instant payment status updates across clients, while adding concurrency controls to prevent conflicting or duplicate user actions during critical transactions.",
      "Played a key role in the development of a wine-based e-commerce website supporting both online and offline ordering.",
      "Adopted Agent IDE with Vibe mode—alongside tools like Cursor and Antigravity—to enhance workflow efficiency, automate repetitive coding tasks, and maintain consistent, high-quality coding standards.",
      "Implemented Google Analytics (gtag.js) to track detailed user interactions, including page views, button clicks, and custom events, enabling data-driven insights for product and UX improvements.",
      "Built secure backend services with Node.js and PostgreSQL, including protection against SQL injections and bot attacks.",
      "Optimized SQL queries to improve data fetching speeds by up to 40%.",
      "Leveraged AWS services for scalable cloud deployments and serverless architecture.",
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
    name: "Corsky",
    description: "Comprehensive wine-based multi-site e-commerce and POS platform integrating online and offline sales channels.",
    highlights: [
      "Implemented payment provider configuration, enabling seamless and secure transactions across multiple providers.",
      "Designed and integrated shipping modules to streamline order fulfillment processes.",
      "Built analytics and revenue tracking features for real-time business insights and performance monitoring.",
      "Developed POS solutions for Android devices and web platforms, including integration with PAX payment devices.",
      "Created a unified system supporting both online and offline operations.",
      "Migrated comprehensive data and related system content to the new platform.",
      "Managed support ticket system to efficiently track, prioritize, and resolve user issues.",
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
      "AWS (Lambda, EC2, RDS, SQS, Step Functions, Elastic Beanstalk)",
      "Terraform",
      "CI/CD pipelines",
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
