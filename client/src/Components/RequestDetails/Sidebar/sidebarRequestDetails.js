import React, { useEffect, useState } from 'react';
import SidebarRequestActions from './sidebarRequestActions';
import './sidebarRequestDetails.css';

const SidebarRequestDetails = ({
  orderId,
  projectEngineer,
  onSave,
  onDiscard,
  onPrintQuotation,
  onUploadPO,
  onPrintQuality,
  shippingFormData
}) => {
  const [top, setTop] = useState(270); 

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 250) {
      setTop(16); // Belirli bir noktaya kaydırıldığında üstte sabit kalsın
    } else {
      setTop(250 - scrollTop); // Daha aşağıda iken yavaşça yukarı gelsin
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="order-details-wrapper">
      <div className="order-details" style={{ top: `${top}px` }}>
        <SidebarRequestActions 
          onSave={onSave} 
          onDiscard={onDiscard} 
          position="top" 
          shippingFormData={shippingFormData} 
        />
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
    </div>
  );
};

export default SidebarRequestDetails;
