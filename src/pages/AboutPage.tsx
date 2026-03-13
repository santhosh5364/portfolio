import { PageHeader } from "@/components/layout/PageHeader"
import { About } from "@/components/sections/About"

function AboutPage() {
  return (
    <>
      <PageHeader title="README.md" subtitle="About me" />
      <About />
    </>
  )
}

export { AboutPage }
