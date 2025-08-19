"use client";
import { CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import type { ExperienceEntry } from "@/app/data/experience"; // Import the type

export function ExperienceDetails({ entry }: { entry: ExperienceEntry }) {
  return (
    <CardContent className="px-3 sm:px-6 pb-4 pt-0">
      {/* Skills */}
      {entry.skills && entry.skills.length > 0 && (
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
          {entry.skills.map((skill: string, sidx: number) => (
            <Badge
              key={sidx}
              className="font-medium px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs lg:text-sm shadow-sm transition-colors
                bg-gradient-to-r from-blue-100 via-purple-100 to-blue-50 text-blue-800 border border-blue-200
                hover:from-blue-200 hover:via-purple-200 hover:to-blue-100 hover:text-blue-900"
            >
              {skill}
            </Badge>
          ))}
        </div>
      )}

      {/* Description */}
      {entry.description && (
        <ul className="list-disc list-inside text-[11px] sm:text-xs lg:text-sm text-slate-700 space-y-1 sm:space-y-1.5 pl-1 sm:pl-2 mb-2">
          {entry.description.map((item: string, didx: number) => (
            <li
              key={didx}
              className="leading-relaxed hover:text-slate-900 transition-colors"
            >
              {item}
            </li>
          ))}
        </ul>
      )}

      {/* Links */}
      {Array.isArray(entry.links) && entry.links.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-1">
          {entry.links.map((link, lidx) => (
            <a
              key={lidx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center h-7 px-2 text-xs sm:text-sm rounded border border-transparent
                         bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700
                         hover:from-blue-100 hover:to-purple-100 hover:text-blue-800
                         transition-all duration-200"
            >
              <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
              {link.label}
            </a>
          ))}
        </div>
      )}
    </CardContent>
  );
}