import React, { useState } from "react";
import { Layout, Typography, Card, Row, Col, message, Modal, Spin } from "antd";
import GetQuoteForm from "./getQuoteForm";
import axios from "axios";
import { API_BASE_URL } from "../../config";
import { useNavigate } from "react-router-dom";
import { CheckCircleOutlined } from "@ant-design/icons";

const { Header, Content } = Layout;
const { Title } = Typography;

const GetQuotePage = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false); // Sipariş gönderiliyor durumunu takip edecek

  const handleSubmit = async (values, fileList, photoList) => {
    setIsSubmitting(true); // Sipariş gönderimini başlat
    const token = localStorage.getItem("accessToken");
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

      setIsSubmitting(false); // Sipariş gönderimi tamamlandı

      if (response.data && response.data.message === "Successfully Created !") {
        message.success(response.data.message);
        navigate(`/request-details/${response.data.data.id}`);
      } else {
        console.log("Server response:", response.data);
        message.error("Failed to submit quote request.");
      }
    } catch (error) {
      setIsSubmitting(false); // Hata durumunda da sipariş gönderimi tamamlandı olarak işaretle
      console.log("Submit order error:", error);
      message.error(
        error.response?.data?.message || "Error submitting quote request."
      );
    }
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
              <GetQuoteForm onSubmit={handleSubmit} />
            </Card>
          </Col>
        </Row>
      </Content>
      <Modal
        title={null}
        open={isSubmitting}
        closable={false}
        footer={null}
        centered
        maskClosable={false}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "200px",
        }}
      >
        {isSubmitting ? (
          <>
            <Spin size="large" />
            <p style={{ marginTop: "16px" }}>
              Please wait while we are processing your request...
            </p>
          </>
        ) : (
          <>
            <CheckCircleOutlined style={{ fontSize: 48, color: "green" }} />
            <p style={{ marginTop: "16px" }}>
              Your quote has been successfully submitted!
            </p>
          </>
        )}
      </Modal>
    </Layout>
  );
};

export default GetQuotePage;
