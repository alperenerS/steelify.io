import React, { useState } from "react";
import { Row, Col, Collapse, Form, Typography, Image } from "antd";
import "./requestDetails.css";
import { useForm } from "antd/lib/form/Form";
import ShippingAddressPanel from "./Components/Panels/shippingAddressPanel";
import ShippingNoteAndDeliveryDatePanel from "./Components/Panels/shippingNoteAndDeliveryDatePanel";
import CustomsInformationPanel from "./Components/Panels/customsInformationPanel";
import QualityDocumentsPanel from "./Components/Panels/qualityDocumentsPanel";
import TransfersPanel from "./Components/Panels/transferPanel"; // TransfersPanel import edilir.
import SaveButton from "./Components/saveButton";

const { Panel } = Collapse;
const { Paragraph, Title } = Typography;

const RequestDetails = () => {
  const [form] = useForm();
  const [activeKey, setActiveKey] = useState(["1"]);
  const [formValues, setFormValues] = useState({});

  const qualityDocuments = [
    {
      name: 'Quality Document 1',
      url: 'https://example.com/doc1.jpg',
      date: '2024-04-01'
    },
    {
      name: 'Quality Document 2',
      url: 'https://example.com/doc2.jpg',
      date: '2024-04-02'
    }
  ];

  const handleFormChange = (_, allValues) => {
    setFormValues(allValues);
  };

  return (
    <Row>
      <Col span={16} offset={4}>
        <Col span={24} style={{ marginBottom: "20px" }}>
          <div style={{ textAlign: "center" }}>
            <Title level={4}>We received your quotation!</Title>
            <Image
              width={600}
              src="https://yenastorage.blob.core.windows.net/steelify/Steelify - Order - S00003.jpeg"
              alt="Order Image"
              style={{
                marginTop: '1rem',
                marginBottom: '2rem'
              }}
            />
          </div>
          <Paragraph>
            <strong>Please fill extra information below</strong> to get a quotation with delivery options. Otherwise, we will send you a quotation for only manufacturing with estimated production time.
          </Paragraph>
        </Col>
        <Form form={form} layout="vertical" onValuesChange={handleFormChange}>
          <Collapse activeKey={activeKey} onChange={(key) => setActiveKey(key)}>
            <Panel header="Quality Documents" key="7">
              <QualityDocumentsPanel photos={qualityDocuments} />
            </Panel>
            <Panel header="Transfers" key="8">
              <TransfersPanel />
            </Panel>
            <Panel header="Shipping Address" key="1">
              <ShippingAddressPanel form={form} />
            </Panel>
            <Panel header="Shipping Note & Delivery Date" key="3">
              <ShippingNoteAndDeliveryDatePanel form={form} />
            </Panel>
            <Panel header="Information Required for Customs" key="5">
              <CustomsInformationPanel form={form} />
            </Panel>
          </Collapse>
          <Col span={24} style={{ marginTop: "20px" }}>
            <SaveButton shippingFormData={formValues} />
          </Col>
        </Form>
      </Col>
    </Row>
  );
};

export default RequestDetails;
