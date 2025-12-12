"use client";
import React from 'react';
import Image from 'next/image';
import styles from './BasicSession.module.css';

const BasicSession = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contentWrapper}>
        
        {/* Header Section */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            Bring your game into the new era
          </h2>
          <span className={styles.subtitle}>leave the analog behind, generate data from your match.</span>
        </div>

        {/* Content Card */}
        <div className={styles.card}>
          
          {/* Text Column (Left) */}
          <div className={styles.textColumn}>
            <p className={styles.description}>
              Score in Real time, get statistics and measure your performance every match.
            </p>
          </div>

          {/* Image Column (Right) */}
          <div className={styles.imageColumn}>
            <div className={styles.imageWrapper}>
              <Image 
                src="/images/tablet-statistics.png" 
                alt="Tablet displaying match statistics" 
                width={600} 
                height={400} 
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default BasicSession;
