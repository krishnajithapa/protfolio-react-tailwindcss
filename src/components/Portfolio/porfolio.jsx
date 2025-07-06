import Image from "../../assets/index";
import AnimatedCard from "../animated_card/animated_card";
import Title from "../title/title";

const projects = [
  {
    title: "Chatting App",
    logo: Image.chat,
    description:
      "Built a chat application with Firebase integration for real-time messaging and user management.",
  },
  {
    title: "Enrich Money",
    logo: Image.enrich,
    link: "https://play.google.com/store/apps/details?id=com.malaysiaairlines.enrichprepaidcard&hl=en",
    description:
      "Developed a Visa prepaid card app with features like remittance and points redemption.",
  },
  {
    title: "Merchantrade Money Biz",
    logo: Image.mbiz,
    link: "https://apps.apple.com/us/app/merchantrade-money-biz/id1634182691",
    description:
      "Contributed to a corporate wallet app supporting multiple roles and financial task management.",
  },
  {
    title: "Merchantrade Money",
    logo: Image.mmoney,
    link: "https://play.google.com/store/apps/details?id=com.mtradeasia.mmp&hl=en&pli=1",
    description:
      "Migrated a legacy app to Flutter, enhancing cross-platform compatibility, security, and performance.",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="scroll-mt-[6em]">
      <Title title=" Apps I've worked on" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <AnimatedCard key={index} delay={index * 100}>
            <a
              href={project.link || "#"}
              target={project.link ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="flex flex-col h-full bg-white rounded-2xl shadow-md border border-gray-200 transition-transform transform group-hover:scale-[1.02] group-hover:shadow-lg p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={project.logo}
                    alt={project.title}
                    className="w-14 h-14 rounded-xl object-contain bg-gray-100 border"
                  />
                  <h3 className="text-xl font-semibold text-gray-800">
                    {project.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </a>
          </AnimatedCard>
        ))}
      </div>
    </section>
  );
}
