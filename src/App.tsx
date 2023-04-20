// src/App.tsx
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage';
import EmployeeDetails from './pages/EmployeeDetails/EmployeeDetails';
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
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
