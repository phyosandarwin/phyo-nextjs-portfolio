'use client';
import { GraduationCap, Heart, Music, Users } from 'lucide-react';

export function AboutList() {
  return (
    <ul className="text-black text-sm leading-snug mb-6 text-center lg:text-left flex flex-col gap-4">
      <li className="flex items-start gap-2">
        <GraduationCap className="w-5 h-5 text-blue-700 mt-0.5 flex-shrink-0" />
        <span>
          Currently working towards my <b>AI specialisation</b> in my final year of computer science studies in NTU.
        </span>
      </li>
      <li className="flex items-start gap-2">
        <Heart className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
        <span>
          Passionate about building <b>technology for social good</b>, assisting the underprivileged and my closest ones even in the smallest ways.
        </span>
      </li>
      <li className="flex items-start gap-2">
        <Music className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
        <span>
          When I am not coding, I am journalling, critiquing films, solo karaoke-ing, or getting inspired by passionate tech advocates during monthly workshops.
        </span>
      </li>
      <li className="flex items-start gap-2">
        <Users className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
        <span>
          Eager to contribute my expertise and build exposure in <b>AI, data science, or software engineering</b> through job opportunities and volunteer projects. Feel free to reach out!
        </span>
      </li>
    </ul>
  );
}
