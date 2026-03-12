import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Section } from "@/components/ui/section"
import { resumeEducation } from "@/data/resume"

function EducationCard({
  degree,
  year,
  score,
  institution,
  location,
}: {
  degree: string
  year: string
  score: string
  institution: string
  location: string
}) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{degree}</CardTitle>
        <p className="text-sm text-muted-foreground">
          {institution} · {location}
        </p>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          {year} · {score}
        </p>
      </CardContent>
    </Card>
  )
}

function Education() {
  return (
    <Section id="education">
      <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-8">
        Education
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {resumeEducation.map((entry) => (
          <EducationCard
            key={`${entry.degree}-${entry.year}`}
            degree={entry.degree}
            year={entry.year}
            score={entry.score}
            institution={entry.institution}
            location={entry.location}
          />
        ))}
      </div>
    </Section>
  )
}

export { Education }
