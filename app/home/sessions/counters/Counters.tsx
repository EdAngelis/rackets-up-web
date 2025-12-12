"use client"
import React from 'react';
import { Users, Shield, Award, ArrowRight } from 'lucide-react';
import StatCard from './StatCard';

import styles from './Counters.module.css';

const Counters = () => {
  return (
    <section className={styles.section}>
      {/* Abstract Background Shapes */}
      <div className={styles.backgroundWrapper}>
        <div className={styles.blobBlue} />
        <div className={styles.blobPurple} />
      </div>

      <div className={styles.contentContainer}>

        {/* Stats Grid */}
        <div className={styles.grid}>
          
          {/* Users Stat */}
          <StatCard 
            icon={Users}
            number={15400} 
            label="Players"
            colorClass="from-blue-500 to-cyan-500"
          />

          {/* Clubs Stat */}
          <StatCard 
            icon={Shield}
            number={125} 
            label="Clubs"
            colorClass="from-indigo-500 to-purple-500"
          />

          {/* Coaches Stat */}
          <StatCard 
            icon={Award}
            number={850} 
            label="Coaches"
            colorClass="from-emerald-500 to-teal-500"
          />

        </div>

      </div>
    </section>
  );
};

export default Counters;
