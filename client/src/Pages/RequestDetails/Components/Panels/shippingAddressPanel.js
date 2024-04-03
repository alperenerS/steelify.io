import React, { useEffect, useState } from 'react';
import { Form, Input } from 'antd';
import { getUserInfo } from '../../../../Utils/Auth/authService';

const ShippingAddressPanel = ({ form }) => {
  const [initialValues, setInitialValues] = useState({
    shippingCountry: "000",
    shippingStreet: "000",
    shippingCity: "000",
    shippingProvince: "000",
    shippingZip: "000",
    phone: "000", // Varsayılan telefon numarası
    email: "default@example.com" // Bu, kullanıcı bilgisi çekildikten sonra güncellenecek
  });

  useEffect(() => {
    const userInfo = getUserInfo();
    if (userInfo) {
      form.setFieldsValue({
        email: userInfo.email, // Kullanıcının emailini form'a ayarla
      });
      setInitialValues(prevValues => ({ ...prevValues, email: userInfo.email }));
    }
  }, [form]);

  const checkFieldsCompletion = () => {
    const values = form.getFieldsValue();
    const fields = ['shippingCountry', 'shippingStreet', 'shippingCity', 'shippingProvince', 'shippingZip', 'phone', 'email'];
    return fields.every(field => values[field]);
  };

  return (
    <Form.Item name="shippingAddressPanel">
        <Form.Item label="Country" name="shippingCountry">
          <Input placeholder="Enter your country" />
        </Form.Item>
        <Form.Item label="Street Address" name="shippingStreet">
          <Input placeholder="Enter your street address" />
        </Form.Item>
        <Form.Item label="City" name="shippingCity">
          <Input placeholder="Enter your city" />
        </Form.Item>
        <Form.Item label="Province" name="shippingProvince">
          <Input placeholder="Enter your province" />
        </Form.Item>
        <Form.Item label="Zip Code" name="shippingZip">
          <Input placeholder="Enter your zip code" />
        </Form.Item>
    </Form.Item>
  );
};

export default ShippingAddressPanel;
