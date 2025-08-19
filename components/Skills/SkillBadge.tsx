import React from "react";
import { Badge } from "@/components/ui/badge";

// Centralized badge color classes
const badgeColorClasses: Record<string, string> = {
  "Programming Languages":
    "bg-blue-200 text-blue-900 hover:bg-blue-400 hover:text-white",
  "Software Development Tools":
    "bg-indigo-200 text-indigo-900 hover:bg-indigo-400 hover:text-white",
  "Data/ ML/ AI Tools":
    "bg-purple-200 text-purple-900 hover:bg-purple-400 hover:text-white",
  Languages:
    "bg-emerald-200 text-emerald-900 hover:bg-emerald-400 hover:text-white",
};

interface SkillBadgeProps {
  category: string;
  item: string;
}

export function SkillBadge({ category, item }: SkillBadgeProps) {
  return (
    <Badge
      variant="secondary"
      className={`${
        badgeColorClasses[category] ||
        badgeColorClasses["Programming Languages"]
      } transition-colors duration-200 cursor-pointer`}
    >
      {item}
    </Badge>
  );
}
