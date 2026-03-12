import { contactLinks } from "@/data/contact"

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t py-8 px-6 md:px-8">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {currentYear} Santhosh.G. All rights reserved.</p>
        <div className="flex gap-6">
          <a
            href={contactLinks.email}
            className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
          >
            Email
          </a>
          <a
            href={contactLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
          >
            LinkedIn
          </a>
          <a
            href={contactLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
