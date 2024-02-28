import React from 'react';
import { Layout, Typography } from 'antd';
import './landingPageHeader.css'; // Make sure to create a corresponding CSS file

const { Header } = Layout;
const { Title, Paragraph } = Typography;

const LandingPageHeader = () => {
  return (
    <Header className="landing-page-header">
      <Title className="title" level={1}>Welcome to Steelify</Title>
      <Paragraph className="subtitle">Innovating the future of steel manufacturing</Paragraph>
    </Header>
  );
};

export default LandingPageHeader;