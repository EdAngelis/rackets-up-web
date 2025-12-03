import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail, MdPhone } from "react-icons/md";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Brand / Logo Area */}
        <div className={styles.brandSection}>
          <h2 className={styles.brandTitle}>Rackets Up</h2>
          <p className={styles.brandTagline}>
            Let's build it together.
          </p>
        </div>

        {/* Contact Info */}
        <div className={styles.contactSection}>
          <h3 className={styles.sectionTitle}>Contact Us</h3>
          <a
            href="mailto:contact@rivertech.com"
            className={styles.contactLink}
          >
            <MdEmail className={styles.icon} />
            <span>contact@rivertech.com</span>
          </a>
          <a
            href="tel:+5511948589951"
            className={styles.contactLink}
          >
            <MdPhone className={styles.icon} />
            <span>+55 (11) 9 4858-9951</span>
          </a>
        </div>

        {/* Social Media */}
        <div className={styles.socialSection}>
          <h3 className={styles.sectionTitle}>Follow Us</h3>
          <div className={styles.socialLinks}>
            <a
              href="#"
              aria-label="Instagram"
              className={styles.socialIcon}
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className={styles.socialIcon}
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className={styles.socialIcon}
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="#"
              aria-label="X"
              className={styles.socialIcon}
            >
              <FaXTwitter size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        &copy; {new Date().getFullYear()} River Tech. All rights reserved.
      </div>
    </footer>
  );
}
