import React from 'react';
import './sidebar.css';
import SidebarRequestDetails from '../../../Components/Sidebar/sidebarRequestDetails';
import SidebarUserContact from '../../../Components/Sidebar/sidebarUserContact';

const Sidebar = ({ order_id, projectEngineer }) => {
  return (
    <div className="sidebar">
      <SidebarRequestDetails orderId={order_id} projectEngineer={projectEngineer} />
      <SidebarUserContact />
    </div>
  );
};

export default Sidebar;
