import { useRef } from "react"
import { CheckCircle2, Circle, ArrowRight } from "lucide-react"
import { Section } from "@/components/ui/section"
import { resumeExperience } from "@/data/resume"
import { useInView } from "@/hooks/useInView"
import { cn } from "@/lib/utils"

const pipelineStages = [
  { label: "Plan", color: "text-blue-400", bg: "bg-blue-500/20", border: "border-blue-500/30" },
  { label: "Build", color: "text-yellow-400", bg: "bg-yellow-500/20", border: "border-yellow-500/30" },
  { label: "Test", color: "text-purple-400", bg: "bg-purple-500/20", border: "border-purple-500/30" },
  { label: "Deploy", color: "text-green-400", bg: "bg-green-500/20", border: "border-green-500/30" },
]

function PipelineHeader() {
  return (
    <div className="flex items-center justify-center gap-2 md:gap-4 mb-10 flex-wrap">
      {pipelineStages.map((stage, i) => (
        <div key={stage.label} className="flex items-center gap-2">
          <div className={cn("flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-mono font-semibold", stage.bg, stage.border, stage.color)}>
            <CheckCircle2 className="h-4 w-4" />
            {stage.label}
          </div>
          {i < pipelineStages.length - 1 && (
            <ArrowRight className="h-4 w-4 text-muted-foreground hidden md:block" />
          )}
        </div>
      ))}
    </div>
  )
}

function PipelineJob({
  title,
  items,
  status,
}: {
  title: string
  items: string[]
  status: "success" | "running"
}) {
  const isSuccess = status === "success"
  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden shadow-sm">
      <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-muted/50">
        {isSuccess ? (
          <CheckCircle2 className="h-4 w-4 text-green-500" />
        ) : (
          <Circle className="h-4 w-4 text-blue-500 animate-pulse" />
        )}
        <span className="text-sm font-semibold text-foreground font-mono">{title}</span>
        <span className={cn(
          "ml-auto text-xs font-mono px-2 py-0.5 rounded-full border",
          isSuccess ? "text-green-500 bg-green-500/10 border-green-500/30" : "text-blue-500 bg-blue-500/10 border-blue-500/30"
        )}>
          {isSuccess ? "passed" : "running"}
        </span>
      </div>
      <div className="p-4 space-y-2">
        {items.map((item, i) => (
          <div key={i} className="flex items-start gap-3 text-sm">
            <CheckCircle2 className="h-3.5 w-3.5 mt-0.5 shrink-0 text-green-500/70" />
            <span className="text-muted-foreground leading-relaxed">{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function Experience() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref)

  const job = resumeExperience[0]

  return (
    <Section
      ref={ref}
      id="experience"
      className={cn(
        "transition-all duration-700",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      )}
    >
      <div className="terminal-bg rounded-xl border border-border overflow-hidden shadow-lg mb-8">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
          <span className="h-3 w-3 rounded-full bg-red-500" />
          <span className="h-3 w-3 rounded-full bg-yellow-500" />
          <span className="h-3 w-3 rounded-full bg-green-500" />
          <span className="ml-3 text-xs text-white/40 font-mono">CI/CD — {job.company}</span>
        </div>
        <div className="p-5 font-mono text-sm">
          <p>
            <span className="text-green-400">$</span>{" "}
            <span className="text-white/80">git log --oneline --author=&quot;{job.role}&quot;</span>
          </p>
          <p className="text-yellow-400 mt-1">
            {job.period} — {job.company}
          </p>
        </div>
      </div>

      <PipelineHeader />

      <div className="space-y-6">
        <PipelineJob
          title="build: frontend & backend"
          status="success"
          items={job.bullets.slice(0, 10)}
        />
        <PipelineJob
          title="test: quality & performance"
          status="success"
          items={job.bullets.slice(10, 20)}
        />
        <PipelineJob
          title="deploy: cloud & infrastructure"
          status="success"
          items={job.bullets.slice(20)}
        />
        {job.leadBullets && job.leadBullets.length > 0 && (
          <PipelineJob
            title="lead: team & process"
            status="running"
            items={job.leadBullets}
          />
        )}
      </div>
    </Section>
  )
}

export { Experience }
