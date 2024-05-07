import React, { useEffect, useState } from "react";
import { Table, Row, Col, Tag } from "antd";
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
  
      const requestUrl = `${API_BASE_URL}/order`;
      const params = {
        customer: userInfo.name,
      };
      const headers = {
        Authorization: `Bearer ${accessToken}`,
      };
  
      console.log("Sending request to URL:", requestUrl, "with params:", params, "and headers:", headers);
  
      try {
        const response = await axios.get(requestUrl, {
          params: params,
          headers: headers,
        });
  
        if (response.data && response.data.data) {
          const sortedOrders = response.data.data
            .map(order => ({
              ...order,
              key: order.id,
              id: parseInt(order.id), // Ensure the id is an integer
            }))
            .sort((a, b) => a.id - b.id); // Sort by id in ascending order
          setOrders(sortedOrders);
        }
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      }
    };
  
    fetchOrders();
  }, []);
  

  const getStatusColor = status => {
    switch (status) {
      case 'Pending Review':
        return 'volcano';
      case 'Reviewing':
        return 'geekblue';
      case 'Awaiting Approval':
        return 'orange';
      case 'Approved':
        return 'green';
      case 'Rejected':
        return 'red';
      case 'In Production':
        return 'cyan';
      case 'Quality Check':
        return 'blue';
      case 'Ready for Shipment':
        return 'purple';
      case 'In Transit':
        return 'lime';
      case 'Delivered':
        return 'gold';
      case 'Completed':
        return 'green';
      case 'Cancelled':
        return 'red';
      default:
        return 'default';
    }
  };

  const columns = [
    {
      title: "Reference No",
      dataIndex: "reference",
      key: "reference",
    },
    {
      title: "Request No",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Request Date",
      dataIndex: "createdAt",
      key: "createDate",
      render: createdAt => {
        const date = new Date(createdAt);
        const formattedDate = date.toLocaleDateString('en-GB');
        return formattedDate;
      }
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: status => {
        const color = getStatusColor(status);
        return <Tag color={color}>{status}</Tag>;
      }
    },
  ];

  return (
    <Row justify="center" className="myRequestsContainer">
      <Col span={24} md={20} lg={18}>
        <Table
          columns={columns}
          dataSource={orders}
          pagination={{ pageSize: 10, showSizeChanger: false }}
        />
      </Col>
    </Row>
  );
};

export default MyRequests;
