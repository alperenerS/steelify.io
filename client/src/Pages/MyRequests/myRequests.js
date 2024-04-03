import React, { useEffect, useState } from "react";
import { Table, Row, Col, Badge } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";
import { getUserInfo } from "../../Utils/Auth/authService";
import { API_BASE_URL } from "../../config";
import "./myRequests.css";

const MyRequests = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const accessToken = localStorage.getItem('accessToken');
      const userInfo = getUserInfo();

      if (!accessToken || !userInfo) {
        console.error("User information or access token is missing.");
        return;
      }

      try {
        const response = await axios.get(`${API_BASE_URL}/order/customerName`, {
          params: {
            customer: userInfo.data.name, // userInfo.data.name kullanılarak dinamik customer adı
          },
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (response.data && response.data.data) {
          setOrders(response.data.data);
        }
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      }
    };

    fetchOrders();
  }, []);

  const columns = [
    {
      title: "Order ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: status => {
        let color = status === "3" ? "geekblue" : "green";
        return <Badge status={color} text={status} />;
      }
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Link to={`/request-details/${record.id}`}>View Details</Link>
      ),
    },
  ];

  return (
    <Row justify="center" className="myRequestsContainer">
      <Col span={24} md={20} lg={18}>
        <Table
          columns={columns}
          dataSource={orders}
          pagination={{ pageSize: 10 }}
        />
      </Col>
    </Row>
  );
};

export default MyRequests;
