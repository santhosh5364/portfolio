import { useRef } from "react"
import { Rocket, CheckCircle2, Globe, Clock } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Badge } from "@/components/ui/badge"
import { resumeProjects } from "@/data/resume"
import { useInView } from "@/hooks/useInView"
import { cn } from "@/lib/utils"

function DeploymentCard({
  name,
  description,
  highlights,
}: {
  name: string
  description: string
  highlights: string[]
}) {
  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:border-green-500/30">
      <div className="flex items-center gap-3 px-5 py-4 border-b border-border bg-muted/50">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-500/20 text-green-500">
          <Rocket className="h-5 w-5" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold text-foreground">{name}</h3>
            <Badge className="bg-green-500/20 text-green-600 dark:text-green-400 border-green-500/30 text-xs">
              <Globe className="h-3 w-3 mr-1" />
              Production
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground mt-0.5">{description}</p>
        </div>
      </div>

      <div className="px-5 py-3 border-b border-border bg-muted/30 flex items-center gap-4 text-xs text-muted-foreground font-mono">
        <span className="flex items-center gap-1">
          <CheckCircle2 className="h-3 w-3 text-green-500" />
          All checks passed
        </span>
        <span className="flex items-center gap-1">
          <Clock className="h-3 w-3" />
          Deployed
        </span>
      </div>

      <div className="p-5">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
          Release Notes
        </p>
        <ul className="space-y-2">
          {highlights.map((highlight, i) => (
            <li key={i} className="flex items-start gap-3 text-sm">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-500/70" />
              <span className="text-muted-foreground leading-relaxed">{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function Projects() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref)

  return (
    <Section
      ref={ref}
      id="projects"
      className={cn(
        "transition-all duration-700",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      )}
    >
      <div className="space-y-6">
        {resumeProjects.map((project) => (
          <DeploymentCard
            key={project.name}
            name={project.name}
            description={project.description}
            highlights={project.highlights}
          />
        ))}
      </div>
    </Section>
  )
}

export { Projects }
