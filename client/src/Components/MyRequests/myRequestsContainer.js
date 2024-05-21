import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { Row, Col } from "antd";
import axios from "axios";
import { API_BASE_URL } from "../../config";
import RequestTable from "./requestTable";
import "./myRequests.css";

const MyRequestsContainer = () => {
  const [orders, setOrders] = useState([]);

  const userInfo = useSelector(state => state.user.user);
  const accessToken = useSelector(state => state.user.token);

  useEffect(() => {
    const fetchOrders = async () => {
      if (!accessToken || !userInfo) {
        console.error("User information or access token is missing.");
        return;
      }

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

  return (
    <Row justify="center" className="myRequestsContainer" style={{ marginTop: '5%' }}>
      <Col span={24} md={20} lg={18}>
        <RequestTable orders={orders} />
      </Col>
    </Row>
  );
};

export default MyRequestsContainer;
