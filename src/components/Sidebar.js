import React from 'react';
import VideoKYC from './VideoKYC';
import PendingPayment from './PendingPayment';
import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <VideoKYC />
      <PendingPayment />
    </aside>
  );
}

export default Sidebar;