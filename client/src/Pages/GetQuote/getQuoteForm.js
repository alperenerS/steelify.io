import React, { useEffect, useState } from "react";
import { Form, Input, Button, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import FileUpload from "./fileUpload";
import axios from "axios";
import { API_BASE_URL } from "../../config";
import { getUserInfo } from "../../Utils/Auth/authService";

const GetQuoteForm = ({ onSubmit, order_id, isPreFilled = false }) => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);
  const [photoList, setPhotoList] = useState([]);

  useEffect(() => {
    const userInfo = getUserInfo();
    if (userInfo) {
      form.setFieldsValue({
        customer: userInfo.name,
      });
    }

    const fetchQuoteDetails = async () => {
      if (isPreFilled && order_id) {
        try {
          const response = await axios.get(`${API_BASE_URL}/order/${order_id}`);
          if (response.data && response.data.data) {
            form.setFieldsValue({
              ...response.data.data,
              quotation_note: response.data.data.quotation_note,
            });
            setFileList(
              response.data.orderDocs.filename.map((name, index) => ({
                uid: index,
                name: name,
                status: "done",
                url: response.data.orderDocs.file_link[index],
              }))
            );
            setPhotoList(
              response.data.photos.filename.map((name, index) => ({
                uid: index,
                name: name,
                status: "done",
                url: response.data.photos.filelink[index],
              }))
            );
          }
        } catch (error) {
          console.error("Failed to fetch quote details:", error);
          message.error("Failed to load quote details.");
        }
      }
    };

    fetchQuoteDetails();
  }, [form, order_id, isPreFilled]);

  const handleFileChange = (newFileList) => {
    setFileList(newFileList);
  };

  const handlePhotoChange = ({ fileList: newPhotoList }) => {
    const newPhotos = newPhotoList.map((file) =>
      file.originFileObj ? file.originFileObj : file
    );
    setPhotoList(newPhotos);
  };

  const onFinish = (values) => {
    const userInfo = getUserInfo();
    const extendedValues = {
      ...values,
      name: userInfo ? userInfo.name : "Guest",
      customer: userInfo ? userInfo.name : "Customer",
      incoterm: "-",
      paymentterm: "-",
      incoterm_description: "-",
      quotation_note: values.quotation_note,
      delivery_date: "2024-02-25",
      status: "Pending Review",
      reference: "-",
      filename: "-",
    };
    onSubmit(extendedValues, fileList, photoList);
  };

  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      <Form.Item>
        <FileUpload onFileListChange={handleFileChange} />
      </Form.Item>
      <Form.Item
        name="quotation_note"
        label="Details"
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
      <Form.Item name="requestNo" label="Request No">
        <Input placeholder="Please provide your request number" />
      </Form.Item>
      <Form.Item
        name="productPhotos"
        label="Product Photos"
        extra="Packaging or in-built photos will help us to accelerate the quotation process."
      >
        <Upload
          name="samplePhotos"
          listType="picture"
          multiple={true}
          beforeUpload={() => false}
          onChange={handlePhotoChange}
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
