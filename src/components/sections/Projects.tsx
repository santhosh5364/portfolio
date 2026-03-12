import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Section } from "@/components/ui/section"
import { resumeProjects } from "@/data/resume"

function ProjectCard({
  name,
  description,
  highlights,
}: {
  name: string
  description: string
  highlights: string[]
}) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{name}</CardTitle>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardHeader>
      <CardContent>
        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
          {highlights.map((highlight, i) => (
            <li key={i}>{highlight}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

function Projects() {
  return (
    <Section id="projects" className="bg-muted/30">
      <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-8">
        Projects
      </h2>
      <div className="space-y-6">
        {resumeProjects.map((project) => (
          <ProjectCard
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
