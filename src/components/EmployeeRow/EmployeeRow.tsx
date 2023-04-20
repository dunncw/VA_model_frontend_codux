// src/components/EmployeeRow/EmployeeRow.tsx
import React from 'react';
import {BrowserRouter ,  Link } from 'react-router-dom';
import styles from './EmployeeRow.module.scss';

interface Employee {
  id: number;
  name: string;
  department: string;
  jobTitle: string;
  riskScore: number;
  lastOutreachDate: string;
}

interface EmployeeRowProps {
  employee?: Employee;
}

const EmployeeRow: React.FC<EmployeeRowProps> = ({ employee }) => {
  const defaultEmployee: Employee = {
    id: 0,
    name: 'N/A',
    department: 'N/A',
    jobTitle: 'N/A',
    riskScore: 0,
    lastOutreachDate: 'N/A',
  };

  const displayEmployee = employee || defaultEmployee;

  return (
<div style={{ flexGrow: 1 }}>
  <Link to={`/employee-details/${displayEmployee.id}`}>
    <div className={styles.employeeRow}>
      <div>{displayEmployee.name}</div>
      <div>{displayEmployee.department}</div>
      <div>{displayEmployee.jobTitle}</div>
      <div>{displayEmployee.riskScore}</div>
      <div>{displayEmployee.lastOutreachDate}</div>
    </div>
  </Link>
</div>

  );
};

export default EmployeeRow;
