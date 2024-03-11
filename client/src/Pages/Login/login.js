import React from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { Form, Input, Button, Checkbox, Card, notification } from 'antd';
import { API_BASE_URL } from '../../config';

const Login = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      // values'daki username alanını email olarak değiştiriyoruz.
      const loginData = {
        email: values.username,
        password: values.password
      };

      const response = await axios.post(`${API_BASE_URL}/auth/login`, loginData);

      if (response.data.success) {
        // Optionally set local storage or cookie here if remember me is checked
        if (values.remember) {
          // Set relevant auth tokens or user data in local storage or cookies
        }
        navigate('/'); // Redirect to the home page or dashboard
      } else {
        notification.error({
          message: 'Login Failed',
          description: response.data.message || 'Invalid email or password.',
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
      <Card title="Login" style={{ maxWidth: 600, width: '100%', marginTop: '-20vh', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' }}>
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
            name="email" // Frontend formunu kullanıcı dostu tutmak için "Email" olarak etiketliyoruz ama name'i "username" olarak bırakabiliriz ya da backend ile uyumlu olacak şekilde bu alanı da "email" olarak güncelleyebiliriz.
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
