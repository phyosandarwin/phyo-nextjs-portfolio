import { ProjectCard } from "./ProjectCard"

interface Project {
  id: number
  title: string
  description: string
  date: string
  image: string
  technologies: string[]
  liveUrl?: string | null
  githubUrl?: string | null
}

interface ProjectsGridProps {
  projects: Project[]
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 sm:gap-7">
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </div>
  )
}
