import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"
import {
  resumeName,
  resumeTagline,
  resumeTitle,
} from "@/data/resume"

function Hero() {
  return (
    <Section id="hero" className="text-center pt-20 pb-16 md:pt-28 md:pb-24">
      <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
        {resumeName}
      </h1>
      <p className="mt-4 text-xl text-primary font-medium md:text-2xl">
        {resumeTitle}
      </p>
      <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
        {resumeTagline}
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button asChild size="lg">
          <a href="#experience">View experience</a>
        </Button>
        <Button asChild variant="outline" size="lg">
          <a href="#contact">Contact</a>
        </Button>
      </div>
    </Section>
  )
}

export { Hero }
