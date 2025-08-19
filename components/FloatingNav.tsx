"use client"
import React from "react";
import Link from "next/link"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
  User,
  GraduationCap,
  FolderCode,
  BriefcaseBusiness,
  Wrench,
} from "lucide-react"
import { useEffect, useState } from "react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const navItems = [
  { id: "about", label: "About", icon: User, href: "#about" },
  { id: "education", label: "Education", icon: GraduationCap, href: "#education" },
  { id: "experience", label: "Experience", icon: BriefcaseBusiness, href: "#experience" },
  { id: "skills", label: "Skills", icon: Wrench, href: "#skills" }, // Use Wrench for Skills
  { id: "projects", label: "Projects", icon: FolderCode, href: "#projects" },
]

export default function FloatingNav() {
  const [scrolled, setScrolled] = useState(false)
  const [activeId, setActiveId] = useState<string>("about")
  const [navHeight, setNavHeight] = useState<number>(80)
  const navRef = React.useRef<HTMLElement | null>(null)

  useEffect(() => {
    // Measure nav height on mount and on resize
    const measureNav = () => {
      if (navRef.current) {
        setNavHeight(navRef.current.offsetHeight)
      }
    }
    measureNav()
    window.addEventListener("resize", measureNav)
    return () => window.removeEventListener("resize", measureNav)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 2)

      // Calculate section offsets from top of page
      const offsets = navItems.map(({ id, href }) => {
        const el = document.getElementById(href.replace("#", ""))
        if (!el) return { id, top: Infinity }
        const rect = el.getBoundingClientRect()
        // Use page offset for more accurate detection
        return { id, top: rect.top + window.scrollY }
      })

      // Use measured nav height as buffer for all screen sizes
      const buffer = navHeight

      const scrollPos = window.scrollY + buffer
      const visible = offsets
        .filter(({ top }) => top <= scrollPos)
        .sort((a, b) => b.top - a.top)

      setActiveId(visible.length > 0 ? visible[0].id : navItems[0].id)
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [activeId, navHeight])

  // Update URL hash when activeId changes
  useEffect(() => {
    const currentHash = window.location.hash.replace("#", "")
    if (activeId && currentHash !== activeId) {
      history.replaceState(null, "", "#" + activeId)
    }
  }, [activeId])

  // Scroll to section and update hash on nav click
  const handleNavClick = (id: string, href: string, e: React.MouseEvent) => {
    if (href.startsWith("#")) {
      e.preventDefault()
      const el = document.getElementById(id)
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - navHeight + 1
        window.scrollTo({ top: y, behavior: "smooth" })
        history.replaceState(null, "", href)
        // REMOVE setActiveId(id) here!
      }
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full"
    >
      <nav
        ref={navRef}
        className={cn(
          "w-full transition-colors duration-300",
          scrolled
            ? "border-b border-gray-200/40 bg-white/60 backdrop-blur-xl supports-[backdrop-filter]:bg-white/40 shadow-md"
            : "bg-transparent border-none"
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-20 justify-center">
            {/* Centered nav: always centered, never stretched */}
            <div className="flex justify-center w-full">
              <div className="max-w-max mx-auto">
                <TooltipProvider>
                  <NavigationMenu>
                    <NavigationMenuList
                      className={
                        "flex items-center space-x-1 sm:space-x-2 md:space-x-3"
                      }
                    >
                      {navItems.map(({ id, label, icon: Icon, href }) => (
                        <NavigationMenuItem key={id}>
                          <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                              duration: activeId === id ? 0.12 : 0.2,
                              delay: 0,
                              type: "tween",
                            }}
                          >
                            <NavigationMenuLink asChild>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Link
                                    href={href}
                                    scroll={false}
                                    onClick={e => handleNavClick(id, href, e)}
                                    className={cn(
                                      "group relative flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-100",
                                      scrolled ? "text-black" : "text-black",
                                      activeId === id
                                        ? "bg-blue-100 text-black font-bold shadow-lg ring-2 ring-blue-300"
                                        : "",
                                      "hover:bg-blue-50 hover:text-black hover:shadow-md",
                                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/40 focus-visible:ring-offset-2"
                                    )}
                                  >
                                    <Icon
                                      className={cn(
                                        "w-5 h-5 transition-colors duration-100",
                                        activeId === id ? "text-black" : "text-black",
                                        "group-hover:text-black"
                                      )}
                                    />
                                    <span
                                      className={cn(
                                        "text-sm font-medium hidden sm:inline-block transition-colors duration-100",
                                        activeId === id ? "text-black" : "",
                                        "group-hover:text-black"
                                      )}
                                    >
                                      {label}
                                    </span>
                                    <span className="sr-only">{label}</span>
                                  </Link>
                                </TooltipTrigger>
                                {/* Tooltip visible only on md and below */}
                                <TooltipContent side="bottom" className="md:hidden">
                                  {label}
                                </TooltipContent>
                              </Tooltip>
                            </NavigationMenuLink>
                          </motion.div>
                        </NavigationMenuItem>
                      ))}
                    </NavigationMenuList>
                  </NavigationMenu>
                </TooltipProvider>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </motion.div>
  )
}