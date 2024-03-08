import React from 'react';
import { Typography, Row, Col, Card, Divider } from 'antd';
import yetkinsag from './assets/yetkinsag.jpg';
import enverbodur from './assets/enverbodur.jpg';
import alperenalihaner from './assets/alperenalihaner.jpg';
import emremataraci from './assets/emremataraci.jpg';
// import aboutUsImage from './about-us-image.jpg';
// import buyersImage from './buyers-image.jpg';
// import workshopsImage from './workshops-image.jpg';
// import innovationImage from './innovation-image.jpg'; // İnovasyon ile ilgili bir resim

const { Title, Paragraph } = Typography;

const AboutUs = () => {
  return (
    <div style={{ padding: '50px' }}>
      {/* About Steelify */}
      <Row gutter={[16, 16]} align="middle">
        <Col span={12}>
          <Typography>
            <Title>About Steelify</Title>
            <Paragraph>
              Steelify is a multi-sided business platform, offering manufacturing as a service in steel & aluminium fabrication and reliable services at competitive prices with flexible and scalable solutions. We tackle the challenge of connecting high-quality product seekers with workshops that often struggle to find high tier customers and deal with unpredictable orders.
            </Paragraph>
          </Typography>
        </Col>
        <Col span={12}>
          {/* <Image src={aboutUsImage} alt="Steelify Platform" /> */}
        </Col>
      </Row>
      <Divider />

      {/* For Industrial Buyers */}
      <Row gutter={[16, 16]} align="middle" style={{ marginTop: '50px' }}>
        <Col span={12}>
          {/* <Image src={buyersImage} alt="Industrial Buyers" /> */}
        </Col>
        <Col span={12}>
          <Typography>
            <Title level={2}>For Industrial Buyers</Title>
            <Paragraph>
              Experience streamlined procurement with Steelify, ensuring on-time delivery, premium quality, diverse supply options, and enhanced trust and traceability. Our platform is designed to simplify the procurement process, making it easier for you to access the best products and services in the market.
            </Paragraph>
          </Typography>
        </Col>
      </Row>
      <Divider />

      {/* For Small Workshops */}
      <Row gutter={[16, 16]} align="middle" style={{ marginTop: '50px' }}>
        <Col span={12}>
          <Typography>
            <Title level={2}>For Small Workshops</Title>
            <Paragraph>
              Gain access to a world without borders with Steelify. We offer increased demand, robust support ensuring financial trust, and enhanced quality management for small workshops, empowering them to expand their reach and scale their operations effectively.
            </Paragraph>
          </Typography>
        </Col>
        <Col span={12}>
          {/* <Image src={workshopsImage} alt="Small Workshops" /> */}
        </Col>
      </Row>
      <Divider />

      {/* Innovation and Technology */}
      <Row gutter={[16, 16]} align="middle" style={{ marginTop: '50px' }}>
        <Col span={12}>
          {/* <Image src={innovationImage} alt="Innovation" /> */}
        </Col>
        <Col span={12}>
          <Typography>
            <Title level={2}>Innovation and Technology</Title>
            <Paragraph>
              At the core of Steelify lies our commitment to innovation and the use of cutting-edge technology. We leverage artificial intelligence to efficiently connect buyers and sellers, optimizing the manufacturing process and fostering the development of sustainable solutions for the future.
            </Paragraph>
          </Typography>
        </Col>
      </Row>
      <Divider />
      <div style={{ padding: '50px' }}>
      {/* Meet Our Team - Başlığı ortalamak için eklenen div */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <Typography>
          <Title level={2}>Meet Our Team</Title>
        </Typography>
      </div>
      <Row gutter={[10, 10]} justify="center">
        <Col span={4}>
          <a href="https://www.linkedin.com/in/yetkinsag" target="_blank" rel="noopener noreferrer">
            <Card hoverable cover={<img alt="Yetkin Sağ" src={yetkinsag} />}>
              <Card.Meta title="Yetkin Sağ" description="CEO / Founder" />
            </Card>
          </a>
        </Col>
        <Col span={4}>
          <a href="https://www.linkedin.com/in/enverbodur" target="_blank" rel="noopener noreferrer">
            <Card hoverable cover={<img alt="Enver Bodur" src={enverbodur} />}>
              <Card.Meta title="Enver Bodur" description="Operation Manager" />
            </Card>
          </a>
        </Col>
        <Col span={4}>
          <a href="https://www.linkedin.com/in/alperen-alihan-er-910050151" target="_blank" rel="noopener noreferrer">
            <Card hoverable cover={<img alt="Alperen Alihan Er" src={alperenalihaner} />}>
              <Card.Meta title="Alperen Alihan Er" description="Chief Technology Officer" />
            </Card>
          </a>
        </Col>
        <Col span={4}>
          <a href="https://www.linkedin.com/in/emremataraci" target="_blank" rel="noopener noreferrer">
            <Card hoverable cover={<img alt="Emre Mataracı" src={emremataraci} />}>
              <Card.Meta title="Emre Mataracı" description="Software Engineer" />
            </Card>
          </a>
        </Col>
      </Row>
    </div>
    </div>
  );
};

export default AboutUs;
