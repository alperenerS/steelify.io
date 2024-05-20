import React from 'react';
import { Typography, Space } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Text } = Typography;

const FooterLinksSection = () => {
  const navigate = useNavigate();

  return (
    <Space direction="vertical" className="footer-links">
      <Text className="footer-link" style={{ cursor: 'pointer' }} onClick={() => navigate("/get-quote")}>
        Get Quote
      </Text>
      <Text className="footer-link" style={{ cursor: 'pointer' }} onClick={() => navigate("/register")}>
        Become a supplier
      </Text>
      <Text className="footer-link" style={{ cursor: 'pointer' }} onClick={() => navigate("/about-us")}>
        About us
      </Text>
      <Text className="footer-link" style={{ cursor: 'pointer' }} onClick={() => navigate("")}>
        Contact us
      </Text>
    </Space>
  );
};

export default FooterLinksSection;
