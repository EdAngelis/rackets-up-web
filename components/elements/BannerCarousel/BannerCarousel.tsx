"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Props = {
  images: string[];
  intervalMs?: number;
  buttons?: boolean;
};

export default function BannerCarousel({
  images,
  intervalMs = 4000,
  buttons = false,
  children,
}: Props & { children?: React.ReactNode }) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<number | null>(null);
  const hoverRef = useRef(false);

  useEffect(() => {
    if (!images || images.length <= 1) return;

    const start = () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
      timerRef.current = window.setInterval(() => {
        if (!hoverRef.current) {
          setIndex((i) => (i + 1) % images.length);
        }
      }, intervalMs);
    };

    start();
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [images, intervalMs]);

  const goTo = (i: number) => setIndex((i + images.length) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  if (!images || images.length === 0) return null;

  return (
    <div
      className="relative w-full h-80 md:h-[420px] lg:h-[520px] overflow-hidden rounded-lg bg-black shadow-lg ring-1 ring-black/10"
      onMouseEnter={() => (hoverRef.current = true)}
      onMouseLeave={() => (hoverRef.current = false)}
      aria-roledescription="carousel"
    >
      <div className="relative w-full h-full">
        {images.map((src, i) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity transition-transform duration-500 ease-in-out pointer-events-none ${
              i === index
                ? "opacity-100 scale-100 z-10 pointer-events-auto shadow-md"
                : "opacity-0 scale-[1.02]"
            }`}
            aria-hidden={i !== index}
          >
            <Image
              src={src}
              alt={`Banner ${i + 1}`}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>
        ))}
      </div>

      {children && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none">
          <div className="pointer-events-auto">{children}</div>
        </div>
      )}

      {buttons && (
        <button
          className="absolute top-1/2 -translate-y-1/2 left-3 z-20 bg-black/45 text-white w-11 h-11 rounded-full flex items-center justify-center text-2xl hover:bg-black/60"
          onClick={prev}
          aria-label="Previous banner"
        >
          ‹
        </button>
      )}
      {buttons && (
        <button
          className="absolute top-1/2 -translate-y-1/2 right-3 z-20 bg-black/45 text-white w-11 h-11 rounded-full flex items-center justify-center text-2xl hover:bg-black/60"
          onClick={next}
          aria-label="Next banner"
        >
          ›
        </button>
      )}

      <div
        className="absolute left-1/2 -translate-x-1/2 bottom-3 flex gap-2 z-30"
        role="tablist"
        aria-label="Banner thumbnails"
      >
        {images.map((_, i) => (
          <button
            key={i}
            className={`w-2.5 h-2.5 rounded-full bg-white/60 p-0 ${
              i === index ? "bg-white scale-110" : ""
            }`}
            onClick={() => goTo(i)}
            aria-label={`Show banner ${i + 1}`}
            aria-pressed={i === index}
          />
        ))}
      </div>
    </div>
  );
}
