import React from "react";
import { Table } from "antd";
import RequestStatusTag from "../MyRequests/requestStatusTag";

const AdminRequestTable = ({ orders }) => {
  const columns = [
    { title: "User", dataIndex: "user", key: "user" },
    { title: "Reference No", dataIndex: "reference", key: "reference" },
    { title: "Request No", dataIndex: "name", key: "name" },
    {
      title: "Request Date", dataIndex: "createdAt", key: "createDate",
      render: createdAt => new Date(createdAt).toLocaleDateString('en-GB')
    },
    {
      title: "Status", dataIndex: "status", key: "status",
      render: status => <RequestStatusTag status={status} />
    },
    {
      title: "Details",
      dataIndex: "incoterm_description",
      key: "incoterm_description",
      render: (text) => text.startsWith("https") ? <a href={text} target="_blank" rel="noopener noreferrer">View Details</a> : text
    }
  ];

  return (
    <Table
      columns={columns}
      dataSource={orders}
      pagination={{ pageSize: 10, showSizeChanger: false }}
    />
  );
};

export default AdminRequestTable;
