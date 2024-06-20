import React from "react";
import { Card } from "antd";
import AdminLoginForm from "./adminLoginForm";

const AdminLoginCard = ({ onFinish, onFinishFailed }) => (
  <Card
    title="Admin Login"
    style={{
      maxWidth: 450,
      width: "100%",
      boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
      margin: "auto",
      borderRadius: 10,
      backgroundColor: "#f7f9fc",
    }}
    headStyle={{
      textAlign: "center",
      fontSize: 20,
      fontWeight: "bold",
    }}
  >
    <AdminLoginForm onFinish={onFinish} onFinishFailed={onFinishFailed} />
  </Card>
);

export default AdminLoginCard;
