// src/components/sidebar/sidebarRequestDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './sidebarRequestDetails.css';

const SidebarRequestDetails = () => {
  const { order_id } = useParams();

  return (
    <div className="order-details">
      <div className="order-title">
        Sales Order - {order_id}
      </div>
      <div className="order-contact">
        Your Project Engineer
      </div>
    </div>
  );
};

export default SidebarRequestDetails;
