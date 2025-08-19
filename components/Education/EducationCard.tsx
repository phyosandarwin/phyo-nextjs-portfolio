import { Calendar } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { EducationCourses } from './EducationCourses'
import { EducationCertificates } from './EducationCertificates'
import type { EducationEntry } from '@/app/data/education' 

export function EducationCard({ entry }: { entry: EducationEntry }) {
  return (
    <Card className="border border-slate-200 shadow-md hover:shadow-xl hover:border-slate-300 transition-all duration-300 bg-white/95 backdrop-blur-sm">
      <CardHeader className="pb-2 sm:pb-3 px-4 sm:px-5 lg:px-6 pt-0">
        <CardTitle className="text-sm sm:text-base lg:text-lg font-bold text-slate-900 mb-1 leading-tight">{entry.title}</CardTitle>
        <CardDescription className="text-[11px] sm:text-xs lg:text-sm text-slate-800 font-semibold mb-1">{entry.institution}</CardDescription>
        <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-900 font-medium px-2 py-0.5 rounded-full text-[10px] sm:text-xs flex items-center gap-1 shadow-sm">
          <Calendar className="w-3 sm:w-4 h-3 sm:h-4 text-blue-600" />
          {entry.date}
        </Badge>
        {entry.description && (
          <p className="text-[11px] sm:text-xs lg:text-sm text-slate-700 leading-relaxed mt-2">{entry.description}</p>
        )}
      </CardHeader>
      <CardContent className="px-4 sm:px-5 lg:px-6 pb-4 sm:pb-5">
        <EducationCourses courses={entry.courses} />
        <EducationCertificates certificates={entry.certificates} hasCourses={entry.courses && entry.courses.length > 0} />
      </CardContent>
    </Card>
  )
}
