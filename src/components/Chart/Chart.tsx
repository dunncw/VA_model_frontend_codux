// src/components/Chart/Chart.tsx
import React from 'react';
import styles from './Chart.module.scss';

interface ChartProps {
  title: string;
}

const Chart: React.FC<ChartProps> = ({ title }) => {
  return (
    <div className={styles.chart}>
      <div className={styles.title}>{title}</div>
      <div className={styles.dummyChart} style={{ width: '100%', height: '200px', backgroundColor: '#e0e0e0' }}>
        {/* Add your chart implementation here */}
      </div>
    </div>
  );
};

export default Chart;
