import React from "react";
import { Card } from "antd";
import LoginForm from "./loginForm";

const LoginCard = ({ onFinish, onFinishFailed }) => (
  <Card
    title="Login"
    style={{
      maxWidth: 450,
      width: "100%",
      boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    }}
  >
    <LoginForm onFinish={onFinish} onFinishFailed={onFinishFailed} />
  </Card>
);

export default LoginCard;
