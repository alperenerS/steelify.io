import React from "react";
import { Table, Row, Col, Badge, Button } from "antd";
import { requestsData } from "./requestsData";
import "./myRequests.css";
import { Link } from "react-router-dom";

const MyRequests = () => {
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
          <span
            className={`view-request ${record.details ? "filled" : "empty"}`}
          >
            View Request
          </span>
        </Link>
      ),
    },

    {
      title: "Action",
      dataIndex: "action",
      key: "action",
    },
    {
      title: "State",
      key: "state",
      dataIndex: "state",
      render: (status) => {
        let color = "success";
        let text = "Finished";
        switch (status) {
          case "Delivered":
            color = "success";
            text = "Delivered";
            break;
          case "In Transit":
            color = "processing";
            text = "In Transit";
            break;
          case "Processing":
            color = "warning";
            text = "Processing";
            break;
          case "Cancelled":
            color = "error";
            text = "Cancelled";
            break;
          default:
            break;
        }
        return <Badge status={color} text={text} />;
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
