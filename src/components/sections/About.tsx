import { Section } from "@/components/ui/section"
import { resumeObjective, resumeInterpersonal } from "@/data/resume"

function About() {
  return (
    <Section id="about">
      <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-4">
        About
      </h2>
      <p className="text-muted-foreground leading-relaxed max-w-3xl">
        {resumeObjective}
      </p>
      {resumeInterpersonal.length > 0 && (
        <div className="mt-8">
          <h3 className="text-sm font-medium text-foreground mb-2">
            Interpersonal skills
          </h3>
          <ul className="flex flex-wrap gap-2">
            {resumeInterpersonal.map((skill) => (
              <li
                key={skill}
                className="text-sm text-muted-foreground bg-muted px-3 py-1.5 rounded-md"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      )}
    </Section>
  )
}

export { About }
