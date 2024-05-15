import React from "react";
import { Card, Col, Row } from "antd";
import "./capabilities.css";

import steelifyWelding from "./assets/steelifyWelding.png";
import steelifyCNCMachining from "./assets/steelifyCNCMachining.png";
import steelifyBending from "./assets/steelifyBending.png";
import steelifyLaserCutting from "./assets/steelifyLaserCutting.png";
// import steelifyCoating from "./assets/steelifyCoating.png";

const cardData = [
  { title: "Welding", image: steelifyWelding },
  { title: "CNC Machining", image: steelifyCNCMachining },
  { title: "Bending", image: steelifyBending },
  { title: "Laser Cutting", image: steelifyLaserCutting },



  // { title: "Tube laser cutting", image: steelifyCoating },
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
