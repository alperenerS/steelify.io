import React from 'react';
import { Layout, Typography, Card, Row, Col, message } from "antd";
import GetQuoteForm from './getQuoteForm';
import axios from 'axios';

const { Header, Content } = Layout;
const { Title } = Typography;

const GetQuotePage = () => {
    const handleSubmit = async (values, fileList) => {
        const token = localStorage.getItem('accessToken'); // Token'ı localStorage'dan al
        const formData = new FormData();
        fileList.forEach(file => {
            formData.append('files', file);
        });
        Object.keys(values).forEach(key => {
            formData.append(key, values[key]);
        });

        try {
            const response = await axios.post('http://localhost:3001/api/order-document/create', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}` // Dinamik olarak alınan token
                  },
            });

            if (response.data.success) {
                message.success('Quote request submitted successfully!');
            } else {
                message.error('Failed to submit quote request.');
            }
        } catch (error) {
            message.error(`Error submitting quote request: ${error.message}`);
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
