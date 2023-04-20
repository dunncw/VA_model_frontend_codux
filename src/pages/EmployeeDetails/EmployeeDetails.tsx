import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './EmployeeDetails.module.scss';
import { Card, Button } from '@mui/material';

interface Employee {
  id: number;
  name: string;
  email: string;
  department: string;
  jobTitle: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  }
}


type RouteParams = {
  id: string;
};

const EmployeeDetails: React.FC = () => {
  const [employee, setEmployee] = useState<Employee | null>(null);
  const { id } = useParams<RouteParams>();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      // Replace this dummy data with a real API call to fetch the employee details
      const fetchedEmployee: Employee = {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      department: 'Human Resources',
      jobTitle: 'HR Specialist',
      address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        zip: '12345',
        country: 'USA'}
      };

      setEmployee(fetchedEmployee);
    }
  }, [id]);

  const handleGoBack = () => {
    navigate(-1);
  };

  if (!employee) {
    return <div className={styles.employeeDetails}>Employee not found.</div>;
  }

  return (
    <div className={styles.employeeDetails}>
      <div className={styles.header}>
  <div>
    <Button onClick={handleGoBack}>Back</Button>
  </div>
  <div>
    <h1>{`Employee ${employee.id}: ${employee.name}`}</h1>
  </div>
  <div></div>
</div>
      <div className={styles.cardContainer}>
      <Card className={styles.card}>
        <h2 className={styles.cardHeader}>Employee Profile</h2>
        <p>Name: {employee.name}</p>
        <p>Department: {employee.department}</p>
        <p>Job Title: {employee.jobTitle}</p>
        <p>Address: {employee.address.street}, {employee.address.city}, {employee.address.state} {employee.address.zip}, {employee.address.country}</p>
      </Card>

        <Card className={styles.card} title="Risk Score Breakdown">
          {/* Add risk score breakdown chart or table */}
        </Card>
        <Card className={styles.card} title="Eligible Resources">
          {/* Add eligible resources list or table */}
        </Card>
        <Card className={styles.card} title="Notes and Communication">
          {/* Add notes and communication interface */}
        </Card>
        <Card className={styles.card} title="Historical Lookback">
          {/* Add historical lookback chart or table */}
        </Card>
      </div>
    </div>
  );
};

export default EmployeeDetails;

