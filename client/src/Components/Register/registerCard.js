import React, { useState } from "react";
import { Card } from "antd";
import RegisterForm from "./registerForm";
import TermsAndConditionsPopup from "./termsAndConditionsPopup";

const RegisterCard = ({ onFinish }) => {
  const [termsAndConditionsPopupVisible, setTermsAndConditionsPopupVisible] = useState(false);

  const showTermsAndConditionsPopup = () => setTermsAndConditionsPopupVisible(true);
  const hideTermsAndConditionsPopup = () => setTermsAndConditionsPopupVisible(false);

  return (
    <Card
      title="Register"
      style={{
        maxWidth: 600,
        width: "100%",
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
      }}
    >
      <RegisterForm onFinish={onFinish} showTermsAndConditionsPopup={showTermsAndConditionsPopup} />
      <div style={{ marginTop: 16, textAlign: "center" }}>
        Already have an account? <a href="/login">Click to Login</a>
      </div>
      <TermsAndConditionsPopup
        isVisible={termsAndConditionsPopupVisible}
        onClose={hideTermsAndConditionsPopup}
        onAgree={() => document.getElementById("agreement-checkbox").checked = true}
      />
    </Card>
  );
};

export default RegisterCard;
