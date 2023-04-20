// src/pages/EmployeeDirectory/EmployeeDirectory.tsx
import React, { useState, useEffect } from 'react';
import EmployeeList from '../../components/EmployeeList/EmployeeList';
import styles from './EmployeeDirectory.module.scss';

interface Employee {
  id: number;
  name: string;
  department: string;
  jobTitle: string;
  riskScore: number;
  lastOutreachDate: string;
}

const EmployeeDirectory: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    // Replace this dummy data with a real API call to fetch the employee list
    const fetchedEmployees: Employee[] = [
      {
        id: 1,
        name: 'John Doe',
        department: 'Engineering',
        jobTitle: 'Software Engineer',
        riskScore: 75,
        lastOutreachDate: '2023-03-10',
      },
      {
        id: 2,
        name: 'Jane Smith',
        department: 'Marketing',
        jobTitle: 'Marketing Manager',
        riskScore: 60,
        lastOutreachDate: '2023-02-15',
      },
      // Add more employees as needed
    ];

    setEmployees(fetchedEmployees);
  }, []);

  return (
    <div className={styles.employeeDirectory}>
      <h1>Employee Directory</h1>
      <EmployeeList employees={employees} />
    </div>
  );
};

export default EmployeeDirectory;

