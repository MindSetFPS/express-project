// Dashboard.tsx
import React from 'react';
import LeftBar from './LeftBar';
import MainContent from './MainContent';

const Dashboard: React.FC = () => {
  return (
    <div>
      <LeftBar />
      <MainContent />
    </div>
  );
};

export default Dashboard;