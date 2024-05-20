import React from "react";
import { Typography, Row, Col, Divider } from "antd";

const { Title, Paragraph } = Typography;

const MetalWorkshops = () => (
  <div>
    <Row justify="center">
      <Col xs={24} md={8}>
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
      <Col span={8}>
        <img
          src="https://yenastorage.blob.core.windows.net/steelify/Steelify Streamlined Fabrication.png"
          alt="Steelify Multisided Business"
          className="about-steelify-image"
        />
      </Col>
    </Row>
    <Divider />
  </div>
);

export default MetalWorkshops;
