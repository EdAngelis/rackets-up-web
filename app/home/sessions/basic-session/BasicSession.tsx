"use client";
import React from 'react';
import Image from 'next/image';
import styles from './BasicSession.module.css';

interface BasicSessionProps {
  title: string;
  subTitle: string;
  description: string;
  image: string;
}

const BasicSession = ({ title, subTitle, description, image }: BasicSessionProps) => {
  return (
    <section className={styles.container}>
      <div className={styles.contentWrapper}>
        
        {/* Header Section */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            {title}
          </h2>
          <span className={styles.subtitle}>{subTitle}</span>
        </div>

        {/* Content Card */}
        <div className={styles.card}>
          
          {/* Text Column (Left) */}
          <div className={styles.textColumn}>
            <p className={styles.description}>
              {description.split('|').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index < description.split('|').length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
          </div>

          {/* Image Column (Right) */}
          <div className={styles.imageColumn}>
            <div className={styles.imageWrapper}>
              <Image 
                src={image}
                alt={title}
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
