import React from 'react';
import { Form, Input, Button, Select, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Option } = Select;

const GetQuoteForm = () => {
  const [form] = Form.useForm();

  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

  // const fileProps = {
  //   beforeUpload: file => {
  //     const isCADFile = file.type === 'application/vnd.ms-pki.stl';
  //     if (!isCADFile) {
  //       message.error('You can only upload CAD files!');
  //     }
  //     return isCADFile || Upload.LIST_IGNORE;
  //   },
  //   onChange: info => {
  //     let fileList = [...info.fileList];
  //     fileList = fileList.slice(-1);
  //     console.log('Files:', fileList);
  //   },
  // };

  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      <Form.Item name="projectName" label="Project Name" rules={[{ required: true, message: 'Project name is required!' }]}>
        <Input placeholder="Enter your project name" />
      </Form.Item>
      <Form.Item name="description" label="Project Description">
        <Input.TextArea rows={4} placeholder="Detailed description of your project" />
      </Form.Item>
      <Form.Item name="material" label="Material">
        <Select placeholder="Select material">
          <Option value="steel">Steel</Option>
          <Option value="aluminum">Aluminum</Option>
        </Select>
      </Form.Item>
      <Form.Item name="processType" label="Process Type" rules={[{ required: true, message: 'Please select a process type!' }]}>
        <Select placeholder="Select process type">
          <Option value="cnc">CNC Machining</Option>
          <Option value="3dPrinting">3D Printing</Option>
          <Option value="laserCutting">Laser Cutting</Option>
        </Select>
      </Form.Item>
      <Form.Item name="surfaceTreatment" label="Surface Treatment">
        <Select placeholder="Select surface treatment">
          <Option value="anodized">Anodized</Option>
          <Option value="painted">Painted</Option>
          <Option value="powderCoated">Powder Coated</Option>
        </Select>
      </Form.Item>
      <Form.Item name="quantity" label="Quantity" rules={[{ required: true, message: 'Quantity is required!' }]}>
        <Input type="number" placeholder="Production quantity" />
      </Form.Item>

      <Form.Item name="deliveryTime" label="Preferred Delivery Time">
        <Select placeholder="Select delivery time">
          <Option value="1week">1 Week</Option>
          <Option value="2weeks">2 Weeks</Option>
          <Option value="1month">1 Month</Option>
        </Select>
      </Form.Item>
      <Form.Item name="additionalNotes" label="Additional Notes">
        <Input.TextArea rows={3} placeholder="Any additional notes or special requests for your project" />
      </Form.Item>

      {/* <Form.Item name="upload" label="Project Files">
        <Upload {...fileProps}>
          <Button icon={<UploadOutlined />}>Upload File</Button>
        </Upload>
      </Form.Item> */}
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Get Quote
        </Button>
      </Form.Item>
    </Form>
  );
};

export default GetQuoteForm;
