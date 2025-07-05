import React from "react";

function About() {
  return (
    <div
      id="about"
      className="p-[1em]  w-dvw bg-green-50 flex flex-col-reverse sm:flex-row items-center justify-evenly
      "
    >
      <div className="text-center">
        <h1 className="font-bold text-4xl my-6">Flutter Developer</h1>
        <p className="block sm:w-[60vw] text-justify">
          Accomplished Flutter Developer with 3 years of experience in building
          and managing cross-platform mobile applications for Android and iOS.
          Proficient in Dart, state management tools, and integrating
          third-party APIs. Skilled in CI/CD pipelines, app store deployment,
          and delivering seamless user experiences. Proven ability to lead
          teams, mentor developers, and deliver high-quality software on time.{" "}
        </p>
        <div className="block mt-6 sm:w-[60vw] text-justify">
          <h3 className="text-xl font-semibold mb-2 text-center ">
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
          className="border-8 rounded-[100%] h-50 w-50 border-primary"
          src="src/assets/profile.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default About;
