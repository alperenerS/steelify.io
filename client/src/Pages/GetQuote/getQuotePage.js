import React, { useState } from "react";
import { Layout, Typography, Card, Row, Col, message } from "antd";
import { useNavigate } from "react-router-dom";
import GetQuoteForm from "./getQuoteForm";
import FileUpload from "./fileUpload";
import axios from "axios"; // Axios'u import edin

const { Header, Content } = Layout;
const { Title } = Typography;

const GetQuotePage = () => {
  const [fileList, setFileList] = useState([]);
  const navigate = useNavigate();

  const handleFileChange = (info) => {
    let newFileList = [...info.fileList];
    setFileList(newFileList);
  };

  const handleSubmit = async (values) => {
    if (!fileList.length) {
      message.error("Please upload at least one file.");
      return;
    }
    
    // FormData nesnesi oluştur
    const formData = new FormData();
    fileList.forEach(file => {
      formData.append('files', file.originFileObj);
    });

    // Form verilerini FormData nesnesine ekleyin
    Object.keys(values).forEach(key => {
      formData.append(key, values[key]);
    });

    try {
      // API isteği
      const response = await axios.post('API_ENDPOINT', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // İşlem başarılıysa kullanıcıyı yönlendir
      if (response.data.success) {
        navigate('/order-details');
      } else {
        message.error(response.data.message || "Submission failed. Please try again.");
      }
    } catch (error) {
      message.error(`An error occurred: ${error.message}`);
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
              <FileUpload onChange={handleFileChange} />
              <GetQuoteForm onSubmit={handleSubmit} />
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default GetQuotePage;
