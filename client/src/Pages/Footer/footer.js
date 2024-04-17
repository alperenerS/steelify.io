import React from "react";
import { Layout, Typography, Space } from "antd";
import { YoutubeOutlined, LinkedinOutlined } from "@ant-design/icons";
import "./footer.css";

const { Footer } = Layout;
const { Text, Link } = Typography;

const AppFooter = () => {
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
            <Link href="mailto:info@steelify.io" className="footer-link">
              info@steelify.io
            </Link>
          </div>

          <Space direction="vertical" className="footer-links">
            <Link href="get-quote" className="footer-link">
              Get Quote
            </Link>
            <Link href="#" className="footer-link">
              Become a supplier
            </Link>
            <Link href="/about-us" className="footer-link">
              About us
            </Link>
            <Link href="#" className="footer-link">
              Contact us
            </Link>
          </Space>
        </div>

        <hr className="footer-divider" />

        <div className="footer-lower-content">
          <Text className="footer-text">&copy; COPYRIGHT 2024 STEELIFY</Text>
          <Space size="middle">
            <Link href="https://www.youtube.com" target="_blank">
              <YoutubeOutlined className="footer-icon" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/steelify/"
              target="_blank"
            >
              <LinkedinOutlined className="footer-icon" />
            </Link>
          </Space>
        </div>
      </div>
    </Footer>
  );
};

export default AppFooter;
