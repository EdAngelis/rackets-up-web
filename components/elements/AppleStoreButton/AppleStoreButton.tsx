import React from "react";

import Image from "next/image";

/**
 * AppleStoreButton
 * An Apple App Store-themed button linking to the provided TestFlight URL.
 */
const AppleStoreButton: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  const href = "https://apps.apple.com/br/app/rackets-up/id6749012815?l=en-GB";

  return (
    <a
      className={`inline-flex items-center w-full max-w-[220px] gap-2 no-underline text-white bg-black border border-white/15 px-2 py-1.5 rounded-md text-sm transition-all duration-120 ease-out hover:-translate-y-px hover:shadow-lg shadow-2xl ${className}`}
      style={{ filter: "drop-shadow(0 12px 28px rgba(0,0,0,0.85))" }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download on the App Store (TestFlight)"
    >
      <span
        className="w-5 h-5 inline-flex items-center justify-center text-white"
        aria-hidden
      >
        {/* Apple logo image */}
        <Image
          src="/images/apple-logo.png"
          alt=""
          width={18}
          height={18}
          aria-hidden
        />
      </span>
      <span className="flex flex-col leading-tight">
        <span className="text-xs opacity-80">Download on</span>
        <span className="text-sm font-semibold">App Store</span>
      </span>
    </a>
  );
};

export default AppleStoreButton;
