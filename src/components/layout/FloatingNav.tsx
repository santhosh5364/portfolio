import * as React from "react"
import { Link } from "react-router-dom"
import {
  Menu,
  Moon,
  Sun,
  Home,
  FileText,
  GitPullRequest,
  Workflow,
  Rocket,
  LayoutDashboard,
  TerminalSquare,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { navLinks } from "@/data/navLinks"
import { useTheme } from "@/hooks/useTheme"
import { cn } from "@/lib/utils"

const iconMap: Record<string, React.ReactNode> = {
  file: <FileText className="h-4 w-4" />,
  "git-pr": <GitPullRequest className="h-4 w-4" />,
  pipeline: <Workflow className="h-4 w-4" />,
  rocket: <Rocket className="h-4 w-4" />,
  kanban: <LayoutDashboard className="h-4 w-4" />,
  terminal: <TerminalSquare className="h-4 w-4" />,
}

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  const handleToggle = () => {
    toggleTheme()
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleToggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="rounded-full"
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </Button>
  )
}

function FloatingNav() {
  const [sheetOpen, setSheetOpen] = React.useState(false)

  const handleClose = () => {
    setSheetOpen(false)
  }

  return (
    <div
      className="fixed top-4 right-4 z-50 flex items-center gap-2"
      aria-label="Page actions"
    >
      <ThemeToggle />
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetTrigger asChild>
          <Button
            variant="secondary"
            size="icon"
            aria-label="Open menu"
            className="rounded-full shadow-lg border border-border"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[340px]">
          <SheetHeader>
            <SheetTitle className="text-left text-xl font-bold font-mono">~/menu</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col pt-6 gap-1" aria-label="Main">
            <Link
              to="/"
              onClick={handleClose}
              className={cn(
                "flex items-center gap-3 text-base font-medium text-muted-foreground hover:text-foreground",
                "transition-colors py-3 px-3 rounded-lg hover:bg-muted",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              )}
            >
              <Home className="h-4 w-4" />
              Home
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={handleClose}
                className={cn(
                  "flex items-center gap-3 text-base font-medium text-muted-foreground hover:text-foreground",
                  "transition-colors py-3 px-3 rounded-lg hover:bg-muted",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                )}
              >
                {iconMap[link.icon]}
                {link.label}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export { FloatingNav }
