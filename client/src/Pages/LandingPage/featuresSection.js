import React from 'react';
import { Row, Col, Card, Typography } from 'antd';
import { SettingOutlined, RocketOutlined, SafetyOutlined, BulbOutlined, CustomerServiceOutlined, EnvironmentOutlined } from '@ant-design/icons';
import './featuresSection.css';

const { Title, Paragraph } = Typography;

const featureCardsData = [
  { title: 'Automation', icon: <SettingOutlined />, description: 'Streamline your production with advanced automation.' },
  { title: 'Efficiency', icon: <RocketOutlined />, description: 'Enhance your operational efficiency and output.' },
  { title: 'Reliability', icon: <SafetyOutlined />, description: 'Depend on reliable and consistent service.' },
  { title: 'Innovation', icon: <BulbOutlined />, description: 'Innovative solutions for complex challenges.' },
  { title: 'Customer Service', icon: <CustomerServiceOutlined />, description: 'Exceptional support for all our clients.' },
  { title: 'Sustainability', icon: <EnvironmentOutlined />, description: 'Committed to sustainable industrial practices.' },
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
