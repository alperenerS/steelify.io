import React from 'react';
import { Row, Col, Card, Typography } from 'antd';
import { FormOutlined, SearchOutlined, ToolOutlined, FileProtectOutlined, CustomerServiceOutlined, TruckOutlined } from '@ant-design/icons';
import './featuresSection.css';

const { Title, Paragraph } = Typography;

const featureCardsData = [
  { title: 'Quote Management', icon: <FormOutlined />, description: 'Create, send, and track quotes easily.' },
  { title: 'Best Matches', icon: <SearchOutlined />, description: 'Match with the suitable supplier from our network.' },
  { title: 'Production', icon: <ToolOutlined />, description: 'Production is closely monitored by our engineers.' },
  { title: 'Quality', icon: <FileProtectOutlined />, description: 'Quality control processes are documented and shared with you.' },
  { title: 'Shipment Tracking', icon: <TruckOutlined />, description: 'Know where your shipment is, in real-time.' },
  { title: 'Customer Service', icon: <CustomerServiceOutlined />, description: 'Exceptional support, every step of the way. Ready to assist.' },
];

const FeaturesSection = () => {
  return (
    <div style={{ padding: '50px 0' }}>
      <Title level={2} className="features-section">What Steelify Offers?</Title>
      <Row gutter={[16, 16]} justify="center" className="features-row">
        {featureCardsData.map((feature, index) => (
          <Col xs={24} sm={12} md={8} key={index} style={{ display: 'flex', justifyContent: 'center' }}>
            <Card className="feature-card" hoverable>
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
