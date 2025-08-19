import React from "react";
import { SkillCard } from "./SkillCard";
import type { Skill } from "../../app/data/skills";

interface SkillsGridProps {
  skills: Skill[];
}

export function SkillsGrid({ skills }: SkillsGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {skills.map((skill) => (
        <SkillCard key={skill.title} skill={skill} />
      ))}
    </div>
  );
}
