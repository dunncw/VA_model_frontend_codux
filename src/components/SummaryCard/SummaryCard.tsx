import React from 'react';
import styles from './SummaryCard.module.scss';

interface SummaryCardProps {
  title: string;
  value: number;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ title, value }) => {
  return (
    <div className={styles.summaryCard}>
      <div className={styles.title}>{title}</div>
      <div className={styles.value}>{value}</div>
    </div>
  );
};

export default SummaryCard;