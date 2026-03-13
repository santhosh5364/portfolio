import { useRef } from "react"
import { GitPullRequest, GitMerge, Check } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Badge } from "@/components/ui/badge"
import { resumeSkillGroups } from "@/data/resume"
import { useInView } from "@/hooks/useInView"
import { cn } from "@/lib/utils"

function DiffLine({ type, children }: { type: "add" | "context"; children: React.ReactNode }) {
  const isAdd = type === "add"
  return (
    <div
      className={cn(
        "flex items-start gap-2 px-4 py-1 font-mono text-sm",
        isAdd ? "bg-green-500/10 text-green-400" : "text-white/50"
      )}
    >
      <span className="w-4 shrink-0 text-center select-none">
        {isAdd ? "+" : " "}
      </span>
      <span>{children}</span>
    </div>
  )
}

function SkillPullRequest({
  title,
  items,
  prNumber,
}: {
  title: string
  items: string[]
  prNumber: number
}) {
  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/30">
      <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-muted/50">
        <GitPullRequest className="h-4 w-4 text-green-500" />
        <span className="text-sm font-semibold text-foreground">
          feat: add {title.toLowerCase()} stack
        </span>
        <Badge className="ml-auto bg-green-500/20 text-green-600 dark:text-green-400 border-green-500/30 text-xs">
          <Check className="h-3 w-3 mr-1" />
          Merged
        </Badge>
      </div>
      <div className="flex items-center gap-2 px-4 py-2 text-xs text-muted-foreground border-b border-border">
        <GitMerge className="h-3 w-3 text-purple-500" />
        <span>PR #{prNumber} merged into <span className="font-mono text-primary">main</span></span>
      </div>
      <div className="py-2">
        <DiffLine type="context">// {title}</DiffLine>
        {items.map((item) => (
          <DiffLine key={item} type="add">{`"${item}",`}</DiffLine>
        ))}
      </div>
    </div>
  )
}

function Skills() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref)

  return (
    <Section
      ref={ref}
      id="skills"
      className={cn(
        "transition-all duration-700",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      )}
    >
      <div className="grid gap-6 md:grid-cols-2">
        {resumeSkillGroups.map((group, i) => (
          <SkillPullRequest
            key={group.title}
            title={group.title}
            items={group.items}
            prNumber={100 + i}
          />
        ))}
      </div>
    </Section>
  )
}

export { Skills }
