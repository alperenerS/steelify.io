import React, { useState } from 'react';
import { Form, Input, Button, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import FileUpload from './fileUpload';

const GetQuoteForm = ({ onSubmit }) => {
    const [form] = Form.useForm();
    const [fileList, setFileList] = useState([]);
    const [photoList, setPhotoList] = useState([]);

    const handleFileChange = (newFileList) => {
      setFileList(newFileList);
  };
  

    const handlePhotoChange = ({ fileList: newPhotoList }) => {
        const newPhotos = newPhotoList.map(file => 
            (file.originFileObj ? file.originFileObj : file)
        );
        setPhotoList(newPhotos);
    };

    const onFinish = (values) => {
        onSubmit(values, fileList, photoList);
    };

    return (
        <Form form={form} layout="vertical" onFinish={onFinish}>
            <Form.Item>
            <FileUpload onFileListChange={handleFileChange} />
            </Form.Item>
            <Form.Item
                name="details"
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

            <Form.Item
                name="requestNo"
                label="Request No"
            >
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
