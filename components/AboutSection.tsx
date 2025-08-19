'use client';
import { Greeting } from "./About/Greeting";
import { AboutList } from "./About/AboutList";
import { ProfileImage } from "./About/ProfileImage";
import { ContactIcons } from "./About/ContactIcons";

export function AboutSection() {
  return (
    <section
      id="about"
      className="pt-6 pb-14 px-2 sm:px-4 lg:px-6 flex flex-col items-center"
    >
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex justify-center">
          <Greeting />
        </div>
        <div className="mt-6 flex flex-col lg:flex-row items-center lg:items-center w-full gap-6">
          <div className="flex-1 flex flex-col items-center lg:items-start max-w-2xl">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-2 leading-tight relative inline-block">
              Get to Know Me
              <span
              className="block h-0.5 w-full mt-1 rounded-full"
              style={{
                background:
                "linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)", // from-blue-500 to-purple-600
              }}
              />
            </h3>
            <AboutList />
          </div>
          <div className="flex justify-center items-center lg:justify-end lg:items-center w-full lg:w-auto">
            <ProfileImage />
          </div>
        </div>
        <div className="w-full flex flex-col gap-2 items-center lg:items-start mt-4">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-1 leading-tight relative inline-block">
            Connect with Me
            <span
              className="block h-0.5 w-full mt-1 rounded-full"
              style={{
              background:
                "linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)", // from-blue-500 to-purple-600
              }}
            />
            </h3>
          <ContactIcons />
        </div>
      </div>
    </section>
  );
}