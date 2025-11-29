import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <header className="w-full py-2">
      {/* Centered container for the wordmark */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center">
          <Image
            src="/images/logos/rackets-up-text-logo.png"
            alt="Rackets Up wordmark"
            width={150}
            height={48}
            className="h-10 md:h-12 w-auto object-contain"
            priority={false}
          />
        </div>
      </div>
    </header>
  );
}
