import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { Table, Row, Col, Tag, Button } from "antd";
import axios from "axios";
import { API_BASE_URL } from "../../config";
import "./myRequests.css";

const MyRequests = () => {
  const [orders, setOrders] = useState([]);

  const userInfo = useSelector(state => state.user.user);
  const accessToken = useSelector(state => state.user.token);

  useEffect(() => {
    const fetchOrders = async () => {
      if (!accessToken || !userInfo) {
        console.error("User information or access token is missing.");
        return;
      }
  
      // Updated API request URL to include the customer name query directly in the URL.
      const requestUrl = `${API_BASE_URL}/order/customerName?customer=${encodeURIComponent(userInfo.name)}`;
  
      const headers = {
        Authorization: `Bearer ${accessToken}`,
      };
  
      console.log("Sending request to URL:", requestUrl, "with headers:", headers);
  
      try {
        const response = await axios.get(requestUrl, { headers });
        if (response.data && response.data.data) {
          const sortedOrders = response.data.data
            .map(order => ({
              ...order,
              key: order.id,
              id: parseInt(order.id),
            }))
            .sort((a, b) => a.id - b.id);
          setOrders(sortedOrders);
        }
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      }
    };
  
    fetchOrders();
  }, [accessToken, userInfo]);
  

  const getStatusColor = status => {
    switch (status) {
      case 'Pending Review': return 'volcano';
      case 'Reviewing': return 'geekblue';
      case 'Awaiting Approval': return 'orange';
      case 'Approved': return 'green';
      case 'Rejected': return 'red';
      case 'In Production': return 'cyan';
      case 'Quality Check': return 'blue';
      case 'Ready for Shipment': return 'purple';
      case 'In Transit': return 'lime';
      case 'Delivered': return 'gold';
      case 'Completed': return 'green';
      case 'Cancelled': return 'red';
      default: return 'default';
    }
  };

  const columns = [
    { title: "Reference No", dataIndex: "reference", key: "reference" },
    { title: "Request No", dataIndex: "name", key: "name" },
    {
      title: "Request Date", dataIndex: "createdAt", key: "createDate",
      render: createdAt => new Date(createdAt).toLocaleDateString('en-GB')
    },
    {
      title: "Status", dataIndex: "status", key: "status",
      render: status => <Tag color={getStatusColor(status)}>{status}</Tag>
    },
    {
      title: "Details",
      dataIndex: "incoterm_description",
      key: "incoterm_description",
      render: (text) => text.startsWith("https") ? <a href={text} target="_blank" rel="noopener noreferrer">View Details</a> : text
    }
    
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
