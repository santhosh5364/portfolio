import * as React from "react"

const options: IntersectionObserverInit = {
  rootMargin: "0px 0px -80px 0px",
  threshold: 0.1,
}

export function useInView(ref: React.RefObject<HTMLElement | HTMLDivElement | null>) {
  const [isInView, setIsInView] = React.useState(false)

  React.useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) setIsInView(true)
    }, options)
    observer.observe(el)
    return () => observer.disconnect()
  }, [ref])

  return isInView
}
