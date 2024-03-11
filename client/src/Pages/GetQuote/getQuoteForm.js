import React from "react";
import { Form, Input, Button, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const GetQuoteForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const onUploadChange = (info) => {
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      <Form.Item
        name="description"
        label="Description"
        rules={[
          {
            required: true,
            message: "Please enter your project/product description!",
          },
        ]}
      >
        <Input.TextArea
          rows={4}
          placeholder="Please describe your project/product requirements: Such as material, finish, tolerances, and your other needs."
        />
      </Form.Item>

      <Form.Item
        name="reference"
        label="Reference"
        rules={[{ required: false, message: "Please provide a reference!" }]}
      >
        <Input placeholder="Your reference number" />
      </Form.Item>

      <Form.Item
        name="samplePhotos"
        label="Sample Photos"
        valuePropName="fileList"
        getValueFromEvent={(e) => {
          if (Array.isArray(e)) {
            return e;
          }
          return e && e.fileList;
        }}
        extra="Please upload product photos as final, packaged or in use"
      >
        <Upload
          name="samplePhotos"
          action="/upload"
          listType="picture"
          multiple={false}
          onChange={onUploadChange}
        >
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Get Quote
        </Button>
      </Form.Item>
    </Form>
  );
};

export default GetQuoteForm;
