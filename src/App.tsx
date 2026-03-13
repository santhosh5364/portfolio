import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from "@/pages/Layout"
import { HomePage } from "@/pages/HomePage"
import { AboutPage } from "@/pages/AboutPage"
import { SkillsPage } from "@/pages/SkillsPage"
import { AiPage } from "@/pages/AiPage"
import { ExperiencePage } from "@/pages/ExperiencePage"
import { ProjectsPage } from "@/pages/ProjectsPage"
import { ProcessPage } from "@/pages/ProcessPage"
import { ContactPage } from "@/pages/ContactPage"

function App() {
  return (
    <BrowserRouter basename="/port">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="skills" element={<SkillsPage />} />
          <Route path="ai" element={<AiPage />} />
          <Route path="experience" element={<ExperiencePage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="process" element={<ProcessPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
