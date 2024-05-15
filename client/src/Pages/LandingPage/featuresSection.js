import React from 'react';
import { Row, Col, Card, Typography } from 'antd';
import { UploadOutlined, FileSearchOutlined, BellOutlined, CheckCircleOutlined, TruckOutlined, FileTextOutlined } from '@ant-design/icons';
import './featuresSection.css';

const { Title, Paragraph } = Typography;

const featureCardsData = [
  { title: 'Upload Request', icon: <UploadOutlined />, description: 'Upload your lists and drawings, and describe your request.' },
  { title: 'Get Quote', icon: <FileSearchOutlined />, description: 'Request will be reviewed and quoted according to your needs.' },
  { title: 'Stay Updated', icon: <BellOutlined />, description: 'Confirm the quote and get notified about critical steps in manufacturing.' },
  { title: 'Quality Control', icon: <CheckCircleOutlined />, description: 'Ensure that your order is in desired quality and technical specifications.' },
  { title: 'Shipment Tracking', icon: <TruckOutlined />, description: 'Know where your shipment is, in real-time.' },
  { title: 'Documentation', icon: <FileTextOutlined />, description: 'Quality control processes are documented and shared with you.' },
];
 

const FeaturesSection = () => {
  return (
    <div style={{ padding: '50px 0' }}>
      <Title level={2} className="features-section">Process</Title>
      <Row gutter={[16, 16]} justify="center" className="features-row">
        {featureCardsData.map((feature, index) => (
          <Col xs={24} sm={12} md={8} key={index} style={{ display: 'flex', justifyContent: 'center' }}>
            <Card className="feature-card">
              <Title level={4}>{feature.title}</Title>
              <div className="feature-icon">{feature.icon}</div>
              <Paragraph>{feature.description}</Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FeaturesSection;
