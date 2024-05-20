import React from 'react';
import { Typography } from 'antd';

const { Text } = Typography;

const FooterLogoSection = () => (
  <div style={{ flex: 1 }}>
    <img
      src="https://yenastorage.blob.core.windows.net/steelify/steelify_logo.png"
      alt="Steelify Logo"
      style={{ width: "120px" }}
    />
    <br />
    <Text className="footer-text">Steelify B.V.</Text>
    <br />
    <Text className="footer-text">Beursplein 37, Rotterdam, NL</Text>
    <br />
    <Text className="footer-link" style={{ cursor: 'pointer', color: '#0077cc' }} onClick={() => window.location = 'mailto:info@steelify.io'}>
      info@steelify.io
    </Text>
  </div>
);

export default FooterLogoSection;
