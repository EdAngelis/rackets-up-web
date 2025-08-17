import React from "react";
import styles from "./AppleStoreButton.module.css";
import Image from "next/image";

/**
 * AppleStoreButton
 * An Apple App Store-themed button linking to the provided TestFlight URL.
 */
const AppleStoreButton: React.FC = () => {
  const href = "https://apps.apple.com/br/app/rackets-up/id6749012815?l=en-GB";

  return (
    <a
      className={styles.appleStoreButton}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download on the App Store (TestFlight)"
    >
      <span className={styles.icon} aria-hidden>
        {/* Apple logo image */}
        <Image
          src="/images/apple-logo.png"
          alt=""
          width={35}
          height={35}
          aria-hidden
        />
      </span>
      <span className={styles.textBlock}>
        <span className={styles.kicker}>Download on the</span>
        <span className={styles.brand}>App Store</span>
      </span>
    </a>
  );
};

export default AppleStoreButton;
