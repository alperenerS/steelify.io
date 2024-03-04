import React from 'react';
import { Row, Col } from 'antd';
import LandingPageHeader from './landingPageHeader';
import FeaturesSection from './featuresSection';
import AboutSteelifySection from './aboutSteelifySection';

function LandingPage() {
  return (
    <div>
      <LandingPageHeader />
      <Row justify="center">
        <Col xs={24} md={20} lg={16} xl={14}>
          <FeaturesSection />
          <AboutSteelifySection />
        </Col>
      </Row>
    </div>
  );
}

export default LandingPage;
