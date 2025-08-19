import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Code, Wrench, Brain, Languages } from "lucide-react";
import { SkillBadge } from "./SkillBadge";
import type { Skill } from "../../app/data/skills";

// Centralized map for icons and colors
const skillMeta: Record<
  string,
  { icon: React.ReactNode; color: string }
> = {
  "Programming Languages": {
    icon: <Code className="inline-block mr-2 h-5 w-5 text-blue-700" />,
    color: "#1e40af",
  },
  "Software Development Tools": {
    icon: <Wrench className="inline-block mr-2 h-5 w-5 text-indigo-700" />,
    color: "#3730a3",
  },
  "Data/ ML/ AI Tools": {
    icon: <Brain className="inline-block mr-2 h-5 w-5 text-purple-700" />,
    color: "#6d28d9",
  },
  Languages: {
    icon: <Languages className="inline-block mr-2 h-5 w-5 text-emerald-700" />,
    color: "#047857",
  },
};

interface SkillCardProps {
  skill: Skill;
}

export function SkillCard({ skill }: SkillCardProps) {
  const meta = skillMeta[skill.title] || {};
  return (
    <Card className="bg-white border border-blue-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      <CardHeader>
        <CardTitle
          className="flex items-center"
          style={{ color: meta.color }}
        >
          {meta.icon || null}
          {skill.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-2">
        {skill.items.map((item) => (
          <SkillBadge key={item} category={skill.title} item={item} />
        ))}
      </CardContent>
    </Card>
  );
}
