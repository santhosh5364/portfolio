import { PageHeader } from "@/components/layout/PageHeader"
import { Experience } from "@/components/sections/Experience"

function ExperiencePage() {
  return (
    <>
      <PageHeader title="CI/CD Pipeline" subtitle="Where I've worked" />
      <Experience />
    </>
  )
}

export { ExperiencePage }
