import * as React from "react"

const sectionIds = [
  "about",
  "skills",
  "experience",
  "projects",
  "education",
  "contact",
]

function getActiveSection(): string | null {
  if (typeof window === "undefined") return null
  const scrollY = window.scrollY
  const headerOffset = 80
  let current: string | null = null

  for (const id of sectionIds) {
    const el = document.getElementById(id)
    if (!el) continue
    const top = el.getBoundingClientRect().top + scrollY - headerOffset
    if (scrollY >= top) {
      current = id
    }
  }
  return current
}

export function useScrollSpy() {
  const [activeId, setActiveId] = React.useState<string | null>(() =>
    getActiveSection()
  )

  React.useEffect(() => {
    const handleScroll = () => {
      setActiveId(getActiveSection())
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return activeId
}
