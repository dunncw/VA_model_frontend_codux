// src/pages/HomePage.tsx
import React from 'react';
import Dashboard from './Dashboard/Dashboard';
import EmployeeDirectory from './EmployeeDirectory/EmployeeDirectory';
import { Box } from '@mui/material';

const HomePage: React.FC = () => {
  return (
    <div>
      <Dashboard />
      <Box
        sx={{
          backgroundColor: '#f5f5f5',
          width: '100vw',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: '1rem',
          paddingBottom: '2rem',
        }}
      >
        <EmployeeDirectory />
      </Box>
    </div>
  );
};

export default HomePage;