"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./BannerCarousel.module.css";

type Props = {
  images: string[];
  intervalMs?: number;
};

export default function BannerCarousel({ images, intervalMs = 4000 }: Props) {
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
      className={styles.carousel}
      onMouseEnter={() => (hoverRef.current = true)}
      onMouseLeave={() => (hoverRef.current = false)}
      aria-roledescription="carousel"
    >
      <div className={styles.slides}>
        {images.map((src, i) => (
          <div
            key={src}
            className={`${styles.slide} ${i === index ? styles.active : ""}`}
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

      <button
        className={`${styles.nav} ${styles.prev}`}
        onClick={prev}
        aria-label="Previous banner"
      >
        ‹
      </button>
      <button
        className={`${styles.nav} ${styles.next}`}
        onClick={next}
        aria-label="Next banner"
      >
        ›
      </button>

      <div
        className={styles.dots}
        role="tablist"
        aria-label="Banner thumbnails"
      >
        {images.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === index ? styles.dotActive : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Show banner ${i + 1}`}
            aria-pressed={i === index}
          />
        ))}
      </div>
    </div>
  );
}
