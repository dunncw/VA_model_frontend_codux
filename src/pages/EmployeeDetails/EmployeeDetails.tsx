import React, { useState, useEffect, PureComponent } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './EmployeeDetails.module.scss';
import { Card, Button, Grid, Typography, CardContent, CardHeader } from '@mui/material';
import Chart from '../../components/Chart/Chart_2';
import RadarChart from '../../components/RadarChart/RadarChart';
import Chart_2 from '../../components/Chart/Chart_2';

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

  const radarChartData = [
    { subject: 'Financial Problems', score: 65, fullMark: 100 },
    { subject: 'Substance Problems', score: 75, fullMark: 100 },
    { subject: 'Legal Problems', score: 85, fullMark: 100 },
    { subject: 'Relationship Issues', score: 95, fullMark: 100 },
    { subject: 'Lack of Connectedness', score: 50, fullMark: 100 },
  ];

  const dummyData = [
    { date: new Date(2023, 0, 1).getTime(), population: 100, atRisk: 38 },
    { date: new Date(2023, 1, 1).getTime(), population: 110, atRisk: 35 },
    { date: new Date(2023, 2, 1).getTime(), population: 120, atRisk: 32 },
    { date: new Date(2023, 3, 1).getTime(), population: 130, atRisk: 36 },
    { date: new Date(2023, 4, 1).getTime(), population: 140, atRisk: 36 },
  ];

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
          <Button onClick={handleGoBack} >Back</Button>
        </Grid>
        <Grid item>
          <Typography variant="h4" component="h1">{`Employee ${employee.id}: ${employee.name}`}</Typography>
        </Grid>
        <Grid item />
      </Grid>
  
      <Grid container spacing={2} className={styles.cardContainer}>
        <Grid item xs={12} md={4}>
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
        <Grid item xs={12} md={8}>
          <Card>
            <CardHeader title="Risk Score Breakdown" />
            <CardContent>
              {/* i want to add a number right blew and centered from the radar chart that is the agregate risk score */}
              {/* center the text  */}
              <Typography>Aggregate Risk Score: <b>7.5</b></Typography>
              <RadarChart data={radarChartData} />

            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={12}>
          <Card>
            <CardHeader title="Historical Lookback" />
            <CardContent>
              {/* place a dummy image here */}
              <Chart_2 
                title=""
                data={dummyData}
                dataKeys={['populationAtRisk']}
                colors={['#8884d8']}
              />
              <Typography>Legend</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader title="Eligible Resources" />
            <CardContent>
              <Typography>Resource 1</Typography>
              <Typography>Resource 2</Typography>
              <Typography>Resource 3</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader title="Notes and Communication" />
            <CardContent>
              <Typography>Notes 1</Typography>
              <Typography>Notes 2</Typography>
              <Typography>Notes 3</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default EmployeeDetails;

