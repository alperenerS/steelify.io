import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Layout,
  Typography,
  Card,
  Row,
  Col,
  message,
  Spin,
} from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import GetQuoteForm from "../../Components/GetQuote/getQuoteForm";
import SuccessModal from "../../Components/GetQuote/succesModal";
import { API_BASE_URL } from "../../config";

const { Header, Content } = Layout;
const { Title } = Typography;

const GetQuotePage = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const [orderData, setOrderData] = useState(null);

  const token = useSelector((state) => state.user.token);

  const handleSubmit = async (values, fileList, photoList) => {
    setIsSubmitting(true);
    const formData = new FormData();

    fileList.forEach((file) => {
      formData.append("orderDocs", file);
    });

    photoList.forEach((photo) => {
      formData.append("samplePhotos", photo);
    });

    Object.keys(values).forEach((key) => {
      formData.append(key, values[key]);
    });

    try {
      const response = await axios.post(
        `${API_BASE_URL}/order/createOrder`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setIsSubmitting(false);
      if (response.data && response.data.message === "Successfully Created !") {
        setOrderData(response.data.data);
        setSuccessModalVisible(true);
        message.success(response.data.message);
      } else {
        console.log("Server response:", response.data);
        message.error("Failed to submit quote request.");
      }
    } catch (error) {
      setIsSubmitting(false);
      console.log("Submit order error:", error);
      message.error(
        error.response?.data?.message || "Error submitting quote request."
      );
    }
  };

  const goToRequestDetails = () => {
    navigate(`/request-details/${orderData ? orderData.id : ""}`);
  };

  return (
    <Layout style={{ backgroundColor: "#fff" }}>
      <Header style={{ backgroundColor: "#fff" }}>
        <Title level={2} style={{ color: "#000", textAlign: "center" }}>
          Get Quote
        </Title>
      </Header>
      <Content style={{ padding: "50px", backgroundColor: "#fff" }}>
        <Row justify="center">
          <Col xs={24} sm={20} md={16} lg={12} xl={10}>
            <Card bordered={false} style={{ padding: "20px" }}>
              <Spin spinning={isSubmitting}>
                <GetQuoteForm onSubmit={handleSubmit} />
              </Spin>
            </Card>
          </Col>
        </Row>
      </Content>
      <SuccessModal
        visible={successModalVisible}
        onOk={goToRequestDetails}
      />
    </Layout>
  );
};

export default GetQuotePage;
