import { GraduationCap } from 'lucide-react'
import { EducationLogo } from './EducationLogo'
import { EducationCard } from './EducationCard'
import type { EducationEntry } from '@/app/data/education' // <-- import the type

export function EducationTimelineEntry({ entry }: { entry: EducationEntry }) {
  return (
    <div className="relative flex items-start gap-4 sm:gap-5 lg:gap-6">
      {/* Timeline dot */}
      <div className="absolute left-7 top-6 -translate-x-1/2">
        <div className="w-6 h-6 rounded-full border-2 border-white shadow-md ring-2 ring-blue-200/40 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
          <GraduationCap className="w-3.5 h-3.5 text-white" />
        </div>
      </div>
      {/* Institution logo */}
      <div className="ml-14 mt-1 sm:mt-2 flex-shrink-0">
        <EducationLogo logo={entry.logo} institution={entry.institution} />
      </div>
      {/* Education card */}
      <div className="flex-1 min-w-0">
        <EducationCard entry={entry} />
      </div>
    </div>
  )
}
