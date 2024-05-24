import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Row, Col } from "antd";
import axios from "axios";
import { API_BASE_URL } from "../../config";
import RequestTable from "./requestTable";
import "./myRequests.css";

const MyRequestsContainer = () => {
  const [orders, setOrders] = useState([]);

  const userInfo = useSelector((state) => state.user.user);
  const accessToken = useSelector((state) => state.user.token);
  const userId = useSelector((state) => state.user.id);

  useEffect(() => {
    const fetchOrders = async () => {
      if (!accessToken || !userInfo || userId === null) {
        console.error("User information, access token, or userId is missing.");
        return;
      }

      const requestUrl = `${API_BASE_URL}/order/userId/${userId}`;
      const headers = {
        Authorization: `Bearer ${accessToken}`,
      };


      try {
        const response = await axios.get(requestUrl, { headers });
        if (response.data && response.data.data) {
          const orders = response.data.data.map((order) => ({
            ...order,
            key: order.id,
            id: parseInt(order.id),
          }));
          setOrders(orders);
        }
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      }
    };

    fetchOrders();
  }, [accessToken, userInfo, userId]);

  return (
    <Row
      justify="center"
      className="myRequestsContainer"
      style={{ marginTop: "5%" }}
    >
      <Col span={24} md={20} lg={18}>
        <RequestTable orders={orders} />
      </Col>
    </Row>
  );
};

export default MyRequestsContainer;
