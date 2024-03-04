import React from 'react';
import { Layout, Typography, Card, Row, Col } from 'antd';
import GetQuoteForm from './getQuoteForm';
import FileUpload from './fileUpload';

const { Header, Content } = Layout;
const { Title } = Typography;

const GetQuotePage = () => {
  return (
    <Layout style={{ backgroundColor: '#fff' }}> 
      <Header style={{ backgroundColor: '#fff', borderBottom: '1px solid #e8e8e8' }}> 
        <Title level={2} style={{ color: '#000', textAlign: 'center' }}>Get Quote</Title>
      </Header>
      <Content style={{ padding: '50px', backgroundColor: '#fff' }}>
        <Row justify="center">
          <Col xs={24} sm={20} md={16} lg={12} xl={10}>
            <Card bordered={false} style={{ padding: '20px' }}>
              <FileUpload />
              <GetQuoteForm />
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default GetQuotePage;
