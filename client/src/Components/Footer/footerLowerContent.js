import React from 'react';
import { Typography, Space } from 'antd';
import { YoutubeOutlined, LinkedinOutlined } from '@ant-design/icons';

const { Text } = Typography;

const FooterLowerContent = () => (
  <div className="footer-lower-content">
    <Text className="footer-text">&copy; COPYRIGHT 2024 STEELIFY</Text>
    <Space size="middle">
      <Text className="footer-icon" style={{ cursor: 'pointer' }} onClick={() => window.open("https://www.youtube.com/@Steelify-BV", "_blank")}>
        <YoutubeOutlined />
      </Text>
      <Text className="footer-icon" style={{ cursor: 'pointer' }} onClick={() => window.open("https://www.linkedin.com/company/steelify/", "_blank")}>
        <LinkedinOutlined />
      </Text>
    </Space>
  </div>
);

export default FooterLowerContent;
