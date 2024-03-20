import React from 'react';
import { Row, Col } from 'antd';
import LandingPageHeader from './landingPageHeader';
import FeaturesSection from './featuresSection';
import InfoSection from './infoSection';

function LandingPage() {
  return (
    <div>
      <LandingPageHeader />
      <Row justify="center">
        <Col xs={24} md={22} lg={20} xl={16}>
          <FeaturesSection />
          <InfoSection />
        </Col>
      </Row>
    </div>
  );
}

export default LandingPage;
