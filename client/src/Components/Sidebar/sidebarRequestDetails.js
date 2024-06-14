import React from 'react';
import './sidebarRequestDetails.css';

const SidebarRequestDetails = ({ orderId, projectEngineer }) => {
  return (
    <div className="order-details">
      <div className="order-title">
        Sales Order - {orderId}
      </div>
      <div className="order-contact">
        Project Engineer: <span className="project-engineer-name">{projectEngineer || 'Not assigned'}</span>
      </div>
    </div>
  );
};

export default SidebarRequestDetails;
