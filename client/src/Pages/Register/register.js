import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import {
  Form,
  Input,
  Select,
  Button,
  Checkbox,
  notification,
  Card,
} from "antd";
import { API_BASE_URL } from "../../config";
import TermsAndConditionsPopup from "./termsAndConditionsPopup";

const Register = () => {
  const navigate = useNavigate();
  const [termsAndConditionsPopupVisible, setTermsAndConditionsPopupVisible] =
    useState(false);

  const handleSubmit = async (values) => {
    if (!values.agreement) {
      notification.error({
        message: "Registration Failed",
        description: "You must agree to the terms and conditions.",
      });
      return;
    }

    try {
      const response = await axios.post(
        `${API_BASE_URL}/auth/register`,
        values
      );

      if (response.data.success) {
        navigate("/");
      } else {
        notification.error({
          message: "Registration Failed",
          description: "An unexpected error occurred. Please try again.",
        });
      }
    } catch (error) {
      notification.error({
        message: "Registration Failed",
        description: `An error occurred. Please try again. ${
          error.response?.data?.error || "An unexpected error occurred."
        }`,
      });
    }
  };

  //  Popup on/off functions
  const showTermsAndConditionsPopup = () =>
    setTermsAndConditionsPopupVisible(true);
  const hideTermsAndConditionsPopup = () =>
    setTermsAndConditionsPopupVisible(false);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        paddingTop: "0vh",
      }}
    >
      <Card
        title="Register"
        style={{
          maxWidth: 600,
          width: "100%",
          boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
          marginTop: "-10vh",
        }}
      >
        <Form
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          layout="horizontal"
          onFinish={handleSubmit}
        >
          {/* Diğer form elemanları */}
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please enter your email address." },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter your password." }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please enter your name." }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Surname"
            name="surname"
            rules={[
              { required: true, message: "Please enter your last name." },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Company Website"
            name="website"
            rules={[
              { required: true, message: "Please enter your company website." },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Role"
            name="userType"
            rules={[{ required: true, message: "Please select your role." }]}
          >
            <Select>
              <Select.Option value="customer">Customer</Select.Option>
              <Select.Option value="vendor">Vendor</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="agreement"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(
                        new Error("You must agree to the terms and conditions.")
                      ),
              },
            ]}
          >
            <Checkbox>
              I acknowledge and accept the{" "}
              <a onClick={showTermsAndConditionsPopup}>Terms & Conditions</a>.
            </Checkbox>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
        <div style={{ marginTop: 16, textAlign: "center" }}>
          Already have an account? <Link to="/login">Click to Login</Link>
        </div>
        <TermsAndConditionsPopup
          isVisible={termsAndConditionsPopupVisible}
          onClose={hideTermsAndConditionsPopup}
        />
      </Card>
    </div>
  );
};

export default Register;
