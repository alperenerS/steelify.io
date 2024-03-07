import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { Form, Input, Button, Checkbox, Card, notification } from 'antd';
import { API_BASE_URL } from '../../config';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    remember: false,
  });
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/login`, values);

      if (response.data.success) {
        // Optionally set local storage or cookie here if remember me is checked
        if (values.remember) {
          // Set relevant auth tokens or user data in local storage or cookies
        }
        navigate('/'); // Redirect to the home page or dashboard
      } else {
        notification.error({
          message: 'Login Failed',
          description: response.data.message || 'Invalid username or password.',
        });
      }
    } catch (error) {
      notification.error({
        message: 'Login Failed',
        description: 'An error occurred. Please try again later.',
      });
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Card title="Login" style={{ maxWidth: 600, width: '100%', marginTop: '-20vh',boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' }}>
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
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        <div style={{ marginTop: 16, textAlign: 'center' }}>
          Don't have an account? <Link to="/register">Click to Register</Link>
        </div>
      </Card>
    </div>
  );
};

export default Login;
