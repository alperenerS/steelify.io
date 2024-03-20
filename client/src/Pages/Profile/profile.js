import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Input, Button, Card, notification } from "antd";
import { API_BASE_URL } from "../../config";

const Profile = () => {
  const [form] = Form.useForm();

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const response = await axios.get(`${API_BASE_URL}/user/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        form.setFieldsValue(response.data);
      } catch (error) {
        notification.error({
          message: "Failed to load profile data",
          description: error.response?.data?.message || "An error occurred while fetching profile data.",
        });
      }
    };

    fetchProfileData();
  }, [form]);

  const handleSubmit = async (values) => {
    try {
      const token = localStorage.getItem("accessToken");
      await axios.patch(`${API_BASE_URL}/user/profile`, values, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      notification.success({
        message: "Profile Updated",
        description: "Your profile has been updated successfully.",
      });
    } catch (error) {
      notification.error({
        message: "Profile Update Failed",
        description: error.response?.data?.message || "An error occurred while updating your profile.",
      });
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "80vh" }}>
      <Card title="My Profile" style={{ maxWidth: 600, width: "100%" }}>
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item label="Email" name="email">
            <Input />
          </Form.Item>
          <Form.Item label="Name" name="name">
            <Input />
          </Form.Item>
          <Form.Item label="Surname" name="surname">
            <Input />
          </Form.Item>
          <Form.Item label="Company Website" name="website">
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Update Profile
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Profile;
