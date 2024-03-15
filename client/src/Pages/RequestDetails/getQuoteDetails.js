import React from 'react';
import { Typography, Collapse } from 'antd';

const { Panel } = Collapse;
const { Title } = Typography;

const GetQuoteDetails = ({ orderDetails, status }) => {
  const headerTitle = `Request ${status === 'order' ? 'Order' : 'Request'} Preview`;

  return (
    <Collapse defaultActiveKey={['1']} ghost>
      <Panel header={headerTitle} key="1">
        <Title level={5}>Shipping Address:</Title>
        <p>{orderDetails.shippingAddress}</p>
      </Panel>
    </Collapse>
  );
};

export default GetQuoteDetails;
