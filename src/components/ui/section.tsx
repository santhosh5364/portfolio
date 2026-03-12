import * as React from "react"

import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: "section" | "div"
}

function Section({
  as: Comp = "section",
  className,
  ...props
}: SectionProps) {
  return (
    <Comp
      className={cn("w-full px-6 py-12 md:px-8 md:py-16", className)}
      {...props}
    />
  )
}

export { Section }
