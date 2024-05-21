import React from "react";
import { Tag } from "antd";

const getStatusColor = (status) => {
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

const RequestStatusTag = ({ status }) => (
  <Tag color={getStatusColor(status)}>{status}</Tag>
);

export default RequestStatusTag;
