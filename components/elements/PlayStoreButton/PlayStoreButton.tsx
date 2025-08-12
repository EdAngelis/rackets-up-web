import React from "react";
import Image from "next/image";
import styles from "./PlayStoreButton.module.css";

/**
 * PlayStoreButton
 * A styled button linking to the Google Play store app page.
 */
const PlayStoreButton: React.FC = () => {
  const href = "https://play.google.com/store/apps/details?id=com.racketsUpApp";

  return (
    <a
      className={styles.playStoreButton}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Get it on Google Play"
    >
      <span className={styles.icon} aria-hidden>
        <Image
          src="/images/playstore-svgrepo-com.svg"
          alt=""
          width={30}
          height={30}
        />
      </span>
      <span className={styles.textBlock}>
        <span className={styles.kicker}>Get it on</span>
        <span className={styles.brand}>Google Play</span>
      </span>
    </a>
  );
};

export default PlayStoreButton;
