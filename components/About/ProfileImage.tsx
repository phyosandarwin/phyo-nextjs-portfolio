'use client';
import Image from "next/image";

export function ProfileImage() {
  return (
    <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-2 border-gray-300 shadow-md flex-shrink-0 mb-6 lg:mb-0 lg:ml-10 self-center lg:self-auto">
      <Image
        src="/logos/profile.png"
        alt="Phyo profile picture"
        width={200}
        height={200}
        className="object-cover w-full h-full"
      />
    </div>
  );
}