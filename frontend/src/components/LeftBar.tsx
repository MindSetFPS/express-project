// LeftBar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const LeftBar: React.FC = () => {
  return (
    <div style={styles.sidebar}>
      <h3 style={styles.title}>Dashboard</h3>
      <nav>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <Link to="/dashboard/home" style={styles.navLink}>Home</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/dashboard/profile" style={styles.navLink}>Profile</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/dashboard/settings" style={styles.navLink}>Settings</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default LeftBar;