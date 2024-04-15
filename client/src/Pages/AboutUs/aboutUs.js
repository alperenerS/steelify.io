import React from 'react';
import { Typography, Row, Col, Card, Divider } from 'antd';
import yetkinsag from './assets/yetkinsag.png';
import enverbodur from './assets/enverbodur.png';
import alperenalihaner from './assets/alperenalihaner.png';
import emremataraci from './assets/emremataraci.png';

const { Title, Paragraph } = Typography;

const AboutUs = () => {
  return (
    <div style={{ padding: '50px' }}>
      <Row justify="center" >
        <Col span={8}>
          <Typography>
            <Title>About Steelify</Title>
            <Paragraph>
              Steelify is a multi-sided business platform, offering manufacturing as a service in steel & aluminium fabrication and reliable services at competitive prices with flexible and scalable solutions. We tackle the challenge of connecting high-quality product seekers with workshops that often struggle to find high tier customers and deal with unpredictable orders.
            </Paragraph>
          </Typography>
        </Col>
        <Col span={8}>
        </Col>
      </Row>
      <Divider />

      <Row justify="center" >
        <Col span={8}>
        </Col>
        <Col span={8}>
          <Typography>
            <Title level={2}>For Industrial Buyers</Title>
            <Paragraph>
              Experience streamlined procurement with Steelify, ensuring on-time delivery, premium quality, diverse supply options, and enhanced trust and traceability. Our platform is designed to simplify the procurement process, making it easier for you to access the best products and services in the market.
            </Paragraph>
          </Typography>
        </Col>
      </Row>
      <Divider />

      <Row justify="center">
        <Col span={8}>
          <Typography>
            <Title level={2}>For Small Workshops</Title>
            <Paragraph>
              Gain access to a world without borders with Steelify. We offer increased demand, robust support ensuring financial trust, and enhanced quality management for small workshops, empowering them to expand their reach and scale their operations effectively.
            </Paragraph>
          </Typography>
        </Col>
        <Col span={8}>
        </Col>
      </Row>
      <Divider />

      <Row justify="center">
        <Col span={8}>
        </Col>
        <Col span={8}>
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
              <Card.Meta title="Alperen Alihan Er" description="Product Manager" />
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