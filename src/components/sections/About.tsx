import { useRef } from "react"
import { Section } from "@/components/ui/section"
import { resumeObjective, resumeInterpersonal, resumeEducation } from "@/data/resume"
import { useInView } from "@/hooks/useInView"
import { cn } from "@/lib/utils"

function LineNumber({ n }: { n: number }) {
  return (
    <span className="inline-block w-8 text-right mr-4 text-muted-foreground/50 select-none text-xs">
      {n}
    </span>
  )
}

function About() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref)

  let line = 1

  return (
    <Section
      ref={ref}
      id="about"
      className={cn(
        "relative transition-all duration-700 overflow-hidden",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      )}
    >
      <div className="absolute inset-0 bg-dot-grid opacity-50" aria-hidden />
      <div className="glow-orb glow-orb--primary animate-float w-[200px] h-[200px] -top-16 -right-16" aria-hidden />
      <div className="relative z-10 terminal-bg rounded-xl border border-border overflow-hidden shadow-lg">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
          <span className="h-3 w-3 rounded-full bg-red-500" />
          <span className="h-3 w-3 rounded-full bg-yellow-500" />
          <span className="h-3 w-3 rounded-full bg-green-500" />
          <span className="ml-3 text-xs text-white/40 font-mono">README.md — santhosh-portfolio</span>
        </div>
        <div className="p-5 md:p-6 font-mono text-sm leading-relaxed overflow-x-auto">
          <p className="text-white/90">
            <LineNumber n={line++} />
            <span className="text-blue-400 font-semibold"># About Me</span>
          </p>
          <p><LineNumber n={line++} /></p>
          <p className="text-white/70">
            <LineNumber n={line++} />
            {resumeObjective}
          </p>
          <p><LineNumber n={line++} /></p>
          <p className="text-white/90">
            <LineNumber n={line++} />
            <span className="text-blue-400 font-semibold">## Education</span>
          </p>
          <p><LineNumber n={line++} /></p>
          {resumeEducation.map((edu) => (
            <p key={edu.degree} className="text-white/70">
              <LineNumber n={line++} />
              <span className="text-yellow-400">-</span>{" "}
              <span className="text-green-400">{edu.degree}</span>{" "}
              <span className="text-white/40">({edu.year}, {edu.score})</span>{" "}
              <span className="text-white/50">@ {edu.institution}</span>
            </p>
          ))}
          <p><LineNumber n={line++} /></p>
          <p className="text-white/90">
            <LineNumber n={line++} />
            <span className="text-blue-400 font-semibold">## Interpersonal Skills</span>
          </p>
          <p><LineNumber n={line++} /></p>
          {resumeInterpersonal.map((skill) => (
            <p key={skill} className="text-white/70">
              <LineNumber n={line++} />
              <span className="text-yellow-400">-</span> {skill}
            </p>
          ))}
        </div>
      </div>
    </Section>
  
  )
}

export { About }
