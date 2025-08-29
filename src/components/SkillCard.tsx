import { ReactNode } from "react";

type Props = {
  name: string;
  icon?: ReactNode;
  level?: "beginner" | "intermediate" | "advanced" | "expert";
};

export default function SkillCard({ name, icon, level = "intermediate" }: Props) {
  const levelText: Record<NonNullable<Props["level"]>, string> = {
    beginner: "Beginner",
    intermediate: "Intermediate",
    advanced: "Advanced",
    expert: "Expert",
  };

  return (
    <div className="card p-4 text-center hover:shadow-lg transition duration-300 flex flex-col items-center rounded-xl">
      {/* Icon */}
      {icon && <div className="text-4xl mb-2">{icon}</div>}

      {/* Name */}
      <p className="font-medium text-gray-900 dark:text-gray-100">{name}</p>

      {/* Level */}
      <p className="text-xs text-gray-600 dark:text-gray-400">{levelText[level]}</p>
    </div>
  );
}
