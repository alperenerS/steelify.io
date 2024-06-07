import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { Link } from "react-router-dom";

const AdminLoginForm = ({ onFinish, onFinishFailed }) => (
  <Form
    name="admin_login"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Email"
      name="email"
      rules={[{ required: true, message: "Please input your email!" }]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true, message: "Please input your password!" }]}
    >
      <Input.Password />
    </Form.Item>
    <div style={{ marginBottom: 10, textAlign: "right", paddingRight: 15 }}>
      <Link to="/forgot-password">Forgot Password?</Link>
    </div>
    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{ offset: 8, span: 16 }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>
    <Form.Item wrapperCol={{ span: 24 }}>
      <Button
        type="primary"
        htmlType="submit"
        style={{ display: "block", margin: "0 auto", maxWidth: "200px", backgroundColor: "#001529", borderColor: "#001529" }} // Renk değişiklikleri
      >
        Login
      </Button>
    </Form.Item>
  </Form>
);

export default AdminLoginForm;
