import { BookOpen } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export function EducationCourses({ courses }: { courses?: string[] }) {
  if (!courses || courses.length === 0) return null
  return (
    <div className="mb-3 sm:mb-4">
      <div className="font-bold text-[10px] sm:text-xs text-blue-900 mb-2 sm:mb-3 tracking-wide uppercase flex items-center gap-1.5 sm:gap-2">
        <BookOpen className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-blue-700" />
        Relevant Courses
      </div>
      <div className="flex flex-wrap gap-1.5 sm:gap-2">
        {courses.map((course, courseIndex) => (
          <Badge
            variant="outline"
            key={courseIndex}
            className="font-medium px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] lg:text-xs shadow-sm bg-white text-slate-800 hover:bg-slate-900 hover:text-white transition-colors border-slate-300"
          >
            {course}
          </Badge>
        ))}
      </div>
    </div>
  )
}
