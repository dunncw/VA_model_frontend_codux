import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './EmployeeDetails.module.scss';
import { Card, Button, Grid, Typography, CardContent, CardHeader } from '@mui/material';

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
      <Grid container justifyContent="space-between" alignItems="center" className={styles.header}>
        <Grid item>
          <Button onClick={handleGoBack}>Back</Button>
        </Grid>
        <Grid item>
          <Typography variant="h4" component="h1">{`Employee ${employee.id}: ${employee.name}`}</Typography>
        </Grid>
      </Grid>

      <Grid container spacing={2} className={styles.cardContainer}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader title="Employee Profile" />
            <CardContent>
              <Typography>Name: {employee.name}</Typography>
              <Typography>Department: {employee.department}</Typography>
              <Typography>Job Title: {employee.jobTitle}</Typography>
              <Typography>Address: {employee.address.street}, {employee.address.city}, {employee.address.state} {employee.address.zip}, {employee.address.country}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader title="Risk Score Breakdown" />
            <CardContent>
              {/* Add risk score breakdown chart or table */}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader title="Eligible Resources" />
            <CardContent>
              {/* Add eligible resources list or table */}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader title="Notes and Communication" />
            <CardContent>
              {/* Add notes and communication interface */}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader title="Historical Lookback" />
            <CardContent>
              {/* Add historical lookback chart or table */}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default EmployeeDetails;

