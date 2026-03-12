import * as React from "react"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { navLinks } from "@/data/navLinks"
import { useScrollSpy } from "@/hooks/useScrollSpy"
import { cn } from "@/lib/utils"

function NavLink({
  href,
  label,
  isActive,
  className,
  onClick,
}: {
  href: string
  label: string
  isActive?: boolean
  className?: string
  onClick?: () => void
}) {
  const handleClick = () => {
    onClick?.()
  }
  return (
    <a
      href={href}
      className={cn(
        "text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md px-3 py-2",
        isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground",
        className
      )}
      onClick={handleClick}
      aria-current={isActive ? "page" : undefined}
    >
      {label}
    </a>
  )
}

function DesktopNav({ activeId }: { activeId: string | null }) {
  return (
    <nav className="hidden md:flex items-center gap-1" aria-label="Main">
      {navLinks.map((link) => (
        <NavLink
          key={link.href}
          href={link.href}
          label={link.label}
          isActive={activeId === link.id}
        />
      ))}
    </nav>
  )
}

function HeaderNav() {
  const [sheetOpen, setSheetOpen] = React.useState(false)
  const activeId = useScrollSpy()
  return (
    <>
      <DesktopNav activeId={activeId} />
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" aria-label="Open menu" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[280px]">
          <SheetHeader>
            <SheetTitle className="sr-only">Menu</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col gap-2 pt-6" aria-label="Main">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                isActive={activeId === link.id}
                className="text-base py-3"
                onClick={() => setSheetOpen(false)}
              />
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </>
  )
}

export { HeaderNav }
