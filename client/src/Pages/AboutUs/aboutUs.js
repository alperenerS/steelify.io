import React from 'react';
import Introduction from '../../Components/AboutUs/introduction';
import IndustrialBuyers from '../../Components/AboutUs/industrialBuyers';
import MetalWorkshops from '../../Components/AboutUs/metalWorkshops';
import InnovationTechnology from '../../Components/AboutUs/innovationTechnology';
import AllTeam from '../../Components/AboutUs/allTeam' ;

const AboutUs = () => (
  <div className="about-us-main-content">
  <Introduction />
    <IndustrialBuyers />
    <MetalWorkshops />
    <InnovationTechnology />
    <AllTeam />
  </div>
);

export default AboutUs;