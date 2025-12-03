import React from "react";
import Image from "next/image";
import styles from "../StoreButton/StoreButton.module.css";

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
      className={`${styles.storeButton} ${className}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Get it on Google Play"
    >
      <span className={styles.iconWrapper} aria-hidden>
        <Image
          src="/images/playstore-svgrepo-com.svg"
          alt=""
          fill
          style={{ objectFit: "contain" }}
        />
      </span>
      <span className={styles.textWrapper}>
        <span className={styles.smallText}>Get it on</span>
        <span className={styles.mainText}>Google Play</span>
      </span>
    </a>
  );
};

export default PlayStoreButton;
