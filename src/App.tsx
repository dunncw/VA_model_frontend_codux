// src/App.tsx
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage';
import EmployeeDetails from './pages/EmployeeDetails/EmployeeDetails';
import EmployeeDirectory from './pages/EmployeeDirectory/EmployeeDirectory'; // Import the EmployeeDirectory component
import ProfilePage from './pages/ProfilePage/ProfilePage';
import SettingsPage from './pages/SettingsPage/SettingsPage';
import styles from './App.module.scss';

const App: React.FC = () => {
  console.log(Routes); // log the Routes object to the console
  return (
    <Router basename="/">
      <div className={styles.app}>
        <Navbar />
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/employee-details/:id" element={<EmployeeDetails />} />
            <Route path="/employee-directory" element={<EmployeeDirectory />} /> // Add a new Route component for the EmployeeDirectory component
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;