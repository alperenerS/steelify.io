import React from 'react';
import { Row, Col, Typography } from 'antd';
import './aboutSteelifySection.css';

const { Title, Paragraph } = Typography;

const AboutSteelifySection = () => {
  return (
    <div className="about-steelify-section">
      <Row justify="center">
        <Col xs={24} lg={20}>
          <Row justify="space-around" align="middle">
            <Col xs={24} md={10}>
              <Title level={2}>About Steelify</Title>
              <Paragraph>
                Steelify is revolutionizing the steel industry with innovative solutions that enhance efficiency and sustainability. Our advanced technology and commitment to quality ensure that our clients receive the best products and services. We empower businesses to achieve their full potential while minimizing environmental impact. Join us in shaping the future of steel production.
              </Paragraph>
            </Col>
            <Col xs={24} md={10}>
              <img src={require('./womanInWorkshop.jpg')} alt="Women in Workshop" className="about-steelify-image"/>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default AboutSteelifySection;
