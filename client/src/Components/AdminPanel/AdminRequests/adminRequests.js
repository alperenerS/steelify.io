import React, { useState, useEffect } from "react";
import { Row, Col, Typography, notification } from "antd";
import { AdminRequestTable } from "../../../Components/AdminRequests";
import { getAllRequests } from "../../../API/AdminRequests/getAllRequests";

const { Title } = Typography;

const AdminRequests = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const data = await getAllRequests();
        setRequests(data);
      } catch (error) {
        notification.error({
          message: "Failed to fetch requests",
          description: error.message || "Something went wrong, please try again later."
        });
      }
    };

    fetchRequests();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <Row justify="center">
        <Col span={22}>
          <Title level={2}>All User Requests</Title>
          <AdminRequestTable orders={requests} />
        </Col>
      </Row>
    </div>
  );
};

export default AdminRequests;
