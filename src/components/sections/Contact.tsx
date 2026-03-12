import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"
import { contactLinks } from "@/data/contact"
import { Mail, Linkedin, Github } from "lucide-react"

function Contact() {
  return (
    <Section id="contact" className="bg-muted/30 text-center">
      <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-4">
        Get in touch
      </h2>
      <p className="text-muted-foreground mb-8 max-w-md mx-auto">
        Open to opportunities and collaboration. Reach out via email or connect
        on LinkedIn and GitHub.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button asChild size="lg">
          <a href={contactLinks.email}>
            <Mail className="mr-2 h-4 w-4" />
            Email
          </a>
        </Button>
        <Button asChild variant="outline" size="lg">
          <a
            href={contactLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="mr-2 h-4 w-4" />
            LinkedIn
          </a>
        </Button>
        <Button asChild variant="outline" size="lg">
          <a
            href={contactLinks.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </a>
        </Button>
      </div>
    </Section>
  )
}

export { Contact }
