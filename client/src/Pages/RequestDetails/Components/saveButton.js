import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const SaveButton = () => {
  const navigate = useNavigate();

  const handleSave = () => {
    navigate('/my-orders');
  };

  return (
    <Button type="primary" onClick={handleSave}>
      Save
    </Button>
  );
};

export default SaveButton;
