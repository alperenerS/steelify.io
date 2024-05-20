import React from 'react';
import { Typography, Row, Col } from 'antd';
import TeamMember from './teamMember';
import './allTeam.css';

const { Title } = Typography;

const teamMembers = [
  {
    name: "Yetkin Sağ",
    title: "CEO / Founder",
    imgSrc: "https://yenastorage.blob.core.windows.net/steelify/steelify_yetkin.png",
    linkedin: "https://www.linkedin.com/in/yetkinsag",
  },
  {
    name: "Enver Bodur",
    title: "Operation Manager",
    imgSrc: "https://yenastorage.blob.core.windows.net/steelify/steelify_enver.png",
    linkedin: "https://www.linkedin.com/in/enverbodur"
  },
  {
    name: "Alperen Alihan Er",
    title: "Product Manager",
    imgSrc: "https://yenastorage.blob.core.windows.net/steelify/steelify_alperen.png",
    linkedin: "https://www.linkedin.com/in/alperen-alihan-er-910050151"
  },
  {
    name: "Emre Mataracı",
    title: "Software Engineer",
    imgSrc: "https://yenastorage.blob.core.windows.net/steelify/steelify_emre.png",
    linkedin: "https://www.linkedin.com/in/emremataraci"
  }
];

const AllTeam = () => (
  <div className="about-us-main-title">
    <div className="about-us-title">
      <Typography>
        <Title level={2}>Meet Our Team</Title>
      </Typography>
    </div>
    <Row gutter={[16, 16]} justify="center">
      {teamMembers.map((member) => (
        <Col key={member.name} xs={24} sm={12} md={8} lg={6} xl={4}>
          <TeamMember className="about-us-card-responsive" {...member} />
        </Col>
      ))}
    </Row>
  </div>
);

export default AllTeam;