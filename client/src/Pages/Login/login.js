import React from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Form, Input, Button, Checkbox, Card, notification } from "antd";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../../Redux/Slices/userSlice"; // Dosya yolu projenize göre değişebilir
import { API_BASE_URL } from "../../config";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  // Retrieve the state passed from the redirect or default to root
  const { from } = location.state || { from: { pathname: "/" } };

  const onFinish = async (values) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/login`, values);
      if (response.data && response.data.data) {
        const { data, access_token } = response.data.data;
        dispatch(setUser({ user: data, token: access_token }));

        notification.success({
          message: "Login Successful",
          description:
            response.data.message || "You have successfully logged in!",
        });

        navigate(from.pathname); // Redirect to the intended page or default
      } else {
        notification.error({
          message: "Login Failed",
          description: "Invalid email or password.",
        });
      }
    } catch (error) {
      notification.error({
        message: "Login Failed",
        description: `An error occurred. Please try again later. ${
          error.response?.data?.message || ""
        }`,
      });
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.error("Failed:", errorInfo);
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
      <Card
        title="Login"
        style={{
          maxWidth: 450,
          width: "100%",
          boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
        }}
      >
        <Form
          name="basic"
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
          <div
            style={{ marginBottom: 10, textAlign: "right", paddingRight: 15 }}
          >
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
              style={{ display: "block", margin: "0 auto", maxWidth: "200px" }}
            >
              Login
            </Button>
          </Form.Item>
          <div style={{ marginTop: 16, textAlign: "center" }}>
            Don't have an account? <Link to="/register">Click to Register</Link>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
