import React from 'react';
import styles from './Navbar.module.scss';

const Navbar: React.FC = () => {
  return (
    <div className={styles.navbar}>
      {<p>Navbar</p>}
    </div>
  );
};

export default Navbar;
