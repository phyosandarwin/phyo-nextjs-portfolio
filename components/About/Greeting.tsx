'use client';

export function Greeting() {
  return (
    <div className="text-center max-w-2xl mb-4 group">
      <h1 className="text-5xl sm:text-4xl font-extrabold text-black mb-1 leading-tight">
        Hello, I am{" "}
        <span className="relative inline-block whitespace-nowrap">
          <span className="bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 bg-clip-text text-transparent">
            Phyo Sandar Win
          </span>
        </span>
      </h1>
      <p className="text-xl sm:text-lg font-semibold text-gray-900 leading-tight">
        Final Year CS Undergraduate.
      </p>
    </div>
  );
}
