import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Form, Input, Button, List } from "antd";
import axios from "axios";
import { API_BASE_URL } from "../../config";

const GetQuoteDetails = () => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);
  const navigate = useNavigate();
  const { order_id } = useParams();

  useEffect(() => {
    const fetchQuoteDetails = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/order/${order_id}`);
        if(response.data && response.data.data) {
          // Form alanlarını doldur
          form.setFieldsValue({
            requestNumber: response.data.data.name, // Örnek olarak 'name' kullanıldı, gelen veriye göre güncelleyin
            details: response.data.data.details // 'details' verisini form alanına ata
          });
          // Dosya listesini ayarla (dosya adı ve linki örneği, gerçek veri yapınıza göre değiştirin)
          setFileList(response.data.orderDocs.filename.map((name, index) => ({
            name,
            url: response.data.orderDocs.file_link[index]
          })));
        }
      } catch (error) {
        console.error("Failed to fetch quote details:", error);
      }
    };

    fetchQuoteDetails();
  }, [form, order_id]);

  const goBack = () => {
    navigate(`/get-quote/${order_id}`);
  };
  

  return (
    <div>
      <h2>Request Details</h2>
      <Form form={form} layout="vertical">
        <Form.Item name="requestNumber" label="Request Number">
          <Input disabled />
        </Form.Item>
        <Form.Item name="details" label="Details">
          <Input.TextArea disabled />
        </Form.Item>
        {/* İhtiyacınıza göre diğer form alanları */}
      </Form>
      <List
        header={<div>Uploaded Files</div>}
        bordered
        dataSource={fileList}
        renderItem={(item) => (
          <List.Item>
            <a href={item.url} target="_blank" rel="noopener noreferrer">{item.name}</a>
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
