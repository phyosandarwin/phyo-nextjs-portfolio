import { AboutSection } from "@/components/AboutSection"
import { EducationSection } from "@/components/EducationSection"
import { ExperienceSection } from "@/components/ExperienceSection"
import { SkillsSection } from "@/components/SkillsSection"
import { ProjectsSection } from "@/components/ProjectsSection"
import Footer from "@/components/Footer"
import { FadeInMotion } from "@/components/FadeInMotion"

export default function HomePage() {
  return (
    <main>
      <FadeInMotion>
        <AboutSection />
      </FadeInMotion>
      <FadeInMotion>
        <EducationSection />
      </FadeInMotion>
      <FadeInMotion>
        <ExperienceSection />
      </FadeInMotion>
      <FadeInMotion>
        <SkillsSection />
      </FadeInMotion>
      <FadeInMotion>
        <ProjectsSection />
      </FadeInMotion>
      <FadeInMotion>
        <Footer />
      </FadeInMotion>
    </main>
  )
}
