// src/components/sidebar/sidebarRequestDetails.js
import React from 'react';
import './sidebarRequestDetails.css';

const SidebarRequestDetails = () => {
  return (
    <div className="order-details">
      <div className="order-title">
        Sales Order - S00008
      </div>
      <div className="order-subtitle">
        Communication history
      </div>
      <div className="order-contact">
        Your contact
      </div>
    </div>
  );
};

export default SidebarRequestDetails;
