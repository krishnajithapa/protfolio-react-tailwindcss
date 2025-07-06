/**
 * About Component
 * Renders a section describing the developer's background, skills, and interests,
 * including a profile image and responsive layout using Tailwind CSS.
 */

import Image from "../../assets/index";

function About() {
  return (
    <div
      id="about"
      className="scroll-mt-32 flex flex-col-reverse sm:flex-row items-center justify-evenly h-[80vh]"
    >
      <div className="text-center">
        <h1 className="font-bold text-4xl my-6">Flutter Developer</h1>
        <p className="sm:w-[60vw] text-justify mx-auto">
          Accomplished Flutter Developer with 3 years of experience in building
          and managing cross-platform mobile applications for Android and iOS.
          Proficient in Dart, state management tools, and integrating
          third-party APIs. Skilled in CI/CD pipelines, app store deployment,
          and delivering seamless user experiences. Proven ability to lead
          teams, mentor developers, and deliver high-quality software on time.
        </p>
        <div className="mt-6 sm:w-[60vw] text-justify mx-auto">
          <h3 className="text-xl font-semibold mb-2 text-center">
            Outside of Work
          </h3>
          <p>
            I enjoy hiking, singing, and exploring new places to eat. I also
            cook occasionally with Gordon Ramsay Energy.
          </p>
        </div>
      </div>
      <div>
        <img
          className="border-8 rounded-full h-[30vh] sm:h-[60vh] aspect-square border-primary object-cover"
          src={Image.profile}
          alt="Profile"
        />
      </div>
    </div>
  );
}

export default About;
