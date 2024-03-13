import React from 'react';
import { Form, Input, Typography } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';

const ShippingAddressPanel = ({ form }) => {
  const checkFieldsCompletion = () => {
    const values = form.getFieldsValue();
    const fields = ['shippingCountry', 'shippingStreet', 'shippingCity', 'shippingProvince', 'shippingZip'];
    return fields.every(field => values[field]);
  };

  return (
    <Form.Item name="shippingAddressPanel">
      <Form layout="vertical" form={form}>
        <Form.Item label="Country" name="shippingCountry" rules={[{ required: true }]}>
          <Input placeholder="Enter your country" />
        </Form.Item>
        <Form.Item label="Street Address" name="shippingStreet" rules={[{ required: true }]}>
          <Input placeholder="Enter your street address" />
        </Form.Item>
        <Form.Item label="City" name="shippingCity" rules={[{ required: true }]}>
          <Input placeholder="Enter your city" />
        </Form.Item>
        <Form.Item label="Province" name="shippingProvince" rules={[{ required: true }]}>
          <Input placeholder="Enter your province" />
        </Form.Item>
        <Form.Item label="Zip Code" name="shippingZip" rules={[{ required: true }]}>
          <Input placeholder="Enter your zip code" />
        </Form.Item>
      </Form>
    </Form.Item>
  );
};

export default ShippingAddressPanel;
