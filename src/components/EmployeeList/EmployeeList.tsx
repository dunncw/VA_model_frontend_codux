// src/components/EmployeeList/EmployeeList.tsx
import React from 'react';
import EmployeeRow from '../EmployeeRow/EmployeeRow';
import styles from './EmployeeList.module.scss';

interface Employee {
  id: number;
  name: string;
  department: string;
  jobTitle: string;
  riskScore: number;
  lastOutreachDate: string;
}

interface EmployeeListProps {
  employees: Employee[];
}

const EmployeeList: React.FC<EmployeeListProps> = ({ employees }) => {
  return (
    <div className={styles.employeeList}>
      {/* Add the header row directly in EmployeeList component */}
      <div className={styles.headerRow}>
        <div>Name</div>
        <div>Department</div>
        <div>Job Title</div>
        <div>Risk Score</div>
        <div>Last Outreach Date</div>
      </div>
      {employees.map((employee) => (
        <EmployeeRow key={employee.id} employee={employee} />
      ))}
    </div>
  );
};

export default EmployeeList;


