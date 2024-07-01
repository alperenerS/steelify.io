import React from "react";
import { Form, DatePicker, Input } from "antd";

const ShippingNoteAndDeliveryDatePanel = ({ initialValues }) => {
  return (
    <>
      <Form.Item label="Delivery Date" name="deliveryDate">
        <DatePicker
          style={{ width: "100%" }}
          format="DD-MM-YYYY"
          placeholder="Select delivery date"
        />
      </Form.Item>
      <Form.Item
        label="Special Shipping Instructions"
        name="incoterm_description"
      >
        <Input.TextArea
          rows={4}
          placeholder="Enter any special shipping instructions here such as maximum forklift capacity, shelf dimensions, any required packaging style etc."
          initialValues={initialValues.incoterm}
        />
      </Form.Item>
    </>
  );
};

export default ShippingNoteAndDeliveryDatePanel;
