import React, { useState } from 'react';
import { Form, Input, Button, Typography, Card } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import './resetPassword.css'; // Ensure you have the CSS file in the same folder

const { Title } = Typography;

const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = () => {
        if (password !== confirmPassword) {
            console.error('Passwords do not match!');
            // Uygulamada hata mesajı gösterme
            return;
        }
        console.log('Password reset successful:', password);
        // Burada back-end'e bir istek gönderilir
    };

    return (
        <div className="reset-password-container">
            <Card title="Create New Password" className="reset-password-card">
                <Form
                    name="reset_password"
                    onFinish={handleSubmit}
                    className="reset-password-form"
                    layout="vertical"
                >
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: "Please enter your new password." }]}
                    >
                        <Input.Password
                            placeholder="New Password"
                            onChange={e => setPassword(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Confirm Password"
                        name="confirmPassword"
                        rules={[
                            { required: true, message: "Please confirm your new password." },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password
                            placeholder="Confirm New Password"
                            onChange={e => setConfirmPassword(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="reset-password-button">
                            Set New Password
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
};

export default ResetPassword;
