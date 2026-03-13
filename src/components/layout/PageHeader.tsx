import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

function PageHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="px-6 md:px-12 lg:px-20 pt-16 pb-8 border-b border-border">
      <Button asChild variant="ghost" size="sm" className="mb-6 -ml-2 text-muted-foreground hover:text-foreground">
        <Link to="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Home
        </Link>
      </Button>
      <span className="block text-xs font-semibold tracking-widest uppercase text-primary mb-2">
        {title}
      </span>
      <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        {subtitle}
      </h1>
    </div>
  )
}

export { PageHeader }
