import React from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { Form, Input, Button, Checkbox, Card, notification } from 'antd';
import { API_BASE_URL } from '../../config';

const Login = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const loginData = {
        email: values.email,
        password: values.password,
      };

      const response = await axios.post(`${API_BASE_URL}/auth/login`, loginData);

      if (response.data && response.data.data) {
        notification.success({
          message: 'Login Successful',
          description: response.data.message || 'You have successfully logged in!',
        });
        
        navigate('/');
      } else {
        notification.error({
          message: 'Login Failed',
          description: 'Invalid email or password.',
        });
      }
    } catch (error) {
      notification.error({
        message: 'Login Failed',
        description: `An error occurred. Please try again later. ${error.response?.data?.message || ''}`,
      });
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Card title="Login" style={{ maxWidth: 600, width: '100%', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' }}>
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
            rules={[{ required: true, message: 'Please input your email!' }]}
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
              Login
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
