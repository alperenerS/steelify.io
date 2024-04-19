// ActivationNotificationPage.js
import React, { useState } from 'react';
import { Input, Button, Typography, Row, Col } from 'antd';
import { Link } from 'react-router-dom';

const { Title, Text } = Typography;

const ActivationNotification = () => {
  const [activationCode, setActivationCode] = useState('');

  const handleActivate = () => {
    // Aktivasyon kodunu backend'e göndermek için bir işlem yapılabilir.
    console.log("Entered Activation Code:", activationCode);
    // Aktivasyon işlemi sonrası başka bir sayfaya yönlendirme yapılabilir.
  };

  return (
    <div style={{ padding: '40px' }}>
      <Row justify="center" style={{ marginBottom: '20px' }}>
        <Col span={24}>
          <Title level={2} style={{ textAlign: 'center' }}>Registration Successful!</Title>
        </Col>
      </Row>
      <Row justify="center">
        <Col span={24} style={{ textAlign: 'center' }}>
          <Text>We have sent an activation code to your email address. Please enter it below to complete your registration.</Text>
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: '20px' }}>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Input
            placeholder="Enter your activation code here"
            value={activationCode}
            onChange={e => setActivationCode(e.target.value)}
          />
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: '20px' }}>
        <Col>
          <Button type="primary" onClick={handleActivate}>
            Activate Account
          </Button>
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: '20px' }}>
        <Col>
          <Text>If you didn't receive the email, <Link to="/resend">click here to resend it.</Link></Text>
        </Col>
      </Row>
    </div>
  );
};

export default ActivationNotification;
