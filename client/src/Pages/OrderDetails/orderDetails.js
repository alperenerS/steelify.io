import React, { useState, useEffect } from "react";
import { Row, Col, Collapse, Form, Typography, DatePicker, Input } from "antd";
import { CheckCircleOutlined } from '@ant-design/icons';
import "./orderDetails.css";
import { useForm } from "antd/lib/form/Form";
import ShippingAddressPanel from "./Panels/shippingAddressPanel";
import ShippingNoteAndDeliveryDatePanel from "./Panels/shippingNoteAndDeliveryDatePanel";
import CustomsInformationPanel from "./Panels/customsInformationPanel";

const { Panel } = Collapse;
const { Paragraph, Title } = Typography;

const OrderDetails = () => {
  const [activeKeys, setActiveKeys] = useState([]);
  const [form] = useForm();
  // Panel anahtarlarını "1", "2", "3" olarak güncellendi
  const [panelCompleted, setPanelCompleted] = useState({ "1": false, "2": false, "3": false });

  const checkPanelCompletion = () => {
    // Panel anahtarları ve gerekli alanlar güncellendi
    const requiredFieldsByPanel = {
      "1": ['shippingCountry', 'shippingStreet', 'shippingCity', 'shippingProvince', 'shippingZip'],
      "3": ['deliveryDateRange', 'specialShippingInstructions'], // Shipping Note & Delivery Date paneli için güncellenmiş alanlar
      "5": ['productName', 'purposeOfUse', 'hsCode'], // Customs Information paneli için güncellenmiş alanlar
    };

    const allValues = form.getFieldsValue(true);

    Object.keys(requiredFieldsByPanel).forEach(panelKey => {
      const fields = requiredFieldsByPanel[panelKey];
      const isCompleted = fields.every(field => {
        // RangePicker için kontrol
        if (field === "deliveryDateRange") {
          return allValues[field] && allValues[field].length === 2;
        }
        return allValues[field];
      });
      setPanelCompleted(prev => ({ ...prev, [panelKey]: isCompleted }));
    });
  };

  useEffect(() => {
    // Form alanları değiştiğinde veya aktif panel değiştiğinde panel tamamlanma durumlarını kontrol eder
    form.validateFields().then(() => {
      checkPanelCompletion();
    });
  }, [activeKeys, form]); // activeKeys ve form değiştiğinde kontrol et

  const renderPanelHeader = (title, key) => (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      {title}
      {panelCompleted[key] && <CheckCircleOutlined style={{ color: 'green', fontSize: '16px' }} />}
    </div>
  );

  return (
    <Row>
      <Col span={16} offset={4}>
        <Col span={24} style={{ marginBottom: "20px" }}>
          <Title level={4}>Quotation Request Received</Title>
          <Paragraph>
            We received your quotation request! <strong>Please fill extra information below</strong> to get a
            quotation with delivery options. Otherwise, we will send you a
            quotation for only manufacturing with estimated production time.
          </Paragraph>
        </Col>
        <Form form={form} layout="vertical" onFieldsChange={() => checkPanelCompletion()}>
          <Collapse activeKey={activeKeys} onChange={setActiveKeys}>
            <Panel header={renderPanelHeader("Shipping Address", "1")} key="1" className={panelCompleted["1"] ? "panel-completed" : ""}>
              <ShippingAddressPanel form={form} />
            </Panel>
            <Panel header={renderPanelHeader("Shipping Note & Delivery Date", "2")} key="2" className={panelCompleted["3"] ? "panel-completed" : ""}>
              <ShippingNoteAndDeliveryDatePanel form={form} />
            </Panel>
            <Panel header={renderPanelHeader("Customs Information", "3")} key="3" className={panelCompleted["5"] ? "panel-completed" : ""}>
              <CustomsInformationPanel form={form} />
            </Panel>
          </Collapse>
        </Form>
      </Col>
    </Row>
  );
};

export default OrderDetails;
