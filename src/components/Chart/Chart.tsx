// src/components/Chart/Chart.tsx
import React, { PureComponent } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import styles from './Chart.module.scss';

interface ChartProps {
  title: string;
  data: any[];
  dataKeys: string[];
  colors?: string[];
}

const formatDateAxisTicks = (tick: number) => {
  const date = new Date(tick);
  // return date in mm-dd-yy format
  return `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear() % 100}`;
};

class Chart extends PureComponent<ChartProps> {
  render() {
    const { title, dataKeys, colors } = this.props;

    const defaultColors = ['#8884d8', '#82ca9d'];

    const dummyData = [
      { date: new Date(2023, 0, 1).getTime(), population: 100, atRisk: 38 },
      { date: new Date(2023, 1, 1).getTime(), population: 110, atRisk: 35 },
      { date: new Date(2023, 2, 1).getTime(), population: 120, atRisk: 32 },
      { date: new Date(2023, 3, 1).getTime(), population: 130, atRisk: 36 },
      { date: new Date(2023, 4, 1).getTime(), population: 140, atRisk: 36 },
    ];

    return (
      <div className={styles.chart}>
        <div className={styles.title}>{title}</div>
        <div className={styles.dummyChart} style={{ width: '100%', height: '300px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={dummyData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" tickFormatter={formatDateAxisTicks} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="population" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="atRisk" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
}

export default Chart;
