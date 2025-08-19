import { educationData } from "@/app/data/education"
import { EducationTimelineEntry } from "./Education/EducationTimelineEntry"

export function EducationSection() {
  return (
    <section id="education" className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Education header - reduced margin and improved typography */}
        <div className="mb-6 sm:mb-8 lg:mb-12">
          <div className="space-y-2 sm:space-y-3">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-2 leading-tight">
              Education
            </h1>
            <div className="w-12 sm:w-16 lg:w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
          </div>
        </div>
        <div className="relative space-y-8 sm:space-y-10 lg:space-y-12">
          {/* Vertical timeline line - keeping original positioning */}
          <div className="absolute left-6.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-500 z-0" />
          {educationData.map((entry, index) => (
            <EducationTimelineEntry key={index} entry={entry} />
          ))}
        </div>
      </div>
    </section>
  )
}