import Image from "next/image"

export function EducationLogo({ logo, institution }: { logo: string, institution: string }) {
  return (
    <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 relative rounded-full bg-white shadow-lg overflow-hidden p-1 sm:p-1.5 lg:p-2 ring-2 ring-slate-100">
      <Image src={logo} alt={institution} fill className="object-contain" />
    </div>
  )
}
