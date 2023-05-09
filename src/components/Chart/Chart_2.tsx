// src/components/Chart/Chart_2.tsx
import React, { PureComponent } from 'react';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from 'recharts';
import styles from './Chart.module.scss';

interface ChartProps {
  title: string;
  data: any[];
  dataKeys: string[];
  colors?: string[];
}

class Chart_2 extends PureComponent<ChartProps> {
  render() {
    const { title, dataKeys, colors } = this.props;

    const defaultColors = ['#8884d8', '#82ca9d'];

    const dummyData = [
      { date: "1-23",  aggregateRiskScore: 4.2, contactsAttempted: 3, successfulContacts: 3, selfReportedHappiness: 7.8 },
      { date: "2-23",  aggregateRiskScore: 4.5, contactsAttempted: 2, successfulContacts: 2, selfReportedHappiness: 7.5 },
      { date: "3-23",  aggregateRiskScore: 5.4, contactsAttempted: 4, successfulContacts: 3, selfReportedHappiness: 6.8 },
      { date: "4-23",  aggregateRiskScore: 6.8, contactsAttempted: 6, successfulContacts: 4, selfReportedHappiness: 6.5 },
      { date: "5-23",  aggregateRiskScore: 7.5, contactsAttempted: 7, successfulContacts: 2, selfReportedHappiness: 4 },
    ];

    return (
      <div className={styles.chart}>
        <div className={styles.title}>{title}</div>
        <div className={styles.dummyChart} style={{ width: '100%', height: '300px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={dummyData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="aggregateRiskScore" fill="#8884d8" stroke="#8884d8" />
              <Bar dataKey="contactsAttempted" barSize={20} fill="#413ea0" />
              <Scatter dataKey="successfulContacts" fill="red" />
              <Line type="monotone" dataKey="selfReportedHappiness" stroke="#ff7300" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
}

export default Chart_2;
