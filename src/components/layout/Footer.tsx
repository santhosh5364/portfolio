import { contactLinks } from "@/data/contact"

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-muted/30 py-10 px-6 md:px-12 lg:px-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p className="font-medium">© {currentYear} Santhosh.G</p>
        <div className="flex gap-8">
          <a
            href={contactLinks.email}
            className="hover:text-primary font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md"
          >
            Email
          </a>
          <a
            href={contactLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md"
          >
            LinkedIn
          </a>
          <a
            href={contactLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
