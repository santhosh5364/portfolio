import { PageHeader } from "@/components/layout/PageHeader"
import { Projects } from "@/components/sections/Projects"

function ProjectsPage() {
  return (
    <>
      <PageHeader title="Deployments" subtitle="What I've shipped" />
      <Projects />
    </>
  )
}

export { ProjectsPage }
