import React from "react";
import { Typography, Row, Col, Divider } from "antd";
import "./industrialBuyers.css"; // CSS dosyasını import etmeyi unutmayın

const { Title, Paragraph } = Typography;

const IndustrialBuyers = () => (
  <div>
    <Row justify="center" align="middle" className="about-steelify-row">
      <Col xs={24} md={8}>
        <img
          src="https://yenastorage.blob.core.windows.net/steelify/Steelify Workshop Connection.png"
          alt="Steelify Multisided Business"
          className="about-steelify-image"
        />
      </Col>
      <Col xs={24} md={8} className="about-steelify-text">
        <Typography>
          <Title level={2}>For Industrial Buyers</Title>
          <Paragraph>
            Experience streamlined procurement with Steelify, ensuring on-time
            delivery, desired quality, diverse supply options, and enhanced
            trust and traceability. Our platform is designed to simplify the
            procurement process, making it easier for you to access the best
            products and services in the market.
          </Paragraph>
        </Typography>
      </Col>
    </Row>
    <Divider />
  </div>
);

export default IndustrialBuyers;
