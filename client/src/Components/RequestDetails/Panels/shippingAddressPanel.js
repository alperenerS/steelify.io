import React from "react";
import { Form, Input } from "antd";

const ShippingAddressPanel = ({ form }) => {
  return (
    <>
      <Form.Item label="Country" name="shippingCountry">
        <Input placeholder="Enter your country" />
      </Form.Item>
      <Form.Item label="Street Address" name="shippingStreet">
        <Input placeholder="Enter your street address" />
      </Form.Item>
      <Form.Item label="Street Address 2" name="shippingStreet2">
        <Input placeholder="Enter your secondary street address" />
      </Form.Item>
      <Form.Item label="City" name="shippingCity">
        <Input placeholder="Enter your city" />
      </Form.Item>
      <Form.Item label="Province" name="shippingProvince">
        <Input placeholder="Enter your province" />
      </Form.Item>
      <Form.Item label="Zip Code" name="shippingZip">
        <Input placeholder="Enter your zip code" />
      </Form.Item>
    </>
  );
};

export default ShippingAddressPanel;
