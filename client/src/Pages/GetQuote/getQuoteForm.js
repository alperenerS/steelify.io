import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Form, Input, Button, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import FileUpload from "./fileUpload";
import axios from "axios";
import { API_BASE_URL } from "../../config";

const GetQuoteForm = ({ onSubmit, order_id, isPreFilled = false }) => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);
  const [photoList, setPhotoList] = useState([]);

  // Redux state'inden kullanıcı bilgilerini ve token'ı çek
  const userInfo = useSelector((state) => state.user.user);
  const accessToken = useSelector((state) => state.user.token);

  useEffect(() => {
    if (userInfo) {
      form.setFieldsValue({
        customer: userInfo.name,
      });
    }

    if (isPreFilled && order_id) {
      const fetchQuoteDetails = async () => {
        try {
          const response = await axios.get(
            `${API_BASE_URL}/order/${order_id}`,
            {
              headers: { Authorization: `Bearer ${accessToken}` },
            }
          );
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
      };

      fetchQuoteDetails();
    }
  }, [form, order_id, isPreFilled, accessToken, userInfo]);

  const handleFileChange = (newFileList) => {
    setFileList(newFileList);
  };

  const handlePhotoChange = ({ fileList: newPhotoList }) => {
    const filteredList = newPhotoList.filter((file) => {
      if (file.type.startsWith("image/")) {
        return true;
      } else {
        message.error(`${file.name} is not an image file.`, 10);
        return false;
      }
    });

    if (filteredList.length > 10) {
      message.error("You can only upload up to 10 photos.", 10);
      filteredList.length = 10;
    }

    setPhotoList(
      filteredList.map((file) =>
        file.originFileObj ? file.originFileObj : file
      )
    );
  };

  const onFinish = (values) => {
    onSubmit(
      {
        ...values,
        name: userInfo ? userInfo.name : "Guest",
        customer: userInfo ? userInfo.name : "Customer",
        incoterm: "-",
        paymentterm: "-",
        incoterm_description: "-",
        quotation_note: values.quotation_note,
        delivery_date: "2024-02-25",
        status: "Pending Review",
        reference: values.requestNo,
        filename: "-",
      },
      fileList,
      photoList
    );
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
          accept=".jpg,.jpeg,.png"
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
