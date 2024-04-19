import React from "react";
import { Layout, Typography, Space } from "antd";
import { YoutubeOutlined, LinkedinOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "./footer.css";

const { Footer } = Layout;
const { Text } = Typography;

const AppFooter = () => {
  const navigate = useNavigate();

  return (
    <Footer className="footer">
      <div className="footer-content">
        <div className="footer-upper-content">
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

          <Space direction="vertical" className="footer-links">
            <Text className="footer-link" style={{ cursor: 'pointer' }} onClick={() => navigate("/get-quote")}>
              Get Quote
            </Text>
            <Text className="footer-link" style={{ cursor: 'pointer' }} onClick={() => navigate("")}>
              Become a supplier
            </Text>
            <Text className="footer-link" style={{ cursor: 'pointer' }} onClick={() => navigate("/about-us")}>
              About us
            </Text>
            <Text className="footer-link" style={{ cursor: 'pointer' }} onClick={() => navigate("")}>
              Contact us
            </Text>
          </Space>
        </div>

        <hr className="footer-divider" />

        <div className="footer-lower-content">
          <Text className="footer-text">&copy; COPYRIGHT 2024 STEELIFY</Text>
          <Space size="middle">
            <Text className="footer-icon" style={{ cursor: 'pointer' }} onClick={() => window.open("https://www.youtube.com", "_blank")}>
              <YoutubeOutlined />
            </Text>
            <Text className="footer-icon" style={{ cursor: 'pointer' }} onClick={() => window.open("https://www.linkedin.com/company/steelify/", "_blank")}>
              <LinkedinOutlined />
            </Text>
          </Space>
        </div>
      </div>
    </Footer>
  );
};

export default AppFooter;
