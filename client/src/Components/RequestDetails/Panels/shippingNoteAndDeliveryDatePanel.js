import React from "react";
import { Form, DatePicker, Input } from "antd";

const ShippingNoteAndDeliveryDatePanel = ({ initialValues }) => {
  return (
    <>
      <p>
        We are currently unable to get rates from our shipping provider. If you
        would like to proceed with checkout at this time, a member of our
        support team will contact you to process a shipping charge after you
        place your order.
      </p>
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
          defaultValue={initialValues.incoterm}
        />
      </Form.Item>
    </>
  );
};

export default ShippingNoteAndDeliveryDatePanel;
