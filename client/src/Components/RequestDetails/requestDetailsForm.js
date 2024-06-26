import React, { useState, useEffect } from "react";
import { Row, Col, Collapse, Form, Typography, Button, Spin } from "antd";
import { useForm } from "antd/lib/form/Form";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";
import ShippingAddressPanel from "./Panels/shippingAddressPanel";
import ShippingNoteAndDeliveryDatePanel from "./Panels/shippingNoteAndDeliveryDatePanel";
import CustomsInformationPanel from "./Panels/customsInformationPanel";
import SidebarRequestDetails from "./Sidebar/sidebarRequestDetails";
import useRequestDetails from "../../Hooks/useRequestDetails";
import PDFViewer from "./PDFViewer/PDFViewer";
import "./requestDetails.css";

const { Panel } = Collapse;
const { Paragraph, Title } = Typography;

const RequestDetailsForm = () => {
  const { order_id } = useParams();
  const [form] = useForm();
  const [activeKey, setActiveKey] = useState(["1"]);
  const [formValues, setFormValues] = useState({});
  const { orderDetails, fetchOrderDetails, loading } = useRequestDetails(order_id);
  const navigate = useNavigate();

  useEffect(() => {
    fetchOrderDetails();
  }, [fetchOrderDetails]);

  useEffect(() => {
    if (orderDetails && orderDetails.order_lines) {
      const productNames = orderDetails.order_lines
        .map((line) => line.product_name)
        .filter(Boolean)
        .join(", ");
      const hsCodes = orderDetails.order_lines
        .map((line) => line.hs_code)
        .filter(Boolean)
        .join(", ");

      form.setFieldsValue({
        deliveryDate: orderDetails.delivery_date
          ? dayjs(orderDetails.delivery_date, "DD-MM-YYYY")
          : null,
        incoterm_description: orderDetails.incoterm,
        shippingCountry: orderDetails.delivery_adress[0]?.country_id,
        shippingStreet: orderDetails.delivery_adress[0]?.street,
        shippingStreet2: orderDetails.delivery_adress[0]?.street2,
        shippingCity: orderDetails.delivery_adress[0]?.city,
        shippingProvince: orderDetails.delivery_adress[0]?.state_id,
        shippingZip: orderDetails.delivery_adress[0]?.zip,
        phone: orderDetails.phone,
        email: orderDetails.email,
        productName: productNames,
        hsCode: hsCodes,
      });
    }
  }, [orderDetails, form]);

  const handleFormChange = (_, allValues) => {
    setFormValues(allValues);
  };

  const goBack = () => {
    navigate(`/get-quote/${order_id}`);
  };

  return (
    <div className="request-details-container">
      <Row gutter={24}>
        <Col xs={3} sm={3} md={6}>
          {/* Boş bırakıldı çünkü küçük ekranlarda zaten yukarıda olacak */}
        </Col>
        <Col xs={18} sm={18} md={12}>
          <Col span={24} style={{ marginBottom: "20px" }}>
            <div style={{ textAlign: "center" }}>
              <Title level={4}>Sales Order - {order_id}</Title>
            </div>
            <Paragraph>
              <strong>Please fill extra information below</strong> to get a
              quotation with delivery options. Otherwise, we will send you a
              quotation for only manufacturing with estimated production time.
            </Paragraph>
          </Col>
          <SidebarRequestDetails
            orderId={order_id}
            projectEngineer={orderDetails?.project_engineer}
            onSave={() => {}}
            onDiscard={() => {}}
            onPrintQuotation={() => {}}
            onPrintQuality={() => {}}
            shippingFormData={formValues} // Form verilerini burada aktarıyoruz
          />
          <Button onClick={goBack} type="link" style={{ padding: 0, margin: 0 }}>
            Back to Get Quote
          </Button>
          {loading ? (
            <Spin tip="Loading..." />
          ) : (
            <Form form={form} layout="vertical" onValuesChange={handleFormChange}>
              <Collapse activeKey={activeKey} onChange={(key) => setActiveKey(key)}>
                <Panel header="Shipping Address" key="1">
                  <ShippingAddressPanel form={form} initialValues={orderDetails} />
                </Panel>
                <Panel header="Shipping Note & Delivery Date" key="3">
                  <ShippingNoteAndDeliveryDatePanel initialValues={orderDetails} />
                </Panel>
                <Panel header="Information Required for Customs" key="5">
                  <CustomsInformationPanel form={form} initialValues={orderDetails} />
                </Panel>
              </Collapse>
            </Form>
          )}
        </Col>
        <Col xs={3} sm={3} md={6}>
          <PDFViewer />
        </Col>
      </Row>
    </div>
  );
};

export default RequestDetailsForm;
