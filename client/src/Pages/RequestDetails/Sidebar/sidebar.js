// src/shared/sidebar/sidebar.js
import React from 'react';
import './sidebar.css';
import SidebarRequestDetails from '../../../Components/Sidebar/sidebarRequestDetails';
import SidebarUserContact from '../../../Components/Sidebar/sidebarUserContact';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarRequestDetails />
      <SidebarUserContact />
    </div>
  );
};

export default Sidebar;
