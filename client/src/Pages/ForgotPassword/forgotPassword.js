import React, { useState } from 'react';
import { Form, Input, Button, Typography, Card } from 'antd';
import './forgotPassword.css'; // Ensure the CSS file is imported correctly

const { Title } = Typography;

const ForgotPassword = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = () => {
        console.log('Sending password reset link to:', email);
        // An API call would be made here to send the reset link
    };

    return (
        <div className="forgot-password-container">
            <Card title="Reset Your Password" className="forgot-password-card">
                <Form
                    name="forgot_password"
                    onFinish={handleSubmit}
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
                            onChange={e => setEmail(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="forgot-password-button">
                            Send Reset Link
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
};

export default ForgotPassword;
