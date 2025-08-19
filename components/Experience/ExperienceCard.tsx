"use client";
import Image from "next/image";
import { ChevronRight, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExperienceDetails } from "./ExperienceDetails";
import type { ExperienceEntry } from "@/app/data/experience";


export function ExperienceCard({ entry, idx, openIndex, handleToggle }: {
  entry: ExperienceEntry;
  idx: number;
  openIndex: number | null;
  handleToggle: (idx: number) => void;
}) {
  return (
    <Card
      className="
        border shadow-md backdrop-blur-sm transition-all duration-300
        border-slate-300 bg-slate-50
        px-2 py-1 sm:px-4 sm:py-2 lg:px-5 lg:py-2
      "
    >
      <div
        className="flex items-center px-2 sm:px-3 lg:px-4 py-2 sm:py-2 cursor-pointer"
        onClick={() => handleToggle(idx)}
      >
        {/* Logo */}
        <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 relative rounded-full bg-white shadow-lg overflow-hidden p-1 ring-2 ring-slate-100 flex-shrink-0">
          <Image
            src={entry.logo}
            alt={entry.company}
            fill
            className="object-contain"
          />
        </div>
        {/* Main info */}
        <div className="flex-1 min-w-0 ml-4 sm:ml-6 lg:ml-8">
          <div className="flex flex-col">
            <div>
              <div className="text-base sm:text-lg lg:text-lg font-bold text-slate-900">
                {entry.company}
              </div>
              <div className="text-xs sm:text-sm lg:text-sm text-slate-700 font-medium mt-0.5">
                {entry.role}
              </div>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <Badge
                className="bg-black text-white font-medium px-2 py-0.5 rounded-full text-xs sm:text-sm lg:text-sm flex items-center gap-1 shadow-sm"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                <span>{entry.date}</span>
              </Badge>
            </div>
          </div>
        </div>
        {/* Chevron */}
        <button
          className="ml-2 p-2 sm:p-2.5 lg:p-3 rounded-full transition relative group"
          aria-label={openIndex === idx ? "Collapse details" : "Expand details"}
          tabIndex={0}
          onClick={e => { e.stopPropagation(); handleToggle(idx); }}
        >
          <span
            className="absolute inset-0 rounded-full transition
              group-hover:bg-blue-100 group-hover:ring-2 group-hover:ring-blue-300"
            aria-hidden="true"
          />
          <ChevronRight
            className={`relative w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8
              transition-colors duration-300
              ${
                openIndex === idx
                  ? "rotate-90 text-blue-600"
                  : "text-slate-500 group-hover:text-blue-600"
              }`}
          />
        </button>
      </div>
      {/* Dropdown details */}
      <div
        className={`transition-all duration-1000 ease-in-out overflow-hidden
          ${openIndex === idx ? "max-h-[500px] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"}
        `}
      >
        {openIndex === idx && (
          <ExperienceDetails entry={entry} />
        )}
      </div>
    </Card>
  );
}
