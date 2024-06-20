import React from "react";
import AdminLoginCard from "../../../Components/AdminPanel/AdminLogin/adminLoginCard";
import {
  showAdminLoginSuccess,
  showAdminLoginError,
  showAdminLoginFailed,
} from "../../../Components/AdminPanel/AdminLogin/adminLoginNotification";

const AdminLogin = () => {
  const handleFinish = (values) => {
    // Buraya login işlemi eklenecek
    showAdminLoginSuccess();
  };

  const handleFinishFailed = (errorInfo) => {
    showAdminLoginFailed(errorInfo);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
      }}
    >
      <AdminLoginCard 
        onFinish={handleFinish} 
        onFinishFailed={handleFinishFailed} 
        style={{ margin: "auto" }} 
      />
    </div>
  );
};

export default AdminLogin;
