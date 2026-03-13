import { useRef } from "react"
import {
  Brain,
  Bot,
  Sparkles,
  Zap,
  Network,
  MessageSquare,
  Code2,
  FileText,
  Search,
  PenTool,
  Play,
  CheckCircle2,
  ArrowRight,
} from "lucide-react"
import { Section } from "@/components/ui/section"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import { useInView } from "@/hooks/useInView"
import { cn } from "@/lib/utils"

interface WorkflowStep {
  step: number
  title: string
  mode: string
  modeColor: string
  icon: React.ReactNode
  description: string
  actions: string[]
}

interface AiToolCard {
  name: string
  description: string
  tags: string[]
  icon: React.ReactNode
  gradient: string
}

const aiTools: AiToolCard[] = [
  {
    name: "Cursor IDE",
    description:
      "Primary AI-powered development environment. Use Agent Mode and Vibe Coding for intelligent code generation, refactoring, and real-time debugging across full-stack projects.",
    tags: ["Agent Mode", "Vibe Coding", "Code Gen"],
    icon: <Code2 className="h-6 w-6" />,
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    name: "Claude (Anthropic)",
    description:
      "Core LLM backbone powering coding workflows. Leveraged for structured output parsing, chain-of-thought reasoning, few-shot classification, and production-grade AI features.",
    tags: ["Anthropic", "Prompt Engineering", "CoT"],
    icon: <Brain className="h-6 w-6" />,
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    name: "Claude CLI",
    description:
      "Terminal-first AI integration for automating code reviews, generating test suites, scaffolding boilerplate, and running intelligent codebase queries directly from the command line.",
    tags: ["CLI", "Automation", "Code Review"],
    icon: <MessageSquare className="h-6 w-6" />,
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    name: "LangGraph & LangChain",
    description:
      "Built multi-step AI agents with tool-calling for email classification, content generation, and autonomous task execution. Full workflow orchestration with stateful graphs.",
    tags: ["Agents", "Tool Calling", "Orchestration"],
    icon: <Network className="h-6 w-6" />,
    gradient: "from-orange-500/20 to-yellow-500/20",
  },
  {
    name: "LangSmith",
    description:
      "End-to-end tracing, evaluation, and optimization of LLM pipelines. Reduced hallucination rates and improved response accuracy through systematic prompt testing.",
    tags: ["Tracing", "Evaluation", "Optimization"],
    icon: <Sparkles className="h-6 w-6" />,
    gradient: "from-pink-500/20 to-rose-500/20",
  },
  {
    name: "Antigravity",
    description:
      "AI-powered codebase analysis, migration planning, and dependency auditing. Automated identification of technical debt and refactoring opportunities across microservices.",
    tags: ["Analysis", "Migration", "Audit"],
    icon: <Zap className="h-6 w-6" />,
    gradient: "from-violet-500/20 to-purple-500/20",
  },
  {
    name: "AI Agent Development",
    description:
      "Designed and deployed production AI agents for email segmentation, content workflows, and customer-facing features with structured output, retry logic, and fallback strategies.",
    tags: ["Production Agents", "Email AI", "Workflows"],
    icon: <Bot className="h-6 w-6" />,
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
]

const workflowSteps: WorkflowStep[] = [
  {
    step: 1,
    title: "Prepare Specification Document",
    mode: "Manual",
    modeColor: "bg-blue-500/20 text-blue-500 border-blue-500/30",
    icon: <FileText className="h-5 w-5" />,
    description:
      "Write a detailed spec document covering requirements, acceptance criteria, data models, API contracts, and edge cases before writing any code.",
    actions: [
      "Define user stories and acceptance criteria",
      "Document API endpoints, request/response schemas",
      "Outline database schema changes and migrations",
      "List edge cases, error handling, and validation rules",
      "Create wireframes or UI mockups for reference",
    ],
  },
  {
    step: 2,
    title: "AI Planning Mode — Review & Strategize",
    mode: "AI Planning",
    modeColor: "bg-purple-500/20 text-purple-500 border-purple-500/30",
    icon: <Search className="h-5 w-5" />,
    description:
      "Feed the spec into Cursor's Planning Mode or Claude to analyze the requirements, identify potential challenges, and generate a step-by-step implementation plan.",
    actions: [
      "Load spec document into Cursor or Claude context",
      "Use Planning Mode to break the task into subtasks",
      "Identify dependencies, blockers, and risk areas",
      "Generate file-level change plan with impact analysis",
      "Review AI suggestions and refine the approach",
    ],
  },
  {
    step: 3,
    title: "AI-Assisted Implementation",
    mode: "AI Agent Mode",
    modeColor: "bg-green-500/20 text-green-500 border-green-500/30",
    icon: <PenTool className="h-5 w-5" />,
    description:
      "Switch to Agent Mode in Cursor to execute the plan. AI generates code following the spec while the developer reviews, guides, and iterates on each change.",
    actions: [
      "Execute implementation using Cursor Agent Mode",
      "AI generates components, hooks, and API routes from the spec",
      "Developer reviews each generated change before accepting",
      "Use Claude CLI for scaffolding boilerplate and tests",
      "Iterate on AI output with targeted follow-up prompts",
    ],
  },
  {
    step: 4,
    title: "Validate, Test & Ship",
    mode: "Execution",
    modeColor: "bg-yellow-500/20 text-yellow-500 border-yellow-500/30",
    icon: <Play className="h-5 w-5" />,
    description:
      "Run automated tests, verify against the original spec, and deploy through CI/CD. AI assists with writing test cases and debugging failures.",
    actions: [
      "AI generates unit and integration tests from the spec",
      "Run full test suite and fix failures with AI assistance",
      "Cross-check implementation against spec acceptance criteria",
      "Deploy through CI/CD pipeline with feature flags",
      "Monitor production metrics and iterate if needed",
    ],
  },
]

function WorkflowTimeline() {
  return (
    <div className="mb-14">
      <div className="flex items-center gap-3 mb-6">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Brain className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground">AI Development Workflow</h3>
          <p className="text-sm text-muted-foreground">Spec-first approach — plan with AI, then execute</p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-1 md:gap-3 mb-10 flex-wrap">
        {workflowSteps.map((ws, i) => (
          <div key={ws.step} className="flex items-center gap-1 md:gap-3">
            <div className={cn("flex items-center gap-2 rounded-full border px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-mono font-semibold", ws.modeColor)}>
              <CheckCircle2 className="h-3.5 w-3.5" />
              {ws.mode}
            </div>
            {i < workflowSteps.length - 1 && (
              <ArrowRight className="h-4 w-4 text-muted-foreground hidden md:block" />
            )}
          </div>
        ))}
      </div>

      <div className="relative">
        <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" aria-hidden />

        <div className="space-y-6">
          {workflowSteps.map((ws) => (
            <div key={ws.step} className="relative md:pl-16">
              <div className="absolute left-4 top-5 h-5 w-5 rounded-full border-2 border-primary bg-background flex items-center justify-center hidden md:flex" aria-hidden>
                <span className="text-[10px] font-bold text-primary">{ws.step}</span>
              </div>

              <div className="rounded-xl border border-border bg-card overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/30">
                <div className="flex items-center gap-3 px-5 py-4 border-b border-border bg-muted/50">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {ws.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="text-base font-semibold text-foreground">{ws.title}</h4>
                      <Badge className={cn("text-xs font-mono border", ws.modeColor)}>
                        Step {ws.step}
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="p-5 space-y-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">{ws.description}</p>
                  <div className="space-y-1.5">
                    {ws.actions.map((action) => (
                      <div key={action} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-3.5 w-3.5 mt-0.5 shrink-0 text-green-500/70" />
                        <span className="text-muted-foreground">{action}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ToolCard({ tool }: { tool: AiToolCard }) {
  return (
    <div className="group rounded-xl border border-border bg-card overflow-hidden shadow-sm transition-all duration-300 hover:shadow-xl hover:border-primary/30 hover:-translate-y-1">
      <div className={cn("flex items-center gap-4 px-5 py-4 border-b border-border bg-gradient-to-r", tool.gradient)}>
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-background/80 text-primary shadow-sm transition-transform duration-300 group-hover:scale-110">
          {tool.icon}
        </div>
        <h3 className="text-lg font-bold text-foreground">{tool.name}</h3>
      </div>
      <div className="p-5 space-y-3">
        <p className="text-sm text-muted-foreground leading-relaxed">
          {tool.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tool.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-xs font-mono bg-muted/80 hover:bg-primary/10 transition-colors"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}

const aiProficiency = [
  { label: "Cursor IDE / Agent Mode", value: 95 },
  { label: "Claude (Anthropic)", value: 90 },
  { label: "Prompt Engineering", value: 88 },
  { label: "LangGraph / LangChain", value: 82 },
  { label: "Claude CLI", value: 85 },
]

function AiProficiencyBars() {
  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
      <h4 className="text-sm font-semibold text-foreground mb-4 font-mono">AI Proficiency</h4>
      <div className="space-y-4">
        {aiProficiency.map((item) => (
          <div key={item.label} className="space-y-1.5">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">{item.label}</span>
              <span className="font-mono text-xs text-ai-accent-500">{item.value}%</span>
            </div>
            <Progress value={item.value} className="h-2 bg-ai-accent-950" />
          </div>
        ))}
      </div>
    </div>
  )
}

function TerminalOverview() {
  return (
    <div className="terminal-bg rounded-xl border border-border overflow-hidden shadow-lg">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
        <span className="h-3 w-3 rounded-full bg-red-500" />
        <span className="h-3 w-3 rounded-full bg-yellow-500" />
        <span className="h-3 w-3 rounded-full bg-green-500" />
        <span className="ml-3 text-xs text-white/40 font-mono">ai-toolkit — overview</span>
      </div>
      <div className="p-5 font-mono text-sm space-y-2">
        <p>
          <span className="text-green-400">$</span>{" "}
          <span className="text-white/80">cursor --list-models</span>
        </p>
        <p className="text-ai-accent-400">claude-sonnet-4-20250514 (anthropic) — active</p>
        <p>
          <span className="text-green-400">$</span>{" "}
          <span className="text-white/80">langgraph status --agents</span>
        </p>
        <p className="text-cyan-400">
          3 agents deployed &bull; email-classifier &bull; content-generator &bull; rag-search
        </p>
        <p>
          <span className="text-green-400">$</span>{" "}
          <span className="text-white/80">claude --version</span>
        </p>
        <p className="text-yellow-400">
          claude-cli v1.x — prompt engineering &amp; automation ready
          <span className="animate-blink text-green-400 ml-1">_</span>
        </p>
      </div>
    </div>
  )
}

function AiAgents() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref)

  return (
    <Section
      ref={ref}
      id="ai-agents"
      className={cn(
        "relative transition-all duration-700 overflow-hidden",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      )}
    >
      <div className="absolute inset-0 bg-dot-grid opacity-40" aria-hidden />
      <div className="absolute inset-0 bg-mesh-gradient" aria-hidden />
      <div className="glow-orb glow-orb--purple animate-pulse-glow w-[300px] h-[300px] -top-24 -right-24" aria-hidden />
      <div className="glow-orb glow-orb--primary animate-float w-[250px] h-[250px] bottom-0 -left-16" aria-hidden />
      <div className="glow-orb glow-orb--accent animate-float-delayed w-[200px] h-[200px] top-1/3 right-1/4" aria-hidden />

      <div className="relative z-10">
        <Tabs defaultValue="workflow" className="w-full">
          <TabsList className="mb-8 w-full max-w-md mx-auto grid grid-cols-2 bg-muted/80 backdrop-blur-sm">
            <TabsTrigger value="workflow" className="font-mono text-sm gap-2">
              <FileText className="h-4 w-4" />
              Dev Workflow
            </TabsTrigger>
            <TabsTrigger value="toolkit" className="font-mono text-sm gap-2">
              <Zap className="h-4 w-4" />
              AI Toolkit
            </TabsTrigger>
          </TabsList>

          <TabsContent value="workflow">
            <WorkflowTimeline />
          </TabsContent>

          <TabsContent value="toolkit">
            <TerminalOverview />

            <Separator className="my-8" />

            <div className="grid gap-6 md:grid-cols-2 mb-8">
              {aiTools.map((tool) => (
                <ToolCard key={tool.name} tool={tool} />
              ))}
            </div>

            <Separator className="my-8" />

            <AiProficiencyBars />
          </TabsContent>
        </Tabs>
      </div>
    </Section>
  )
}

export { AiAgents }
