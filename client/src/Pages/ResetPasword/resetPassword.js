import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Form, Input, Button, Result, Card, message } from 'antd';
import axios from 'axios';
import { API_BASE_URL } from "../../config";
import './resetPassword.css';

const ResetPassword = () => {
    const { token } = useParams();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isSuccess, setIsSuccess] = useState(false); // State to track success
    const navigate = useNavigate();

    const handleSubmit = async () => {
        if (password !== confirmPassword) {
            message.error('Passwords do not match!');
            return;
        }

        const requestData = {
            token,
            newPassword: password,
            confirmNewPassword: confirmPassword
        };

        try {
            const response = await axios.put(`${API_BASE_URL}/email-sender/newPasswd`, requestData);
            if (response.status === 201) {
                setIsSuccess(true);  // Set success state to true
            } else {
                message.error('Password reset failed: ' + (response.data.message || 'Unknown error'));
            }
        } catch (error) {
            console.error('Password reset request failed:', error);
            message.error('Password reset failed: ' + (error.response?.data?.message || 'Unknown error'));
        }
    };

    if (isSuccess) {
        return (
            <Result
                status="success"
                title="Your password has been reset successfully!"
                subTitle="Your password has been updated. You can now log in with your new password."
                extra={[
                    <Button type="primary" key="login" onClick={() => navigate('/login')}>
                        Return to Login
                    </Button>
                ]}
            />
        );
    }

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
                        label="New Password"
                        name="password"
                        rules={[{ required: true, message: "Please enter your new password." }]}
                    >
                        <Input.Password onChange={e => setPassword(e.target.value)} />
                    </Form.Item>
                    <Form.Item
                        label="Confirm New Password"
                        name="confirmPassword"
                        rules={[{ required: true, message: "Please confirm your new password." }]}
                    >
                        <Input.Password onChange={e => setConfirmPassword(e.target.value)} />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Set New Password
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
};

export default ResetPassword;
