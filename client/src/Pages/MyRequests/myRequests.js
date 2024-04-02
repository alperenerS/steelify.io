import React, { useEffect, useState } from "react";
import { Table, Row, Col, Badge } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";
import { getUserInfo } from "../../Utils/Auth/authService"; // Yolunuz proje yapınıza göre değişebilir
import { API_BASE_URL } from "../../config"; // Yolunuz proje yapınıza göre değişebilir
import "./myRequests.css";

const MyRequests = () => {
  const [requestsData, setRequestsData] = useState([]);

  useEffect(() => {
    const fetchOrdersByCustomer = async () => {
      const customerName = "emre"; // Dinamik olarak kullanıcıdan alınabilir
      const accessToken = localStorage.getItem('accessToken');
  
      if (accessToken) {
        try {
          const response = await axios.get(`${API_BASE_URL}/order/customerName`, {
            params: {
              customer: customerName,
            },
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
  
          console.log(response.data); // Çekilen siparişler
        } catch (error) {
          console.error("Siparişler çekilirken bir hata oluştu:", error.response ? error.response.data : error);
        }
      }
    };
  
    fetchOrdersByCustomer();
  }, []);
  
  

  const columns = [
    {
      title: "Request Number",
      dataIndex: "requestNumber",
      key: "requestNumber",
      sorter: (a, b) => a.requestNumber.localeCompare(b.requestNumber),
    },
    {
      title: "Reference Number",
      dataIndex: "referenceNumber",
      key: "referenceNumber",
      sorter: (a, b) => a.referenceNumber.localeCompare(b.referenceNumber),
    },
    {
      title: "Request Date",
      dataIndex: "requestDate",
      key: "requestDate",
      sorter: (a, b) => a.requestDate.localeCompare(b.requestDate),
    },
    {
      title: "Details",
      dataIndex: "details",
      key: "Details",
      render: (text, record) => (
        <Link to={`/request-details/${record.key}`}>
          <span className={`view-request ${record.details ? "filled" : "empty"}`}>
            View Request
          </span>
        </Link>
      ),
    },
    {
      title: "State",
      key: "state",
      dataIndex: "state",
      render: (status) => {
        let color = status === "Delivered" ? "success" :
                    status === "In Transit" ? "processing" :
                    status === "Processing" ? "warning" : "error";
        return <Badge status={color} text={status} />;
      },
    },
  ];

  return (
    <Row justify="center" className="myRequestsContainer">
      <Col span={24} md={20} lg={18}>
        <Table
          columns={columns}
          dataSource={requestsData}
          pagination={{ pageSize: 10 }}
        />
      </Col>
    </Row>
  );
};

export default MyRequests;
