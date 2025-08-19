'use client';
import { Github, Youtube, Linkedin, Mail, FileText } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export function ContactIcons() {
  return (
    <TooltipProvider>
      <div className="flex flex-col gap-2 lg:flex-row lg:gap-4 lg:items-center">
        <div className="flex justify-center lg:justify-start gap-4">
          {/* GitHub */}
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="https://github.com/phyosandarwin"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10 flex items-center justify-center rounded-lg relative overflow-hidden transition-all duration-300 shadow-lg"
                style={{
                  background: "transparent",
                  border: "1.5px solid #a7c7c7"
                }}
              >
                <span className="absolute inset-0 bg-slate-800/90 z-0 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out rounded-lg group-hover:border-slate-400 group-hover:shadow-[0_0_10px_#94a3b8]" />
                <Github className="w-5 h-5 text-black group-hover:text-white z-10 transition-colors duration-300" />
              </a>
            </TooltipTrigger>
            <TooltipContent side="bottom">GitHub</TooltipContent>
          </Tooltip>

          {/* LinkedIn */}
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="https://linkedin.com/in/phyosandarwin"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10 flex items-center justify-center rounded-lg relative overflow-hidden transition-all duration-300 shadow-lg"
                style={{
                  background: "transparent",
                  border: "1.5px solid #a7c7c7"
                }}
              >
                <span className="absolute inset-0 bg-blue-500/90 z-0 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out rounded-lg group-hover:border-blue-400 group-hover:shadow-[0_0_10px_#60a5fa]" />
                <Linkedin className="w-5 h-5 text-black group-hover:text-white z-10 transition-colors duration-300" />
              </a>
            </TooltipTrigger>
            <TooltipContent side="bottom">LinkedIn</TooltipContent>
          </Tooltip>

          {/* Email */}
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="mailto:phyosandarwin18@gmail.com"
                className="group w-10 h-10 flex items-center justify-center rounded-lg relative overflow-hidden transition-all duration-300 shadow-lg"
                style={{
                  background: "transparent",
                  border: "1.5px solid #a7c7c7"
                }}
              >
                <span className="absolute inset-0 bg-cyan-500/90 z-0 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out rounded-lg group-hover:border-cyan-400 group-hover:shadow-[0_0_10px_#22d3ee]" />
                <Mail className="w-5 h-5 text-black group-hover:text-white z-10 transition-colors duration-300" />
              </a>
            </TooltipTrigger>
            <TooltipContent side="bottom">Email</TooltipContent>
          </Tooltip>

          {/* YouTube */}
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="https://www.youtube.com/@phyosandarwin18"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10 flex items-center justify-center rounded-lg relative overflow-hidden transition-all duration-300 shadow-lg"
                style={{
                  background: "transparent",
                  border: "1.5px solid #a7c7c7"
                }}
              >
                <span className="absolute inset-0 bg-red-500/90 z-0 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out rounded-lg group-hover:border-red-400 group-hover:shadow-[0_0_10px_#f87171]" />
                <Youtube className="w-5 h-5 text-black group-hover:text-white z-10 transition-colors duration-300" />
              </a>
            </TooltipTrigger>
            <TooltipContent side="bottom">YouTube</TooltipContent>
          </Tooltip>

          {/* Resume as icon */}
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10 flex items-center justify-center rounded-lg relative overflow-hidden transition-all duration-300 shadow-lg"
                style={{
                  background: "transparent",
                  border: "1.5px solid #a7c7c7"
                }}
              >
                <span className="absolute inset-0 bg-violet-500/90 z-0 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out rounded-lg group-hover:border-violet-400 group-hover:shadow-[0_0_10px_#a78bfa]" />
                <FileText className="w-5 h-5 text-black group-hover:text-white z-10 transition-colors duration-300" />
              </a>
            </TooltipTrigger>
            <TooltipContent side="bottom">Resume</TooltipContent>
          </Tooltip>
        </div>
      </div>
    </TooltipProvider>
  );
}
