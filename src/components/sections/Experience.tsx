import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Section } from "@/components/ui/section"
import { resumeExperience } from "@/data/resume"

function ExperienceItem({
  company,
  role,
  period,
  bullets,
  leadBullets,
}: {
  company: string
  role: string
  period: string
  bullets: string[]
  leadBullets?: string[]
}) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">
          {role} · {company}
        </CardTitle>
        <p className="text-sm text-muted-foreground">{period}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
          {bullets.map((bullet, i) => (
            <li key={i}>{bullet}</li>
          ))}
        </ul>
        {leadBullets && leadBullets.length > 0 && (
          <div>
            <p className="text-sm font-medium text-foreground mb-2">
              Developer Lead & Project Lead
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              {leadBullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

function Experience() {
  return (
    <Section id="experience">
      <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-8">
        Experience
      </h2>
      <div className="space-y-6">
        {resumeExperience.map((job) => (
          <ExperienceItem
            key={`${job.company}-${job.period}`}
            company={job.company}
            role={job.role}
            period={job.period}
            bullets={job.bullets}
            leadBullets={job.leadBullets}
          />
        ))}
      </div>
    </Section>
  )
}

export { Experience }
