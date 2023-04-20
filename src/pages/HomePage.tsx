// src/pages/HomePage.tsx
import React from 'react';
import Dashboard from './Dashboard/Dashboard';
import EmployeeDirectory from './EmployeeDirectory/EmployeeDirectory';

const HomePage: React.FC = () => {
  return (
    <div>
      <Dashboard />
      <EmployeeDirectory />
    </div>
  );
};

export default HomePage;