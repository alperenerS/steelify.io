// OrdersTable.js
import React from 'react';
import { Table } from 'antd';

export const OrdersTable = ({ data }) => {
  const columns = [
    {
      title: 'Sipariş Numarası',
      dataIndex: 'orderNumber',
      key: 'orderNumber',
      sorter: (a, b) => a.orderNumber - b.orderNumber,
    },
    {
      title: 'Müşteri Adı',
      dataIndex: 'customerName',
      key: 'customerName',
      sorter: (a, b) => a.customerName.localeCompare(b.customerName),
    },
    // Diğer sütunlarınızı buraya ekleyin
  ];

  return <Table columns={columns} dataSource={data} rowKey="id" />;
};
