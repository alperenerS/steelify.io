import React from "react";
import { Typography, Row, Col, Divider } from "antd";
import './introduction.css'; // CSS dosyanızı import etmeyi unutmayın

const { Title, Paragraph } = Typography;

const Introduction = () => (
  <>
    <Row justify="center" align="middle" className="about-steelify-row">
      <Col xs={24} md={8} className="about-steelify-text">
        <Typography>
          <Title>About Steelify</Title>
          <Paragraph>
            Steelify is a multi-sided business platform, offering manufacturing
            as a service in steel & aluminium fabrication and reliable services
            at competitive prices with flexible and scalable solutions. We
            tackle the challenge of connecting high-quality product seekers with
            metal workshops that often struggle to sustainable customers and
            orders.
          </Paragraph>
        </Typography>
      </Col>
      <Col xs={24} md={8}>
        <img
          src="https://yenastorage.blob.core.windows.net/steelify/Steelify Multisided Business 1.png"
          alt="Steelify Multisided Business"
          className="about-steelify-image"
        />
      </Col>
    </Row>
    <Divider />
  </>
);

export default Introduction;
