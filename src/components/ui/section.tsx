import * as React from "react"

import { cn } from "@/lib/utils"

interface SectionProps {
  id?: string
  className?: string
  children?: React.ReactNode
}

const Section = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ className, children, ...props }, ref) => (
    <section
      ref={ref as React.Ref<HTMLElement>}
      className={cn("w-full px-6 py-12 md:px-12 lg:px-20 md:py-16", className)}
      {...props}
    >
      {children}
    </section>
  )
)
Section.displayName = "Section"

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs font-semibold tracking-widest uppercase text-primary">
      {children}
    </span>
  )
}

function SectionTitle({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h2
      className={cn(
        "text-3xl font-bold tracking-tight text-foreground md:text-4xl",
        className
      )}
    >
      {children}
    </h2>
  )
}

export { Section, SectionLabel, SectionTitle }
