import React from "react";
import { Typography, Row, Col, Divider } from "antd";
import "./innovationTechnology.css"; // CSS dosyasını import etmeyi unutmayın

const { Title, Paragraph } = Typography;

const InnovationTechnology = () => (
  <div>
    <Row justify="center" align="middle" className="about-steelify-row">
      <Col xs={24} md={8}>
        <img
          src="https://yenastorage.blob.core.windows.net/steelify/Steelify Streamlined Fabrication.png"
          alt="Steelify Multisided Business"
          className="about-steelify-image"
        />
      </Col>
      <Col xs={24} md={8} className="about-steelify-text">
        <Typography>
          <Title level={2}>Innovation and Technology</Title>
          <Paragraph>
            At the core of Steelify lies our commitment to innovation and the
            use of cutting-edge technology. We leverage artificial intelligence
            to efficiently connect buyers and sellers, optimizing the
            manufacturing process and fostering the development of sustainable
            solutions for the future.
          </Paragraph>
        </Typography>
      </Col>
    </Row>
    <Divider />
  </div>
);

export default InnovationTechnology;
