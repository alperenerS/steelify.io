import React from 'react';
import { Card } from 'antd';
import './teamMember.css'
const TeamMember = ({ name, title, imgSrc, linkedin }) => (
  <a href={linkedin} target="_blank" rel="noopener noreferrer">
    <Card
    className="about-us-card-responsive"
      hoverable
      cover={<img alt={name} src={imgSrc} />}
    >
      <Card.Meta title={name} description={title} />
    </Card>
  </a>
);

export default TeamMember;
