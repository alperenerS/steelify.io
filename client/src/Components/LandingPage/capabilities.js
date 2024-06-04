import React from "react";
import { Card, Col, Row } from "antd";
import "./capabilities.css";

const cardData = [
  { title: "Welding", image: "https://yenastorage.blob.core.windows.net/steelify/steelify_welding_square.png" },
  { title: "CNC Machining", image: "https://yenastorage.blob.core.windows.net/steelify/steelify_CNC_square.png" },
  { title: "Bending", image: "https://yenastorage.blob.core.windows.net/steelify/steelify_bending_square.png" },
  { title: "Laser Cutting", image: "https://yenastorage.blob.core.windows.net/steelify/steelify_laser_square.png" },
];

const CapabilitiesSection = () => {
  return (
    <div className="capabilities-wrapper">
      <h1 style={{ textAlign: "center" }}>Capabilities</h1>
      <Row gutter={[16, 16]} justify="center">
        {cardData.map((card, index) => (
          <Col
            key={index}
            xs={24}
            sm={12}
            md={8}
            lg={6}
            xl={4}
            style={{ maxWidth: "300px" }}
          >
            <Card
              className="custom-card"
              cover={
                <img
                  alt={card.title}
                  src={card.image}
                  className="custom-card-image"
                />
              }
            >
              <Card.Meta
                title={<div style={{ whiteSpace: "normal" }}>{card.title}</div>}
                className="custom-card-title"
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CapabilitiesSection;
