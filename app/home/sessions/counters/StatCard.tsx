"use client"
import React, { useState, useEffect } from 'react';

/**
 * Hook to animate numbers counting up
 */
import styles from './StatCard.module.css';

/**
 * Hook to animate numbers counting up
 */
const useCountUp = (end: number, duration = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = currentTime - startTime;
      
      if (progress < duration) {
        const nextCount = Math.min(Math.floor((progress / duration) * end), end);
        setCount(nextCount);
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, duration]);

  return count;
};

interface StatCardProps {
  icon: React.ElementType;
  label: string;
  number: number;
  suffix?: string;
  colorClass: string;
  delay?: number;
}

const getThemeClass = (colorClass: string) => {
  if (colorClass.includes('blue')) return styles.themeBlue;
  if (colorClass.includes('indigo')) return styles.themeIndigo;
  if (colorClass.includes('emerald')) return styles.themeEmerald;
  return styles.themeBlue;
};

const StatCard = ({ icon: Icon, label, number, suffix = "+", colorClass }: StatCardProps) => {
  const count = useCountUp(number, 2000);
  const themeClass = getThemeClass(colorClass);

  return (
    <div className={`${styles.container} ${themeClass}`}>
      {/* Background decoration */}
      <div className={styles.backgroundDecoration} />
      
      <div className={styles.card}>
        <div className={styles.header}>
          <div className={styles.iconWrapper}>
            <Icon className={styles.icon} />
          </div>
        </div>
        
        <div className={styles.numberWrapper}>
          <h3 className={styles.number}>
            {count.toLocaleString()}{suffix}
          </h3>
        </div>
        
        <p className={styles.label}>
          {label}
        </p>

        {/* Decorative line */}
        <div className={styles.decorativeLine} />
      </div>
    </div>
  );
};

export default StatCard;
