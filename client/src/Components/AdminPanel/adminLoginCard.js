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
      borderRadius: 10, // Daha yuvarlak köşeler
      backgroundColor: "#f7f9fc", // Arka plan rengini değiştirdik
    }}
    headStyle={{
      textAlign: "center", // Başlığı ortaladık
      fontSize: 20, // Başlık boyutunu artırdık
      fontWeight: "bold", // Başlığı kalınlaştırdık
    }}
  >
    <AdminLoginForm onFinish={onFinish} onFinishFailed={onFinishFailed} />
  </Card>
);

export default AdminLoginCard;
