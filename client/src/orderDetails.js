import React, { useState } from 'react';
import { Card, Form, Input, Row, Col, Collapse, DatePicker, Select, Radio, Checkbox, Button, Divider } from 'antd';
import { MinusOutlined, PlusOutlined, CreditCardOutlined } from '@ant-design/icons';
import './orderDetails.css';
import { useForm } from 'antd/lib/form/Form';

const { Panel } = Collapse;
const { Option } = Select;

const OrderDetails = () => {
  const [activeKeys, setActiveKeys] = useState([]);
  const [form] = useForm();
  const [useShipping, setUseShipping] = useState(false);

  const togglePanel = (key) => {
    const isActive = activeKeys.includes(key);
    setActiveKeys(isActive ? activeKeys.filter(activeKey => activeKey !== key) : [...activeKeys, key]);
  };
  const onUseShippingChange = (e) => {
    setUseShipping(e.target.checked);
    if (e.target.checked) {
      // Kullanıcı "Use Shipping Address" seçeneğini işaretlediğinde,
      // "Shipping Address" bölümünden alınan verilerle "Billing Address" bölümünü doldur.
      form.setFieldsValue({
        billingCountry: form.getFieldValue('shippingCountry'),
        billingStreet: form.getFieldValue('shippingStreet'),
        billingCity: form.getFieldValue('shippingCity'),
        billingProvince: form.getFieldValue('shippingProvince'),
        billingZip: form.getFieldValue('shippingZip'),
      });
    }
  };
  return (
    <Row>
      <Col span={16} offset={4}>
        <Collapse activeKey={activeKeys} onChange={setActiveKeys}>
          <Panel header="Shipping Address" key="1">
            <Form layout="vertical">
              <Form.Item label="Country" name="shippingCountry">
                <Input placeholder="Enter your country" />
              </Form.Item>      
              <Form.Item label="Street Address" name="shippingStreet">
                <Input placeholder="Enter your street address" />
                <Input placeholder="Additional address information" style={{ marginTop: '10px' }} />
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

          <Panel header="ITAR/EAR Confirmation" key="2">
            <Form layout="vertical">
              <Form.Item label="ITAR/EAR Compliance">
                <Checkbox>Confirm ITAR/EAR compliance</Checkbox>
              </Form.Item>
            </Form>
          </Panel>

          <Panel header="Shipping Method and Delivery Date" key="3">
  <Form layout="vertical">
  <p>We are currently unable to get rates from our shipping provider. If you would like to proceed with checkout at this time, a member of our support team will contact you to process a shipping charge after you place your order.</p>
    <Form.Item label="Special Shipping Instructions">
      <Input.TextArea rows={4} placeholder="Enter any special shipping instructions here" />
    </Form.Item>
  </Form>
</Panel>



<Panel header="Information Required for Customs" key="5">
  <p>Because your parts may be shipped internationally, please provide the following information to reduce the risk of delay at customs during importing.</p>

  <Form layout="vertical">
    <Form.Item label="Industry" style={{ marginBottom: '20px' }}>
      <Select placeholder="Select your industry" style={{ width: '100%' }}>
        {["Machinery", "Chemicals", "Consumer Goods", "Semi-permanent Warehouses", "Construction", "Facade", "Offshore", "Moving Equipments", "Industrial Group (Automation Machinery Manufacturing)", "Heavy Equipments", "Non-residential Construction", "Chemical Products", "Flood Protection", "Various Parts Supply", "Greenhouse", "Manufacturer (Structural Steel)", "Temporary Buildings"]
          .sort()
          .map(industry => (
            <Select.Option key={industry} value={industry}>{industry}</Select.Option>
          ))}
      </Select>
    </Form.Item>

    <p>Describe each part and its intended use. Please be as descriptive and detailed as possible.</p>
    
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
      <img src="path/to/your/image.jpg" alt="Uploaded" style={{ width: '50px', height: '50px', marginRight: '20px' }} />
      <div style={{ flex: 1 }}>
        <p>UploadedFileName.jpg</p>
        <Input placeholder="pump for medical device to measure blood pressure" style={{ width: '100%' }} />
      </div>
    </div>
  </Form>
</Panel>



<Panel header="Payment Information" key="6">
  <Form layout="vertical">
    <h3>Payment Method</h3>
    <Form.Item name="paymentMethod">
      <Radio.Group>
        <Radio value="purchaseOrder" disabled>Purchase Order</Radio>
        <Radio value="existingCard" disabled>Existing Card</Radio>
        <Radio value="newCard">New Card</Radio>
      </Radio.Group>
    </Form.Item>

    { /* Card Details */ }
    <Form.Item label="Card Details" style={{ display: 'flex', alignItems: 'center' }}>
  <Input.Group compact       className="custom-input">
    <Input
      className="custom-input"
      prefix={<CreditCardOutlined />}
      placeholder="Credit Card Number"
      style={{ width: '40%' }}
    />
    <Input
      className="custom-input"
      placeholder="MM/YY"
      style={{ width: '30%', borderLeft: 'none' }}
    />
    <Input
      className="custom-input"
      placeholder="CVC"
      style={{ width: '20%', borderLeft: 'none' }}
    />
  </Input.Group>
</Form.Item>




<h3>Billing Address</h3>
      <Form.Item>
        <Checkbox checked={useShipping} onChange={onUseShippingChange}>
          Use Shipping Address
        </Checkbox>
      </Form.Item>
      <Form.Item label="Country" name="billingCountry">
        <Input placeholder="Enter your country" disabled={useShipping} />
      </Form.Item>
      <Form.Item label="Street Address" name="billingStreet">
        <Input placeholder="Enter your street address" disabled={useShipping} />
      </Form.Item>
      <Form.Item label="City" name="billingCity">
        <Input placeholder="Enter your city" disabled={useShipping} />
      </Form.Item>
      <Form.Item label="Province" name="billingProvince">
        <Input placeholder="Enter your province" disabled={useShipping} />
      </Form.Item>
      <Form.Item label="Zip Code" name="billingZip">
        <Input placeholder="Enter your zip code" disabled={useShipping} />
      </Form.Item>
    </Form>
</Panel>


          {/* <Panel header="Review" key="6">
            <div>
              <p>Review your information...</p>
            </div>
          </Panel> */}
        </Collapse>
      </Col>
    </Row>
  );
};

export default OrderDetails;
