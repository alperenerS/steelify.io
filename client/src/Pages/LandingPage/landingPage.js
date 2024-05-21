import React from 'react';
import { Row, Col } from 'antd';
import LandingPageHeader from '../../Components/LandingPage/landingPageHeader';
import FeaturesSection from '../../Components/LandingPage/featuresSection';
import InfoSection from '../../Components/LandingPage/infoSection';
import Capabilities from '../../Components/LandingPage/capabilities'

function LandingPage() {
  return (
    <div>
      <LandingPageHeader />
      <Row justify="center">
        <Col xs={24} md={22} lg={20} xl={16}>
          <Capabilities />
          <FeaturesSection />
          {/* <InfoSection /> */}
        </Col>
      </Row>
    </div>
  );
}

export default LandingPage;
