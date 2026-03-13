import { Outlet } from "react-router-dom"
import { FloatingNav } from "@/components/layout/FloatingNav"
import { Footer } from "@/components/layout/Footer"

function Layout() {
  return (
    <>
      <FloatingNav />
      <main id="main-content" className="flex-1 min-h-[calc(100svh-200px)]">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export { Layout }
