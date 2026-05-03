"use client";
import styles from './CategoryCards.module.css';

export default function CategoryCards({ categories }) {
  return (
    <div className={styles.grid}>
      {categories.map((cat, i) => (
        <div key={i} className={styles.card}>
          
          <div className={styles.iconWrapper}>
            <span style={{ fontSize: '28px' }}>{cat.icon}</span>
          </div>
          
          <div className={styles.content}>
            <h3 className={styles.name}>{cat.name}</h3>
            <p className={styles.desc}>{cat.desc}</p>
          </div>
          
          <div className={styles.arrow}>
            <span>→</span>
          </div>
          
        </div>
      ))}
    </div>
  );
}