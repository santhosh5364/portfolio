import { PageHeader } from "@/components/layout/PageHeader"
import { AiAgents } from "@/components/sections/AiAgents"

function AiPage() {
  return (
    <>
      <PageHeader title="AI & Agents" subtitle="Agentic AI, multi-agent RAG, MCP & production LLM workflows" />
      <AiAgents />
    </>
  )
}

export { AiPage }
