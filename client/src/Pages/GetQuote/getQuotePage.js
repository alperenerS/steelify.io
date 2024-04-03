import React from "react";
import { Layout, Typography, Card, Row, Col, message } from "antd";
import GetQuoteForm from "./getQuoteForm";
import axios from "axios";
import { API_BASE_URL } from "../../config";
import { useNavigate } from "react-router-dom";

const { Header, Content } = Layout;
const { Title } = Typography;

const GetQuotePage = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values, fileList, photoList) => {
    const token = localStorage.getItem('accessToken');
    const formData = new FormData();
    
    // Dosya ve fotoğraf listelerini FormData'ya ekleyin
    fileList.forEach(file => {
        formData.append('orderDocs', file);
    });

    photoList.forEach(photo => {
        formData.append('samplePhotos', photo);
    });

    // Form verilerini FormData'ya ekleyin
    Object.keys(values).forEach(key => {
        formData.append(key, values[key]);
    });

    // FormData içeriğini loglama için önce bir objeye dönüştürme
    const formDataForLog = {};
    formData.forEach((value, key) => {
        // Dosyaları doğrudan loglamak yerine, dosya adlarını loglayacağız
        if (value instanceof File) {
            formDataForLog[key] = value.name;
        } else {
            formDataForLog[key] = value;
        }
    });


    try {
      const response = await axios.post(`${API_BASE_URL}/order/createOrder`, formData, {
          headers: {
              'Authorization': `Bearer ${token}`,
          },
      });
  
      // Sunucu başarılı bir yanıt döndürdüyse
      if (response.data && response.data.message === "Successfully Created !") {
          message.success(response.data.message); // Başarılı yanıt mesajını göster
          navigate(`/request-details/${response.data.data.id}`); // Başarılı oluşturulan siparişin ID'si ile yönlendir
      } else {
          // Beklenmeyen bir yanıt varsa, sunucudan gelen yanıtı logla ve genel bir hata mesajı göster
          console.log("Server response:", response.data);
          const errorMessage = response.data && response.data.message ? response.data.message : 'Failed to submit quote request.';
          message.error(errorMessage);
      }
  } catch (error) {
      // Hata yakalama bloğu
      if (error.response) {
          // Sunucu tarafından spesifik bir hata mesajı döndürüldüyse
          console.log(`Error: ${error.response.status} - ${error.response.data}`);
          const errorMessage = error.response.data && error.response.data.message ? error.response.data.message : 'Error submitting quote request.';
          message.error(errorMessage);
      } else if (error.request) {
          console.log('Error: The request was made but no response was received', error.request);
          message.error('No response was received for the request.');
      } else {
          console.log('Error', error.message);
          message.error('Error creating the request.');
      }
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
    </Layout>
  );
};

export default GetQuotePage;
