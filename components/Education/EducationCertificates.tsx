import { Award } from 'lucide-react'

export function EducationCertificates({
  certificates,
  hasCourses,
}: {
  certificates?: string[]
  hasCourses?: boolean
}) {
  if (!certificates || certificates.length === 0) return null
  return (
    <div className={hasCourses ? "pt-3 sm:pt-4" : ""}>
      <div
        className="font-bold text-[10px] sm:text-xs bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2 sm:mb-3 tracking-wide uppercase flex items-center gap-1.5 sm:gap-2"
      >
        <Award className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-purple-600" />
        Professional Certificates
      </div>
      <ul className="list-disc list-inside text-[11px] sm:text-xs lg:text-sm text-slate-700 space-y-1 sm:space-y-1.5 pl-1 sm:pl-2">
        {certificates.map((cert, certIdx) => (
          <li key={certIdx} className="leading-relaxed">{cert}</li>
        ))}
      </ul>
    </div>
  )
}
