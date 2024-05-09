import React from "react";
import { Card, Row, Col } from "antd";
import steelifyLaserCutting from "./assets/steelifyLaserCutting.png";
import steelifyBending from "./assets/steelifyBending.png";
import steelifyCNCMachining from "./assets/steelifyCNCMachining.png";
import steelifyWelding from "./assets/steelifyWelding.png";
import steelifyCoating from "./assets/steelifyCoating.png";
import "./capabilities.css";

const cardData = [
  { title: "Laser cutting", image: steelifyLaserCutting },
  { title: "Bending & folding", image: steelifyBending },
  { title: "CNC turning & milling", image: steelifyCNCMachining },
  { title: "CNC milling", image: steelifyWelding },
  { title: "Tube laser cutting", image: steelifyCoating },
];

function Capabilities() {
  return (
    <div className="capabilities-container">
      <h1 style={{ textAlign: "center" }}>Capabilities</h1>
      <Row gutter={[16, 16]} justify="space-around">
        {cardData.map((card, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6} xl={4}>
            <Card
              hoverable
              cover={
                <img
                  alt={card.title}
                  src={card.image}
                  style={{
                    width: "100px",
                    height: "auto",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: "2rem",
                    marginBottom: "2rem",
                  }}
                />
              }
              style={{ width: "240px" }}
              className="capabilities-card-style"
            >
              <Card.Meta
                title={card.title}
                style={{ textAlign: "center" }} // Inline stilleri kaldırıldı, CSS dosyasında ayarlandı
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Capabilities;
