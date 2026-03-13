import { useRef } from "react"
import { GitPullRequest, GitMerge, Check } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { resumeSkillGroups } from "@/data/resume"
import { useInView } from "@/hooks/useInView"
import { cn } from "@/lib/utils"

interface PrColorScheme {
  icon: string
  badgeBg: string
  badgeText: string
  badgeBorder: string
  diffBg: string
  diffText: string
  hoverBorder: string
}

const prColorSchemes: PrColorScheme[] = [
  { icon: "text-cyan-500", badgeBg: "bg-cyan-500/20", badgeText: "text-cyan-600 dark:text-cyan-400", badgeBorder: "border-cyan-500/30", diffBg: "bg-cyan-500/10", diffText: "text-cyan-400", hoverBorder: "hover:border-cyan-500/40" },
  { icon: "text-blue-500", badgeBg: "bg-blue-500/20", badgeText: "text-blue-600 dark:text-blue-400", badgeBorder: "border-blue-500/30", diffBg: "bg-blue-500/10", diffText: "text-blue-400", hoverBorder: "hover:border-blue-500/40" },
  { icon: "text-indigo-500", badgeBg: "bg-indigo-500/20", badgeText: "text-indigo-600 dark:text-indigo-400", badgeBorder: "border-indigo-500/30", diffBg: "bg-indigo-500/10", diffText: "text-indigo-400", hoverBorder: "hover:border-indigo-500/40" },
  { icon: "text-violet-500", badgeBg: "bg-violet-500/20", badgeText: "text-violet-600 dark:text-violet-400", badgeBorder: "border-violet-500/30", diffBg: "bg-violet-500/10", diffText: "text-violet-400", hoverBorder: "hover:border-violet-500/40" },
  { icon: "text-amber-500", badgeBg: "bg-amber-500/20", badgeText: "text-amber-600 dark:text-amber-400", badgeBorder: "border-amber-500/30", diffBg: "bg-amber-500/10", diffText: "text-amber-400", hoverBorder: "hover:border-amber-500/40" },
  { icon: "text-teal-500", badgeBg: "bg-teal-500/20", badgeText: "text-teal-600 dark:text-teal-400", badgeBorder: "border-teal-500/30", diffBg: "bg-teal-500/10", diffText: "text-teal-400", hoverBorder: "hover:border-teal-500/40" },
  { icon: "text-pink-500", badgeBg: "bg-pink-500/20", badgeText: "text-pink-600 dark:text-pink-400", badgeBorder: "border-pink-500/30", diffBg: "bg-pink-500/10", diffText: "text-pink-400", hoverBorder: "hover:border-pink-500/40" },
  { icon: "text-rose-500", badgeBg: "bg-rose-500/20", badgeText: "text-rose-600 dark:text-rose-400", badgeBorder: "border-rose-500/30", diffBg: "bg-rose-500/10", diffText: "text-rose-400", hoverBorder: "hover:border-rose-500/40" },
]

function DiffLine({
  type,
  children,
  colors,
}: {
  type: "add" | "context"
  children: React.ReactNode
  colors?: PrColorScheme
}) {
  const isAdd = type === "add"
  return (
    <div
      className={cn(
        "flex items-start gap-2 px-4 py-1 font-mono text-sm",
        isAdd
          ? cn(colors?.diffBg ?? "bg-cyan-500/10", colors?.diffText ?? "text-cyan-400")
          : "text-white/50"
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
  colors,
}: {
  title: string
  items: string[]
  prNumber: number
  colors: PrColorScheme
}) {
  return (
    <div className={cn("rounded-xl border border-border bg-card overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg", colors.hoverBorder)}>
      <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-muted/50">
        <GitPullRequest className={cn("h-4 w-4", colors.icon)} />
        <span className="text-sm font-semibold text-foreground">
          feat: add {title.toLowerCase()} stack
        </span>
        <Badge className={cn("ml-auto text-xs", colors.badgeBg, colors.badgeText, colors.badgeBorder)}>
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
          <DiffLine key={item} type="add" colors={colors}>{`"${item}",`}</DiffLine>
        ))}
      </div>
    </div>
  )
}

const coreSkillProficiency = [
  { label: "React / TypeScript", value: 95 },
  { label: "Node.js / Express", value: 90 },
  { label: "PostgreSQL / SQL", value: 88 },
  { label: "AWS Cloud Services", value: 82 },
  { label: "CI/CD & DevOps", value: 80 },
  { label: "AI / ML Tooling", value: 85 },
  { label: "Testing & QA", value: 78 },
  { label: "System Design", value: 82 },
]

function SkillProficiency() {
  return (
    <div className="rounded-xl border border-border bg-card/80 backdrop-blur-sm p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-5">
        <div className="h-2.5 w-2.5 rounded-full bg-ai-accent-500 animate-pulse" />
        <h3 className="text-base font-semibold text-foreground font-mono">core_proficiency.json</h3>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {coreSkillProficiency.map((skill) => (
          <div key={skill.label} className="space-y-1.5">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">{skill.label}</span>
              <span className="font-mono text-xs text-ai-accent-400">{skill.value}%</span>
            </div>
            <Progress value={skill.value} className="h-2" />
          </div>
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
        "relative transition-all duration-700 overflow-hidden",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      )}
    >
      <div className="absolute inset-0 bg-grid-lines opacity-40" aria-hidden />
      <div className="glow-orb glow-orb--accent animate-float w-[250px] h-[250px] -bottom-20 -right-20" aria-hidden />
      <div className="glow-orb glow-orb--primary animate-float-delayed w-[180px] h-[180px] -top-12 -left-12" aria-hidden />
      <div className="relative z-10">
        <div className="grid gap-6 md:grid-cols-2">
          {resumeSkillGroups.map((group, i) => (
            <SkillPullRequest
              key={group.title}
              title={group.title}
              items={group.items}
              prNumber={100 + i}
              colors={prColorSchemes[i % prColorSchemes.length]}
            />
          ))}
        </div>

        <Separator className="my-10" />

        <SkillProficiency />
      </div>
    </Section>
  )
}

export { Skills }

