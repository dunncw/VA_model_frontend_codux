import React from 'react';
import SummaryCard from '../../components/SummaryCard/SummaryCard';
import Chart from '../../components/Chart/Chart';
import styles from './Dashboard.module.scss';

const Dashboard: React.FC = () => {
  // Replace these dummy values with real data fetched from your backend
  const totalEmployees = 100;
  const employeesAtRisk = 25;
  const resourcesAllocated = 75;

  return (
    <div className={styles.dashboard}>
      <h1>Dashboard</h1>
      <div className={styles.summaryCards}>
        <SummaryCard title="Total Employees" value={totalEmployees} />
        <SummaryCard title="Employees at Risk" value={employeesAtRisk} />
        <SummaryCard title="Resources Allocated" value={resourcesAllocated} />
      </div>
      <div className={styles.charts}>
        <Chart title="Risk Score Distribution" />
        {/* Add more charts if needed */}
      </div>
    </div>
  );
};

export default Dashboard;
