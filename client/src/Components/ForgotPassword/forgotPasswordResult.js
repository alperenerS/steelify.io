import React from 'react';
import { Result, Button } from 'antd';

const ForgotPasswordResult = ({ status, title, subTitle, onBackHome }) => (
  <Result
    status={status}
    title={title}
    subTitle={subTitle}
    extra={[
      <Button type="primary" key="console" onClick={onBackHome}>
        Return to Homepage
      </Button>
    ]}
  />
);

export default ForgotPasswordResult;
