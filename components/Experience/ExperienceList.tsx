"use client";
import { useState } from "react";
import { experienceData } from "@/app/data/experience";
import { ExperienceCard } from "./ExperienceCard";

export function ExperienceList() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-5 sm:space-y-6">
      {experienceData.map((entry, idx) => (
        <ExperienceCard
          key={idx}
          entry={entry}
          idx={idx}
          openIndex={openIndex}
          handleToggle={handleToggle}
        />
      ))}
    </div>
  );
}
