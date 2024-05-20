import React from "react";
import { Typography, Row, Col, Divider } from "antd";
import './metalWorkshops.css';

const { Title, Paragraph } = Typography;

const MetalWorkshops = () => (
  <>
    <Row justify="center" align="middle" className="about-steelify-row">
      <Col xs={24} md={8} className="about-steelify-text">
        <Typography>
          <Title level={2}>For Metal Workshops</Title>
          <Paragraph>
            Gain access to a world without borders with Steelify. We offer
            increased demand, technical support, ensuring financial trust, and
            enhanced quality management for metal workshops, empowering them to
            scale their operations effectively.
          </Paragraph>
        </Typography>
      </Col>
      <Col xs={24} md={8}>
        <img
          src="https://yenastorage.blob.core.windows.net/steelify/Steelify Streamlined Fabrication.png"
          alt="Steelify Streamlined Fabrication"
          className="about-steelify-image"
        />
      </Col>
    </Row>
    <Divider />
  </>
);

export default MetalWorkshops;

