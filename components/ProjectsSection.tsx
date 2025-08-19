import { projectsData } from "@/app/data/projects"
import { ProjectsGrid } from "./Projects/ProjectsGrid"

export function ProjectsSection() {
  return (
    <section id="projects" className="py-14">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Projects header */}
        <div className="mb-3 sm:mb-4 lg:mb-6">
          <div className="space-y-2 sm:space-y-3">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-2 leading-tight">
              Projects
            </h1>
            <div className="w-12 sm:w-16 lg:w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
          </div>
        </div>
        {/* Projects Grid */}
        <ProjectsGrid projects={projectsData} />
      </div>
    </section>
  )
}
        