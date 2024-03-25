import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, List } from "antd";
import axios from "axios";

const GetQuoteDetails = () => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // API'den quote detaylarını çekme simülasyonu
    const fetchQuoteDetails = async () => {
      try {
        const response = await axios.get("YOUR_API_ENDPOINT"); // API'nizden detayları çekin
        form.setFieldsValue(response.data); // Formu API'den alınan verilerle doldurun
        setFileList(response.data.files); // Dosya listesini ayarlayın
      } catch (error) {
        console.error("Failed to fetch quote details:", error);
      }
    };

    fetchQuoteDetails();
  }, [form]);

  const goBack = () => {
    navigate("/get-quote"); // Kullanıcıyı '/get-quote' adresine yönlendir
  };

  return (
    <div>
      <h2>Request Details</h2>
      <Form form={form} layout="vertical">
        {/* Form alanlarınız */}
        <Form.Item name="requestNumber" label="Request Number">
          <Input disabled />
        </Form.Item>
        <Form.Item name="details" label="Details">
          <Input disabled rows={4} />
        </Form.Item>
        {/* Diğer form alanlarınız */}
      </Form>
      <List
        header={<div>Uploaded Files</div>}
        bordered
        dataSource={fileList}
        renderItem={(item) => (
          <List.Item>
            {item.name} {/* Dosya adı veya başka bir özellik */}
          </List.Item>
        )}
      />
      <Button onClick={goBack} type="link">
        Back to Get Quote
      </Button>
    </div>
  );
};

export default GetQuoteDetails;
