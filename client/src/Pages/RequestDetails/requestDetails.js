import React, { useState } from "react";
import { Row, Col, Collapse, Form, Typography } from "antd";
import { useForm } from "antd/lib/form/Form";
import ShippingAddressPanel from "../../Components/RequestDetails/Panels/shippingAddressPanel";
import ShippingNoteAndDeliveryDatePanel from "../../Components/RequestDetails/Panels/shippingNoteAndDeliveryDatePanel";
import CustomsInformationPanel from "../../Components/RequestDetails/Panels/customsInformationPanel";
import SaveButton from "../../Components/RequestDetails/saveButton";
import "./requestDetails.css";

const { Panel } = Collapse;
const { Paragraph, Title } = Typography;

const RequestDetails = () => {
  const [form] = useForm();
  const [activeKey, setActiveKey] = useState(["1"]);
  const [formValues, setFormValues] = useState({});

  const handleFormChange = (_, allValues) => {
    setFormValues(allValues);
  };

  return (
    <Row>
      <Col span={16} offset={4}>
        <Col span={24} style={{ marginBottom: "20px" }}>
          <div style={{ textAlign: "center" }}>
            <Title level={4}>We received your request!</Title>
          </div>
          <Paragraph>
            <strong>Please fill extra information below</strong> to get a quotation with delivery options. Otherwise, we will send you a quotation for only manufacturing with estimated production time.
          </Paragraph>
        </Col>
        <Form form={form} layout="vertical" onValuesChange={handleFormChange}>
          <Collapse activeKey={activeKey} onChange={(key) => setActiveKey(key)}>
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
