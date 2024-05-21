import React from "react";
import { Form, Input, Button } from "antd";

const ProfileForm = ({ form, onFinish }) => (
  <Form form={form} layout="vertical" onFinish={onFinish}>
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
);

export default ProfileForm;
