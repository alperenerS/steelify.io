import React from 'react';
import SidebarRequestActions from './sidebarRequestActions';
import './sidebarRequestDetails.css';

const SidebarRequestDetails = ({ orderId, projectEngineer, onSave, onDiscard, onPrintQuotation, onUploadPO, onPrintQuality }) => {
  return (
    <div className="order-details">
      <SidebarRequestActions onSave={onSave} onDiscard={onDiscard} position="top" />
      <div className="order-title">
        Sales Order - {orderId}
      </div>
      <div className="order-contact">
        Project Engineer: <span className="project-engineer-name">{projectEngineer || 'Not assigned'}</span>
      </div>
      <SidebarRequestActions 
        onPrintQuotation={onPrintQuotation}
        onUploadPO={onUploadPO}
        onPrintQuality={onPrintQuality}
        position="bottom"
      />
    </div>
  );
};

export default SidebarRequestDetails;
