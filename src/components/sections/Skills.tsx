import { Section } from "@/components/ui/section"
import { Badge } from "@/components/ui/badge"
import { resumeSkillGroups } from "@/data/resume"

function SkillGroup({
  title,
  items,
}: {
  title: string
  items: string[]
}) {
  return (
    <div className="space-y-2">
      <h3 className="text-sm font-medium text-foreground">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <Badge key={item} variant="secondary">
            {item}
          </Badge>
        ))}
      </div>
    </div>
  )
}

function Skills() {
  return (
    <Section id="skills" className="bg-muted/30">
      <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-8">
        Skills
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {resumeSkillGroups.map((group) => (
          <SkillGroup
            key={group.title}
            title={group.title}
            items={group.items}
          />
        ))}
      </div>
    </Section>
  )
}

export { Skills }
