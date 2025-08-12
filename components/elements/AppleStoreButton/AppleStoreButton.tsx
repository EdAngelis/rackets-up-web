import React from "react";
import styles from "./AppleStoreButton.module.css";

/**
 * AppleStoreButton
 * An Apple App Store-themed button linking to the provided TestFlight URL.
 */
const AppleStoreButton: React.FC = () => {
  const href = "https://testflight.apple.com/join/gjkUxSXt";

  return (
    <a
      className={styles.appleStoreButton}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download on the App Store (TestFlight)"
    >
      <span className={styles.icon} aria-hidden>
        {/* Apple logo */}
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.365 1.43c0 1.14-.465 2.207-1.23 3.012-.79.83-2.085 1.46-3.18 1.37-.11-1.09.48-2.236 1.23-3.01.81-.825 2.2-1.418 3.18-1.372zM20.4 17.138c-.59 1.353-.88 1.957-1.65 3.157-1.07 1.64-2.583 3.68-4.46 3.7-1.007.02-1.69-.29-2.665-.29-.976 0-1.71.28-2.71.31-1.924.06-3.39-1.776-4.465-3.41-2.435-3.66-2.684-7.957-1.18-10.25 1.07-1.648 2.76-2.614 4.36-2.614 1.628 0 2.65.89 4 .89 1.32 0 2.12-.89 4-.89 1.43 0 2.94.78 4.01 2.13-3.52 1.93-2.95 6.93.76 8.057-.24.61-.51 1.17-.95 1.99z" />
        </svg>
      </span>
      <span className={styles.textBlock}>
        <span className={styles.kicker}>Download on the</span>
        <span className={styles.brand}>App Store</span>
      </span>
    </a>
  );
};

export default AppleStoreButton;
