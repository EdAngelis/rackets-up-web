import React from "react";
import Image from "next/image";

/**
 * PlayStoreButton
 * A styled button linking to the Google Play store app page.
 */
const PlayStoreButton: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  const href = "https://play.google.com/store/apps/details?id=com.racketsUpApp";

  return (
    <a
      className={`inline-flex items-center w-full max-w-[220px] gap-2 no-underline text-white bg-black border border-white/12 px-2 py-1.5 rounded-md text-sm transition-all duration-120 ease-out hover:-translate-y-px hover:shadow-lg shadow-2xl ${className}`}
      style={{ filter: "drop-shadow(0 12px 28px rgba(0,0,0,0.85))" }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Get it on Google Play"
    >
      <span
        className="w-5 h-5 inline-flex items-center justify-center text-[#34a853]"
        aria-hidden
      >
        <Image
          src="/images/playstore-svgrepo-com.svg"
          alt=""
          width={18}
          height={18}
        />
      </span>
      <span className="flex flex-col leading-tight">
        <span className="text-xs opacity-80">Get it on</span>
        <span className="text-sm font-semibold">Google Play</span>
      </span>
    </a>
  );
};

export default PlayStoreButton;
