import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import axios from 'axios';
import { API_BASE_URL } from '../../config';

const ResetPasswordForm = ({ token, onSuccess }) => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

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
                onSuccess();  // Notify parent component of success
            } else {
                message.error('Password reset failed: ' + (response.data.message || 'Unknown error'));
            }
        } catch (error) {
            console.error('Password reset request failed:', error);
            message.error('Password reset failed: ' + (error.response?.data?.message || 'Unknown error'));
        }
    };

    return (
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
    );
};

export default ResetPasswordForm;
