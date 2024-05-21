import React from "react";
import { Card } from "antd";
import ProfileForm from "./profileForm";

const ProfileCard = ({ form, onFinish }) => (
  <Card title="My Profile" style={{ maxWidth: 600, width: "100%" }}>
    <ProfileForm form={form} onFinish={onFinish} />
  </Card>
);

export default ProfileCard;
