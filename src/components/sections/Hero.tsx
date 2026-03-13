import { useRef } from "react"
import { Link } from "react-router-dom"
import { Section } from "@/components/ui/section"
import { navLinks } from "@/data/navLinks"
import { resumeName, resumeTitle, resumeTagline } from "@/data/resume"
import { useInView } from "@/hooks/useInView"
import { cn } from "@/lib/utils"
import {
  FileText,
  GitPullRequest,
  Workflow,
  Rocket,
  LayoutDashboard,
  TerminalSquare,
} from "lucide-react"

const iconMap: Record<string, React.ReactNode> = {
  file: <FileText className="h-5 w-5" />,
  "git-pr": <GitPullRequest className="h-5 w-5" />,
  pipeline: <Workflow className="h-5 w-5" />,
  rocket: <Rocket className="h-5 w-5" />,
  kanban: <LayoutDashboard className="h-5 w-5" />,
  terminal: <TerminalSquare className="h-5 w-5" />,
}

function TerminalBlock() {
  return (
    <div className="terminal-bg rounded-xl border border-border overflow-hidden shadow-2xl max-w-2xl mx-auto">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
        <span className="h-3 w-3 rounded-full bg-red-500" />
        <span className="h-3 w-3 rounded-full bg-yellow-500" />
        <span className="h-3 w-3 rounded-full bg-green-500" />
        <span className="ml-3 text-xs text-white/40 font-mono">~/santhosh-portfolio</span>
      </div>
      <div className="p-5 md:p-6 font-mono text-sm md:text-base space-y-2 text-left">
        <p>
          <span className="text-green-400">$</span>{" "}
          <span className="text-white/90">whoami</span>
        </p>
        <p className="text-blue-400 font-semibold text-lg md:text-xl">
          {resumeName}
          <span className="animate-blink text-green-400 ml-0.5">_</span>
        </p>
        <p>
          <span className="text-green-400">$</span>{" "}
          <span className="text-white/90">cat role.txt</span>
        </p>
        <p className="text-purple-400">{resumeTitle}</p>
        <p>
          <span className="text-green-400">$</span>{" "}
          <span className="text-white/90">cat summary.txt</span>
        </p>
        <p className="text-white/60 leading-relaxed">{resumeTagline}</p>
        <p>
          <span className="text-green-400">$</span>{" "}
          <span className="text-white/90">ls ./portfolio/</span>
        </p>
        <div className="flex flex-wrap gap-1 text-cyan-400">
          {navLinks.map((link) => (
            <span key={link.path}>{link.label}/{"  "}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

function WorkflowLinks() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-2xl mx-auto mt-12">
      {navLinks.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className={cn(
            "group flex items-center gap-3 rounded-xl border border-border bg-card p-4",
            "transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          )}
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
            {iconMap[link.icon]}
          </div>
          <span className="text-sm font-medium text-foreground">{link.label}</span>
        </Link>
      ))}
    </div>
  )
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref)

  return (
    <Section
      ref={ref}
      id="hero"
      className={cn(
        "relative min-h-[90vh] flex flex-col justify-center text-center overflow-hidden",
        "pt-16 pb-12 md:pt-20 md:pb-16"
      )}
    >
      <div className="glow-orb glow-orb--primary w-[300px] h-[300px] -top-32 -right-32 md:w-[420px] md:h-[420px]" aria-hidden />
      <div className="glow-orb glow-orb--accent w-[250px] h-[250px] -bottom-20 -left-20 md:w-[350px] md:h-[350px]" aria-hidden />

      <div
        className={cn(
          "relative z-10 transition-all duration-700",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        )}
      >
        <TerminalBlock />
        <WorkflowLinks />
      </div>
    </Section>
  )
}

export { Hero }
