import Image from "next/image"
import { ExternalLink, Github } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from "@/components/ui/button"
import Link from "next/link"

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

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const techs = project.technologies.slice(0, 4)
  const extraTechs = project.technologies.length > 4

  return (
    <Card
      className="overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 group border-2 border-slate-200/50 bg-white backdrop-blur-sm hover:bg-slate-50 relative p-0 h-[340px] flex flex-col justify-between hover:border-black hover:shadow-slate-900/40"
      style={{
        animationDelay: `${index * 100}ms`,
        animation: 'fadeInUp 0.6s ease-out forwards'
      }}
    >
      {/* Project Image */}
      <div className="relative h-28 sm:h-32 bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden m-0">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-all duration-500 group-hover:opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {/* Floating badge */}
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-slate-900/80 backdrop-blur-sm rounded-full px-1.5 py-1">
            <ExternalLink className="w-2.5 h-2.5 text-white" />
          </div>
        </div>
      </div>
      {/* Card content with fixed structure */}
      <div className="flex flex-col flex-1">
        <CardHeader className="p-3 pb-2">
          <CardTitle className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-slate-700 transition-colors duration-300 leading-tight">
            {project.title}
          </CardTitle>
          <div className="text-xs text-slate-500 font-medium mb-1">{project.date}</div>
          {/* Set a fixed height for description to align cards */}
          <CardDescription
            className="text-xs leading-tight text-slate-600 mb-1"
            style={{ minHeight: "40px", maxHeight: "60px", overflow: "auto" }}
          >
            {project.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="px-3 pb-2">
          {/* Technologies with fixed height */}
          <div className="flex flex-wrap gap-1 h-6 overflow-hidden">
            {techs.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-xs px-1.5 py-0 bg-slate-100 text-slate-700 hover:bg-slate-200 border-0 transition-all duration-200 font-medium h-5"
              >
                {tech}
              </Badge>
            ))}
            {extraTechs && (
              <Badge variant="secondary" className="text-xs px-1.5 py-0 bg-slate-100 text-slate-700 border-0 font-medium h-5">
                +{project.technologies.length - 4}
              </Badge>
            )}
          </div>
        </CardContent>
        {/* Always render CardFooter with fixed height for alignment */}
        <CardFooter className="flex gap-2 p-3 pt-2 mt-auto min-h-[40px]">
          {project.liveUrl && (
            <Button
              asChild
              size="sm"
              className="flex-1 text-xs h-6 bg-slate-900 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200"
            >
              <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-3 h-3 mr-1" />
                <span className="hidden sm:inline">Live Demo</span>
                <span className="sm:hidden">Live</span>
              </Link>
            </Button>
          )}
          {project.githubUrl && (
            <Button
              asChild
              variant="outline"
              size="sm"
              className="flex-1 text-xs h-6 border-slate-300 text-slate-700 bg-white hover:bg-slate-200 hover:border-slate-400 font-medium rounded-lg transition-colors duration-200"
            >
              <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-3 h-3 mr-1" />
                <span className="hidden sm:inline">Code</span>
                <span className="sm:hidden">Code</span>
              </Link>
            </Button>
          )}
          {/* If no buttons, render an empty spacer for alignment */}
          {!project.liveUrl && !project.githubUrl && (
            <div className="flex-1" />
          )}
        </CardFooter>
      </div>
    </Card>
  )
}
