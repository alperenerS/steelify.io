import React from 'react';
import { Form, DatePicker, Input } from 'antd';

const ShippingNoteAndDeliveryDatePanel = () => {
  return (
    <>
      <p>
        We are currently unable to get rates from our shipping provider. If you would like to proceed with checkout at this time, a member of our support team will contact you to process a shipping charge after you place your order.
      </p>
      <Form.Item label="Delivery Date Range" name="deliveryDateRange">
        <DatePicker.RangePicker style={{ width: "100%" }} format="YYYY-MM-DD" placeholder={["Earliest delivery date", "Latest delivery date"]} />
      </Form.Item>
      <Form.Item label="Special Shipping Instructions" name="specialShippingInstructions">
        <Input.TextArea rows={4} placeholder="Enter any special shipping instructions here such as maximum forklift capacity, shelf dimensions, any required packaging style etc." />
      </Form.Item>
    </>
  );
};

export default ShippingNoteAndDeliveryDatePanel;
