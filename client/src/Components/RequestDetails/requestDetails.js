import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Collapse,
  Form,
  Typography,
  Button,
  Input,
  DatePicker,
} from "antd";
import { useForm } from "antd/lib/form/Form";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";
import ShippingAddressPanel from "./Panels/shippingAddressPanel";
import ShippingNoteAndDeliveryDatePanel from "./Panels/shippingNoteAndDeliveryDatePanel";
import CustomsInformationPanel from "./Panels/customsInformationPanel";
import SaveButton from "./saveButton";
import Sidebar from "../../Pages/RequestDetails/Sidebar/sidebar";
import useGetQuoteDetails from "../../Hooks/useGetQuoteDetails";
import { getOrderDetails } from "../../API/RequestDetails/getRequestDetailsFromOdoo";
import "./requestDetails.css";

const { Panel } = Collapse;
const { Paragraph, Title } = Typography;

const RequestDetails = () => {
  const { order_id } = useParams();
  const [form] = useForm();
  const [activeKey, setActiveKey] = useState(["1"]);
  const [formValues, setFormValues] = useState({});
  const { formData, fileList } = useGetQuoteDetails(order_id);
  const [orderDetails, setOrderDetails] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const data = await getOrderDetails(order_id);

        const productNames = data.order_lines
          .map((line) => line.product_name)
          .filter(Boolean)
          .join(", ");
        const hsCodes = data.order_lines
          .map((line) => line.hs_code)
          .filter(Boolean)
          .join(", ");

        setOrderDetails(data);
        form.setFieldsValue({
          deliveryDate: data.delivery_date
            ? dayjs(data.delivery_date, "DD-MM-YYYY")
            : null,
          incoterm_description: data.incoterm,
          shippingCountry: data.delivery_adress[0]?.country_id,
          shippingStreet: data.delivery_adress[0]?.street,
          shippingStreet2: data.delivery_adress[0]?.street2,
          shippingCity: data.delivery_adress[0]?.city,
          shippingProvince: data.delivery_adress[0]?.state_id,
          shippingZip: data.delivery_adress[0]?.zip,
          phone: data.phone,
          email: data.email,
          productName: productNames,
          hsCode: hsCodes,
        });
      } catch (error) {
        console.error("Failed to fetch order details:", error);
      }
    };
    fetchOrderDetails();
  }, [order_id]);

  const handleFormChange = (_, allValues) => {
    setFormValues(allValues);
  };

  const goBack = () => {
    navigate(`/get-quote/${order_id}`);
  };

  return (
    <div className="request-details-container">
      <Row gutter={24}>
        <Col span={6}>
          <Sidebar
            order_id={order_id}
            projectEngineer={orderDetails.project_engineer}
          />
        </Col>
        <Col span={16}>
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
          <Button
            onClick={goBack}
            type="link"
            style={{ padding: 0, margin: 0 }}
          >
            Back to Get Quote
          </Button>
          <Form form={form} layout="vertical" onValuesChange={handleFormChange}>
            <Collapse
              activeKey={activeKey}
              onChange={(key) => setActiveKey(key)}
            >
              <Panel header="Shipping Address" key="1">
                <ShippingAddressPanel
                  form={form}
                  initialValues={orderDetails}
                />
              </Panel>
              <Panel header="Shipping Note & Delivery Date" key="3">
                <ShippingNoteAndDeliveryDatePanel
                  initialValues={orderDetails}
                />
              </Panel>
              <Panel header="Information Required for Customs" key="5">
                <CustomsInformationPanel
                  form={form}
                  initialValues={orderDetails}
                />
              </Panel>
            </Collapse>
            <Col span={24} style={{ marginTop: "20px" }}>
              <SaveButton shippingFormData={formValues} />
            </Col>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default RequestDetails;
