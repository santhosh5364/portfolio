import { PageHeader } from "@/components/layout/PageHeader"
import { AiAgents } from "@/components/sections/AiAgents"

function AiPage() {
  return (
    <>
      <PageHeader title="AI & Agents" subtitle="ML tooling, LLM agents & AI-powered workflows" />
      <AiAgents />
    </>
  )
}

export { AiPage }
