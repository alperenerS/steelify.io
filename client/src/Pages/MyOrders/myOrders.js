// MyOrders.js
import React from "react";
import { Table, Row, Col, Badge} from "antd";
import { ordersData } from "./ordersData"; // Örnek veri dosyasını import edin
import "./myOrders.css";

const MyOrders = () => {
  const columns = [
    {
      title: "Order Number",
      dataIndex: "orderNumber",
      key: "orderNumber",
      sorter: (a, b) => a.orderNumber.localeCompare(b.orderNumber),
    },
    {
      title: "Order Number",
      dataIndex: "orderNumber",
      key: "orderNumber",
      sorter: (a, b) => a.orderNumber.localeCompare(b.orderNumber),
    },
    {
      title: "Customer Name",
      dataIndex: "customerName",
      key: "customerName",
      sorter: (a, b) => a.customerName.localeCompare(b.customerName),
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      sorter: (a, b) => a.orderNumber.localeCompare(b.orderNumber),
    },
    {
      title: "Order Date",
      dataIndex: "orderDate",
      key: "orderDate",
      sorter: (a, b) => a.orderNumber.localeCompare(b.orderNumber),
    },
    {
      title: "Delivery Status",
      dataIndex: "deliveryStatus",
      key: "deliveryStatus",
      sorter: (a, b) => a.orderNumber.localeCompare(b.orderNumber),
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "deliveryStatus",
      render: (status) => {
        let color = "success"; // Varsayılan renk
        let text = "Finished"; // Varsayılan metin
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
            // Varsayılan değerler kullanılır
            break;
        }
        return <Badge status={color} text={text} />;
      },
    },
  ];

  return (
    <Row justify="center" className="myOrdersContainer">
      <Col span={24} md={20} lg={18}>
        <Table
          columns={columns}
          dataSource={ordersData}
          pagination={{ pageSize: 10 }}
        />
      </Col>
    </Row>
  );
};

export default MyOrders;