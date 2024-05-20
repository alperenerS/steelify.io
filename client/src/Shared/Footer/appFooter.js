import React from "react";
import { Layout } from "antd";
import FooterUpperContent from "../../Components/Footer/footerUpperContent"
import FooterLowerContent from "../../Components/Footer/footerLowerContent";
import "../../Components/Footer/footer.css";

const { Footer } = Layout;

const AppFooter = () => (
  <Footer className="footer">
    <div className="footer-content">
      <FooterUpperContent />
      <hr className="footer-divider" />
      <FooterLowerContent />
    </div>
  </Footer>
);

export default AppFooter;
