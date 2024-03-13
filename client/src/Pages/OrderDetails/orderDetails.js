import React, { useState } from "react";
import { Row, Col, Collapse, Form, Typography } from "antd";
import "./orderDetails.css";
import { useForm } from "antd/lib/form/Form";
import ShippingAddressPanel from "./Components/Panels/shippingAddressPanel";
import ShippingNoteAndDeliveryDatePanel from "./Components/Panels/shippingNoteAndDeliveryDatePanel";
import CustomsInformationPanel from "./Components/Panels/customsInformationPanel";
import SaveButton from "./Components/saveButton";

const { Panel } = Collapse;
const { Paragraph, Title } = Typography;

const OrderDetails = () => {
  const [form] = useForm();
  const [activeKey, setActiveKey] = useState("1");
  const [panelCompletionStatus, setPanelCompletionStatus] = useState({
    1: false,
    3: false,
    5: false,
  });

  // This function is called whenever form values change
  const onFormValuesChange = (_, allValues) => {
    const panelsInfo = {
      1: [
        "shippingCountry",
        "shippingStreet",
        "shippingCity",
        "shippingProvince",
        "shippingZip",
      ],
      3: ["deliveryDateRange", "specialShippingInstructions"],
      5: ["productName", "purposeOfUse", "hsCode"],
    };

    const newPanelCompletionStatus = {};

    Object.keys(panelsInfo).forEach((panelKey) => {
      const fields = panelsInfo[panelKey];
      const isPanelComplete = fields.every((field) => !!allValues[field]);
      newPanelCompletionStatus[panelKey] = isPanelComplete;
    });

    setPanelCompletionStatus(newPanelCompletionStatus);
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
        <Form form={form} layout="vertical" onValuesChange={onFormValuesChange}>
          <Collapse activeKey={activeKey} onChange={(key) => setActiveKey(key)}>
            <Panel
              header="Shipping Address"
              key="1"
              className={panelCompletionStatus["1"] ? "panel-completed" : ""}
            >
              <ShippingAddressPanel form={form} />
            </Panel>
            <Panel
              header="Shipping Note & Delivery Date"
              key="3"
              className={panelCompletionStatus["3"] ? "panel-completed" : ""}
            >
              <ShippingNoteAndDeliveryDatePanel form={form} />
            </Panel>
            <Panel
              header="Information Required for Customs"
              key="5"
              className={panelCompletionStatus["5"] ? "panel-completed" : ""}
            >
              <CustomsInformationPanel form={form} />
            </Panel>
          </Collapse>
          <Col span={24} style={{ marginTop: "20px" }}>
            <SaveButton />
          </Col>
        </Form>
      </Col>
    </Row>
  );
};

export default OrderDetails;
