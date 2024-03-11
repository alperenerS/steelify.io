import React from 'react';
import { Row, Col } from 'antd';
import LandingPageHeader from './landingPageHeader';
import FeaturesSection from './featuresSection';
import AboutSteelifySection from './aboutSteelifySection';
import InfoSection from './infoSection';

function LandingPage() {
  return (
    <div>
      <LandingPageHeader />
      <Row justify="center">
        <Col xs={24} md={20} lg={16} xl={14}>
          <FeaturesSection />
          {/* <AboutSteelifySection /> */}
          <InfoSection />
        </Col>
      </Row>
    </div>
  );
}

export default LandingPage;
