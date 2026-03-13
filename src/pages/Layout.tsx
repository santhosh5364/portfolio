import { Outlet } from "react-router-dom"
import { FloatingNav } from "@/components/layout/FloatingNav"
import { Footer } from "@/components/layout/Footer"

function Layout() {
  return (
    <div className="relative min-h-svh">
      <div className="fixed inset-0 bg-mesh-gradient pointer-events-none" aria-hidden />
      <FloatingNav />
      <main id="main-content" className="relative z-0 flex-1 min-h-[calc(100svh-200px)]">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export { Layout }
