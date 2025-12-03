import React from "react";
import Image from "next/image";
import styles from "../StoreButton/StoreButton.module.css";

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
      className={`${styles.storeButton} ${className}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download on the App Store (TestFlight)"
    >
      <span className={styles.iconWrapper} aria-hidden>
        <Image
          src="/images/apple-logo.png"
          alt=""
          fill
          style={{ objectFit: "contain" }}
        />
      </span>
      <span className={styles.textWrapper}>
        <span className={styles.smallText}>Download on</span>
        <span className={styles.mainText}>App Store</span>
      </span>
    </a>
  );
};

export default AppleStoreButton;
