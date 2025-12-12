
import React from "react";
import Image from "next/image";
import styles from "./ImageSection.module.css";

export type TextPosition = "Top" | "Bottom" | "Left" | "Right";

interface ImageSectionProps {
  image: string;
  title: string;
  subTitle: string;
  textPosition: TextPosition;
}

export default function ImageSection({
  image,
  title,
  subTitle,
  textPosition,
}: ImageSectionProps) {
  const overlayClass = styles[textPosition.toLowerCase()];

  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.imageContainer}>
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: "cover" }}

        />
        <div className={`${styles.textOverlay} ${overlayClass}`}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subTitle}>{subTitle}</p>
        </div>
      </div>
    </section>
  );
}
