import React, { useEffect } from "react";
import axios from "axios";
import { Form } from "antd";
import ProfileCard from "../../Components/Profile/profileCard";
import {
  showProfileLoadError,
  showProfileUpdateSuccess,
  showProfileUpdateError,
} from "../../Components/Profile/profileNotification";
import { API_BASE_URL } from "../../config";

const ProfilePage = () => {
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
        showProfileLoadError(error.response?.data?.message);
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

      showProfileUpdateSuccess();
    } catch (error) {
      showProfileUpdateError(error.response?.data?.message);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "80vh" }}>
      <ProfileCard form={form} onFinish={handleSubmit} />
    </div>
  );
};

export default ProfilePage;
