import React, { useState } from "react";
import {
  Card,
  Form,
  Input,
  Row,
  Col,
  Collapse,
  DatePicker,
  Select,
  Radio,
  Checkbox,
  Button,
  Divider,
  Typography,
} from "antd";
import {
  MinusOutlined,
  PlusOutlined,
  CreditCardOutlined,
} from "@ant-design/icons";
import "./orderDetails.css";
import { useForm } from "antd/lib/form/Form";

const { Panel } = Collapse;
const { Option } = Select;
const { Paragraph, Title } = Typography;

const OrderDetails = () => {
  const [activeKeys, setActiveKeys] = useState([]);
  const [form] = useForm();
  const [useShipping, setUseShipping] = useState(false);

  const togglePanel = (key) => {
    const isActive = activeKeys.includes(key);
    setActiveKeys(
      isActive
        ? activeKeys.filter((activeKey) => activeKey !== key)
        : [...activeKeys, key]
    );
  };
  const onUseShippingChange = (e) => {
    setUseShipping(e.target.checked);
    if (e.target.checked) {
      form.setFieldsValue({
        billingCountry: form.getFieldValue("shippingCountry"),
        billingStreet: form.getFieldValue("shippingStreet"),
        billingCity: form.getFieldValue("shippingCity"),
        billingProvince: form.getFieldValue("shippingProvince"),
        billingZip: form.getFieldValue("shippingZip"),
      });
    }
  };
  return (
    <Row>
      <Col span={16} offset={4}>
        <Col span={24} style={{ marginBottom: "20px" }}>
          <Title level={4}>Quotation Request Received</Title>
          <Paragraph>
            We received your quotation request!{" "}
            <strong>Please fill extra information below</strong> to get a
            quotation with delivery options. Otherwise, we will send you a
            quotation for only manufacturing with estimated production time.
          </Paragraph>
        </Col>
        <Collapse activeKey={activeKeys} onChange={setActiveKeys}>
          <Panel header="Shipping Address" key="1">
            <Typography.Paragraph type="warning" style={{ marginTop: "10px" }}>
              Warning: Products will be delivered to the specified address. The
              unloading of the products belongs to the buyer.
            </Typography.Paragraph>
            <Form layout="vertical">
              <Form.Item label="Country" name="shippingCountry">
                <Input placeholder="Enter your country" />
              </Form.Item>
              <Form.Item label="Street Address" name="shippingStreet">
                <Input placeholder="Enter your street address" />
                <Input
                  placeholder="Additional address information"
                  style={{ marginTop: "10px" }}
                />
              </Form.Item>
              <Form.Item label="City" name="shippingCity">
                <Input placeholder="Enter your city" />
              </Form.Item>
              <Form.Item label="Province" name="shippingProvince">
                <Input placeholder="Enter your province" />
              </Form.Item>
              <Form.Item label="Zip Code">
                <Input placeholder="Enter your zip code" />
              </Form.Item>
            </Form>
          </Panel>

          <Panel header="Shipping Note & Delivery Date" key="3">
            <Form layout="vertical">
              <p>
                We are currently unable to get rates from our shipping provider.
                If you would like to proceed with checkout at this time, a
                member of our support team will contact you to process a
                shipping charge after you place your order.
              </p>
              <Form.Item label="Delivery Date Range">
                <DatePicker.RangePicker
                  style={{ width: "100%" }}
                  format="YYYY-MM-DD"
                  placeholder={[
                    "Earliest delivery date",
                    "Latest delivery date",
                  ]}
                />
              </Form.Item>
              <Form.Item label="Special Shipping Instructions">
                <Input.TextArea
                  rows={4}
                  placeholder="Enter any special shipping instructions here such as maximum forklift capacity, shelf dimensions, any required packaging style etc."
                />
              </Form.Item>
            </Form>
          </Panel>

          <Panel header="Information Required for Customs" key="5">
            <Form layout="vertical">
              <Form.Item label="Product Name" name="productName">
                <Input placeholder="Enter product name" />
              </Form.Item>

              <Form.Item label="Purpose of Use" name="purposeOfUse">
                <Input.TextArea
                  rows={2}
                  placeholder="Describe the purpose of use"
                />
              </Form.Item>

              <Form.Item label="HS Code" name="hsCode">
                <Input placeholder="Enter HS Code" />
              </Form.Item>
            </Form>
          </Panel>
        </Collapse>
      </Col>
    </Row>
  );
};

export default OrderDetails;
