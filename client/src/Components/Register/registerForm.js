import React, { useState, useEffect } from "react";
import { Form, Input, Select, Button, Checkbox } from "antd";
import TermsAndConditionsPopup from "./termsAndConditionsPopup";

const RegisterForm = ({ onFinish }) => {
  const [form] = Form.useForm();
  const [agreementChecked, setAgreementChecked] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    form.setFieldsValue({ agreement: agreementChecked });
  }, [agreementChecked, form]);

  const validatePassword = (_, value) => {
    if (!value || value === form.getFieldValue('password')) {
      return Promise.resolve();
    }
    return Promise.reject(new Error('The two passwords that you entered do not match!'));
  };

  const handleAgree = (isChecked) => {
    setAgreementChecked(isChecked);
  };

  const showTermsAndConditionsPopup = () => {
    setIsPopupVisible(true);
  };

  const closeTermsAndConditionsPopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <>
      <Form
        form={form}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        layout="horizontal"
        initialValues={{ agreement: false }}
        onFinish={onFinish}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please enter your email address." }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please enter your password." }]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="Confirm Password"
          name="confirmPassword"
          dependencies={['password']}
          hasFeedback
          rules={[
            { required: true, message: "Please confirm your password." },
            { validator: validatePassword }
          ]}
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
          rules={[{ required: true, message: "Please enter your last name." }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Company Website"
          name="website"
          rules={[{ required: true, message: "Please enter your company website." }]}
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
          <Checkbox checked={agreementChecked} onChange={(e) => setAgreementChecked(e.target.checked)}>
            I acknowledge and accept the
          </Checkbox>
          <a onClick={showTermsAndConditionsPopup} style={{ marginLeft: -5 }}>Terms & Conditions</a>.
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>

      <TermsAndConditionsPopup
        isVisible={isPopupVisible}
        onClose={closeTermsAndConditionsPopup}
        onAgree={handleAgree}
        initialChecked={agreementChecked}
      />
    </>
  );
};

export default RegisterForm;
