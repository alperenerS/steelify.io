import React from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
  Button,
  Cascader,
  Checkbox,
  ColorPicker,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
} from 'antd';
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
const Register = () => {
  return (
    <>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        style={{
          maxWidth: 600,
        }}
      >
        <Form.Item label="Email">
          <Input />
        </Form.Item>
        <Form.Item label="Password">
          <Input />
        </Form.Item>,
        <Form.Item label="Name">
          <Input />
        </Form.Item>
        <Form.Item label="Last Name">
          <Input />
        </Form.Item>
        <Form.Item label="Company Website">
          <Input />
        </Form.Item>
        <Form.Item label="Role">
          <Select>
            <Select.Option value="demo">Customer</Select.Option>
            <Select.Option value="demo">Vendor</Select.Option>
          </Select>
        </Form.Item>

      </Form>
    </>
  );
};
export default () => <Register />;
