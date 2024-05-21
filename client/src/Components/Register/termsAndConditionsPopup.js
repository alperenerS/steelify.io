import React, { useState, useEffect } from 'react';
import { List, Modal, Button, Checkbox } from 'antd';

const TermsAndConditionsPopup = ({ isVisible, onClose, onAgree, initialChecked }) => {
  const [isChecked, setIsChecked] = useState(initialChecked);

  useEffect(() => {
    setIsChecked(initialChecked);
  }, [initialChecked]);

  const handleAgree = () => {
    if (isChecked) {
      onAgree(true);
      onClose();
    } else {
      alert('You must agree to the terms and conditions before proceeding.');
    }
  };
  
  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const agreementDetails = [
    "You must agree to these terms and conditions to use our services.",
    "Engaging in any form of malicious activities such as unauthorized access or data breaches will result in account suspension.",
    "Your personal data will be processed in accordance with our Privacy Policy and will be kept confidential.",
    "You must not share your account credentials or other sensitive information with unauthorized parties.",
    "You agree to receive periodic updates from us via email. You can opt-out of these communications at any time through your account settings."
  ];

  return (
    <Modal 
      title={<div style={{ width: '100%', textAlign: 'center' }}>User Agreement</div>} 
      visible={isVisible} 
      onCancel={onClose} 
      footer={[
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Checkbox checked={isChecked} onChange={toggleCheckbox} key="agreeCheckbox">
              <span style={{ marginLeft: 8 }}>I agree to the terms and conditions.</span> {/* Metin ve checkbox hizalaması */}
            </Checkbox>
          </div>
          <div>
            <Button key="submit" type="primary" onClick={handleAgree}>
              Agree and Continue
            </Button>
            <Button key="cancel" onClick={onClose} style={{ marginLeft: '10px' }}>
              Cancel
            </Button>
          </div>
        </div>
      ]}
    >
      <List
        size="small"
        bordered
        dataSource={agreementDetails}
        renderItem={(item, index) => <List.Item key={index}>{`${index + 1}. ${item}`}</List.Item>}
      />
    </Modal>
  );
};

export default TermsAndConditionsPopup;
