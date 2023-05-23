import React from 'react';
import SummaryCard from '../../components/SummaryCard/SummaryCard';
import Chart from '../../components/Chart/Chart';
import styles from './Dashboard.module.scss';
import { Grid, Typography, Container, Card, CardContent, CardHeader } from '@mui/material';

const Dashboard: React.FC = () => {
  // Replace these dummy values with real data fetched from your backend
  const totalEmployees = 140;
  const employeesAtRisk = 36;
  const resourcesAllocated = 75;

  const dummyData = [
    { date: '01-01', populationAtRisk: 20 },
    { date: '01-02', populationAtRisk: 22 },
    { date: '01-03', populationAtRisk: 25 },
    // Add more data points
  ];

  return (
    <Container maxWidth="lg" className={styles.dashboard}>
      <Typography variant="h4" component="h1" className={styles.title}>
        Dashboard
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Grid container spacing={2} direction="column" className={styles.summaryCards}  >
            <Grid item>
              <SummaryCard title="Total Employees" value={totalEmployees} />
            </Grid>
            <Grid item>
              <SummaryCard title="Employees at Risk" value={employeesAtRisk} />
            </Grid>
            <Grid item>
              <SummaryCard title="Resources Allocated" value={resourcesAllocated} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={8} className={styles.charts}>
          <Chart
            title="Population at Risk Over Time"
            data={dummyData}
            dataKeys={['populationAtRisk']}
            colors={['#8884d8']}
          />
          {/* Add more charts if needed */}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;