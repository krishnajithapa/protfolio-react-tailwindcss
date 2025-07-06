import React from "react";
import Title from "../title/title";

export default function SkillsGrid() {
  const skills = [
    "Flutter",
    "Dart",
    "Provider",
    "MobX",
    "Riverpod",
    "Stacked",
    "BLoC",
    "Firebase",
    "Fastlane",
    "CodeMagic",
    "GitHub",
    "GitLab",
    "Unit Testing",
    "Integration Testing",
    "Performance Optimization",
    "CI/CD Pipelines",
    "Agile Methodologies",
    "App Store Deployment",
    "Documentation",
    "Leadership",
  ];

  const colors = [
    "bg-blue-400",
    "bg-green-400",
    "bg-purple-400",
    "bg-pink-400",
    "bg-yellow-400",
    "bg-red-400",
    "bg-indigo-400",
  ];

  return (
    <div id="skills" className="scroll-mt-[6rem]">
      <Title title="My Skills" />
      <div className="flex flex-wrap gap-3 pt-6">
        {skills.map((skill, idx) => {
          const colorClass = colors[idx % colors.length];
          return (
            <div
              key={skill}
              className={`${colorClass} text-white px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap animate-bounce`}
              style={{
                animationDelay: `${idx * 0.15}s`,
                animationDuration: "1.5s",
                animationIterationCount: "infinite",
              }}
            >
              {skill}
            </div>
          );
        })}
      </div>
    </div>
  );
}
