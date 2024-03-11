import React, { useState } from "react";
import { Layout, Typography, Card, Row, Col, message } from "antd";
import { useNavigate } from "react-router-dom"; // useNavigate hook'unu import edin
import GetQuoteForm from "./getQuoteForm";
import FileUpload from "./fileUpload";

const { Header, Content } = Layout;
const { Title } = Typography;

const GetQuotePage = () => {
  const [fileList, setFileList] = useState([]);
  const navigate = useNavigate(); // useNavigate hook'unu kullanarak bir navigate fonksiyonu oluşturun

  const handleFileChange = (info) => {
    let newFileList = [...info.fileList];
    // Dosya listesini güncelle
    setFileList(newFileList);
  };

  const handleSubmit = (values) => {
    if (!fileList.length) {
      message.error("Please upload at least one file.");
      return;
    }
    // Burada form verilerini ve dosya listesini işleyebilirsiniz
    console.log("Form Values:", values);
    console.log("Uploaded Files:", fileList);

    // İşlem başarılı olduktan sonra order-details sayfasına yönlendir
    navigate("/order-details"); // Kullanıcıyı order-details sayfasına yönlendir
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
