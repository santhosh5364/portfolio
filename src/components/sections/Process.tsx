import { useRef } from "react"
import { Section } from "@/components/ui/section"
import { useInView } from "@/hooks/useInView"
import { cn } from "@/lib/utils"

interface KanbanCard {
  title: string
  description: string
  tag: string
  tagColor: string
}

const columns: { heading: string; cards: KanbanCard[] }[] = [
  {
    heading: "Backlog",
    cards: [
      {
        title: "Requirement gathering",
        description: "Collaborate with product owners and stakeholders to understand user stories and acceptance criteria.",
        tag: "Planning",
        tagColor: "bg-blue-500/20 text-blue-500 border-blue-500/30",
      },
      {
        title: "Architecture design",
        description: "Document system architecture, data flows, and technical decisions before implementation.",
        tag: "Design",
        tagColor: "bg-purple-500/20 text-purple-500 border-purple-500/30",
      },
    ],
  },
  {
    heading: "In Progress",
    cards: [
      {
        title: "Sprint development",
        description: "Implement features in 2-week sprints with daily stand-ups and continuous integration.",
        tag: "Dev",
        tagColor: "bg-yellow-500/20 text-yellow-500 border-yellow-500/30",
      },
      {
        title: "Code reviews",
        description: "Lead PR reviews with best practices, mentor junior developers, and maintain code quality.",
        tag: "Review",
        tagColor: "bg-orange-500/20 text-orange-500 border-orange-500/30",
      },
    ],
  },
  {
    heading: "Testing",
    cards: [
      {
        title: "QA & automation",
        description: "Write unit, integration, and E2E tests with Jest, React Testing Library, and Playwright.",
        tag: "Testing",
        tagColor: "bg-pink-500/20 text-pink-500 border-pink-500/30",
      },
      {
        title: "Performance tuning",
        description: "Optimize SQL queries, bundle size, and rendering performance under increased load.",
        tag: "Perf",
        tagColor: "bg-red-500/20 text-red-500 border-red-500/30",
      },
    ],
  },
  {
    heading: "Done",
    cards: [
      {
        title: "Deploy to production",
        description: "Automated CI/CD pipelines with Terraform, feature flags via Flipt, and zero-downtime releases.",
        tag: "Deploy",
        tagColor: "bg-green-500/20 text-green-500 border-green-500/30",
      },
      {
        title: "Monitor & iterate",
        description: "Track metrics with Datadog and OpenTelemetry. Run retrospectives and continuously improve.",
        tag: "Ops",
        tagColor: "bg-cyan-500/20 text-cyan-500 border-cyan-500/30",
      },
    ],
  },
]

function KanbanColumn({
  heading,
  cards,
}: {
  heading: string
  cards: KanbanCard[]
}) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2 mb-1">
        <div className={cn(
          "h-2 w-2 rounded-full",
          heading === "Backlog" && "bg-blue-500",
          heading === "In Progress" && "bg-yellow-500",
          heading === "Testing" && "bg-purple-500",
          heading === "Done" && "bg-green-500"
        )} />
        <h3 className="text-sm font-semibold text-foreground">{heading}</h3>
        <span className="text-xs text-muted-foreground ml-auto">{cards.length}</span>
      </div>
      {cards.map((card) => (
        <div
          key={card.title}
          className="rounded-lg border border-border bg-card p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className={cn("text-xs font-mono px-2 py-0.5 rounded-full border", card.tagColor)}>
              {card.tag}
            </span>
          </div>
          <h4 className="text-sm font-semibold text-foreground mb-1">{card.title}</h4>
          <p className="text-xs text-muted-foreground leading-relaxed">{card.description}</p>
        </div>
      ))}
    </div>
  )
}

function Process() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref)

  return (
    <Section
      ref={ref}
      id="process"
      className={cn(
        "transition-all duration-700",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      )}
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {columns.map((col) => (
          <KanbanColumn key={col.heading} heading={col.heading} cards={col.cards} />
        ))}
      </div>
    </Section>
  )
}

export { Process }
