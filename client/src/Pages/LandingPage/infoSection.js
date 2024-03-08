import React from 'react';
import { Row, Col, Typography } from 'antd';
import steelifyGreenEnvironment from './assets/steelifyGreenEnvironment.png';
import steelifyManufacturingServices from './assets/steelifyManufacturingServices.png';
import steelifyTechTeam from './assets/steelifyTechTeam.png';


const { Title, Paragraph } = Typography;

const sections = [
  {
    title: 'Maximize Collaboration with Steelify',
    content: `Our platform facilitates seamless interaction between buyers and suppliers, ensuring clear communication and efficient project management from start to finish. With our intuitive interface and comprehensive tools, both suppliers and buyers can easily manage their transactions, monitor progress, and maintain constant communication. This collaborative environment not only streamlines operations but also fosters strong partnerships that are crucial for successful projects.`,
    image: steelifyTechTeam,
    reverse: false,
    // bgColor: '#f0f2f5',
  },
  {
    title: 'Your Partner From Sourcing to Delivery and Beyond',
    content: `We stand by our commitment to support your procurement needs, offering comprehensive solutions that span across sourcing, quality assurance, and logistics. Our extensive network of verified suppliers ensures that you receive the best quality products and services, tailored to meet your specific requirements. From initial sourcing to final delivery, we are here to guide you every step of the way, ensuring a seamless and efficient procurement process.`,
    image: '',
    reverse: true,
    // bgColor: '#e6f7ff',
  },
  {
    title: 'Comprehensive Metal and Plastic Procurement Solutions',
    content: `Leverage our extensive network of suppliers for your metal and plastic needs, ensuring you get the best quality and rates in the market. Our platform offers a wide range of materials and processing options, from standard metals and plastics to specialized materials for specific applications. With our easy-to-use platform, you can quickly find and compare suppliers, get instant quotes, and manage your orders with ease, all in one place.`,
    image: steelifyManufacturingServices,
    reverse: false,
    // bgColor: '#fffbe6',
  },
  {
    title: 'Embrace Sustainability with Our Go Green Initiative',
    content: `Join us in our journey towards sustainability by choosing eco-friendly materials and processes through our platform, reducing the environmental impact of your projects. Our Go Green Initiative is designed to support sustainable practices among our suppliers and buyers, promoting the use of recyclable materials, energy-efficient processes, and environmentally friendly manufacturing techniques. Together, we can make a significant impact on the environment while still meeting our industrial needs.`,
    image: steelifyGreenEnvironment,
    reverse: true,
    // bgColor: '#e6fffb',
  },
];

const InfoSection = () => {
  return (
    <div>
      {sections.map((section, index) => (
        <Row key={index} align="middle" gutter={[32, 32]} style={{ marginBottom: '5rem', backgroundColor: section.bgColor, padding: '2rem' }} justify="center">
          <Col xs={24} md={12} order={section.reverse ? 1 : 0}>
            <img src={section.image} alt={section.title} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
          </Col>
          <Col xs={24} md={12} order={section.reverse ? 0 : 1}>
            <Title level={3}>{section.title}</Title>
            <Paragraph>{section.content}</Paragraph>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default InfoSection;
