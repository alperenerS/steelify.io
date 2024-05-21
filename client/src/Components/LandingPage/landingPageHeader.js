import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Typography, Button } from 'antd';
import './landingPageHeader.css';


const { Header } = Layout;
const { Title, Paragraph } = Typography;

const LandingPageHeader = () => {
  const navigate = useNavigate(); 

  const handleGetQuoteClick = () => {
    navigate('/get-quote'); 
  };

  return (
    <Header className="landing-page-header">
      <Title className="title" level={1}>Welcome to Steelify</Title>
      <Paragraph className="subtitle" style={{ fontSize: '16px' }}>Innovating the future of steel manufacturing</Paragraph>
      <Button type="primary" onClick={handleGetQuoteClick}>Get Quote</Button>
    </Header>
  );
};

export default LandingPageHeader;
