import React from 'react';
import { Form, Input, Button } from 'antd';

const ForgotPasswordForm = ({ onFinish, onChange }) => (
  <Form
    name="forgot_password"
    onFinish={onFinish}
    className="forgot-password-form"
    layout="vertical"
  >
    <Form.Item
      label="Email"
      name="email"
      rules={[
        { required: true, message: 'Please enter your email address.' },
        { type: 'email', message: 'Please enter a valid email address!' }
      ]}
    >
      <Input
        placeholder="Enter your email"
        onChange={e => onChange(e.target.value)}
      />
    </Form.Item>
    <Form.Item>
      <Button type="primary" htmlType="submit" className="forgot-password-button">
        Send Reset Link
      </Button>
    </Form.Item>
  </Form>
);

export default ForgotPasswordForm;
