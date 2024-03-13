import React from 'react';
import { Form, Input } from 'antd';

const CustomsInformationPanel = () => {
  return (
    <>
      <Form.Item
        label="Product Name"
        name="productName"
      >
        <Input placeholder="Enter product name" />
      </Form.Item>
      <Form.Item
        label="Purpose of Use"
        name="purposeOfUse"
      >
        <Input.TextArea rows={2} placeholder="Describe the purpose of use" />
      </Form.Item>
      <Form.Item
        label="HS Code"
        name="hsCode"
      >
        <Input placeholder="Enter HS Code" />
      </Form.Item>
    </>
  );
};

export default CustomsInformationPanel;
