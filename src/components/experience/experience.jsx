import Title from "../title/title";

// Experience data: List of companies, roles, and responsibilities
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

// RoleItem: Renders a single role with title, duration, and bullet points
const RoleItem = ({ title, duration, points }) => (
  <div>
    <h4 className="text-lg font-semibold text-gray-700">
      {title} <span className="text-sm text-gray-500">| {duration}</span>
    </h4>
    <ul className="list-disc list-inside mt-2 text-gray-600 space-y-1">
      {points.map((point, idx) => (
        <li key={idx}>{point}</li>
      ))}
    </ul>
  </div>
);

// ExperienceItem: Renders a company and its roles
const ExperienceItem = ({ company, roles }) => (
  <div>
    <h3 className="text-xl font-bold text-gray-800">{company}</h3>
    <div className="mt-2 space-y-6">
      {roles.map((role, idx) => (
        <RoleItem key={idx} {...role} />
      ))}
    </div>
  </div>
);

// Experience: Main component rendering all experiences
const Experience = () => (
  <div id="experience" className="space-y-8 scroll-mt-24 pt-6">
    <Title title="Project Experience" />
    {experiences.map((exp, idx) => (
      <ExperienceItem key={exp.company} {...exp} />
    ))}
  </div>
);

export default Experience;
