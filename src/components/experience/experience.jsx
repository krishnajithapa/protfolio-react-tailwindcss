import React from "react";
import Title from "../title/title";

const experiences = [
  {
    company: "Vanilla Tech – Durbar Marg",
    roles: [
      {
        title: "Flutter Developer",
        duration: "October 2023 – January 2025",
        points: [
          "Designed and developed cross-platform mobile apps for Android and iOS using Flutter.",
          "Implemented state management techniques to improve performance and maintainability.",
          "Integrated third-party APIs and Firebase services (Crashlytics, Remote Config, Google Analytics).",
          "Automated app distribution with CI/CD tools like Fastlane and CodeMagic.",
          "Published and maintained apps on Google Play Store and Apple App Store, ensuring compliance with platform guidelines.",
          "Mentored junior developers, conducted code reviews, and promoted coding best practices.",
        ],
      },
      {
        title: "Junior Flutter Developer",
        duration: "August 2022 – October 2023",
        points: [
          "Developed responsive mobile interfaces and implemented new features for existing apps.",
          "Integrated REST APIs and Firebase functionalities (push notifications, Google Maps).",
          "Automated deployment processes using CI/CD tools, improving release efficiency.",
        ],
      },
    ],
  },
  {
    company: "EKbana Solutions – Lalitpur",
    roles: [
      {
        title: "Flutter Developer Intern",
        duration: "April 2022 – July 2022",
        points: [
          "Developed an eCommerce app with intuitive UI and integrated backend REST APIs.",
          "Utilized Firebase Cloud Messaging for reliable push notifications.",
          "Optimized app performance using MobX for state management.",
        ],
      },
    ],
  },
];

const Experience = () => {
  return (
    <div id="experience" className="space-y-8 scroll-mt-[6em] pt-6">
      <Title title="Project Experience" />
      {experiences.map((exp, idx) => (
        <div key={idx}>
          <h3 className="text-xl font-bold text-gray-800">{exp.company}</h3>
          <div className="mt-2 space-y-6">
            {exp.roles.map((role, i) => (
              <div key={i}>
                <h4 className="text-lg font-semibold text-gray-700">
                  {role.title}{" "}
                  <span className="text-sm text-gray-500">
                    | {role.duration}
                  </span>
                </h4>
                <ul className="list-disc list-inside mt-2 text-gray-600 space-y-1">
                  {role.points.map((point, j) => (
                    <li key={j}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
