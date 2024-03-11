import React from 'react';
import { List, Modal } from 'antd';

const termsAndConditionsPopup = ({ isVisible, onClose }) => {
  const agreementDetails = [
    "You must agree to the terms and conditions.",
    "Your account will be suspended if involved in malicious activities.",
    "Your personal data will be kept confidential.",
    "You must not share sensitive information with others.",
    "You agree to receive periodic updates from us."
  ];

  return (
    <Modal 
      title={<div style={{ width: '100%', textAlign: 'center' }}>User Agreement</div>} 
      visible={isVisible} 
      onCancel={onClose} 
      onOk={onClose} 
      footer={null}
    >
      <List
        size="small"
        bordered
        dataSource={agreementDetails}
        renderItem={(item, index) => <List.Item>{`${index + 1}. ${item}`}</List.Item>}
      />
    </Modal>
  );
};

export default termsAndConditionsPopup;
