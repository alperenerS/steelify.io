import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { LoginOutlined, UserAddOutlined, TeamOutlined, CalculatorOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import steelifyLogo from './steelifyLogo.png';
import './navbar.css';
const items = [
  {
    label: 'Register',
    key: 'register',
    path: '/register'
  },
  {
    label: 'Login',
    key: 'login',
    path: '/login'
  },
    {
      label: 'About Us',
      key: '/aboutus',
      path: '/about-us'

    },
    {
      label: 'Get Quote',
      key: '/get-quote',
      path: '/get-quote'

    },
  {
    label: (
      <a href="https://www.yenaengineering.nl" target="_blank" rel="noopener noreferrer">
        YENA Engineering
      </a>
    ),
    key: 'alipay',
  },
];

const Navbar = () => {
  const navigate = useNavigate();

  const onClick = (e) => {
    // This function will handle navigation when a menu item is clicked
    const item = items.find(item => item.key === e.key);
    if (item && item.path) {
      navigate(item.path);
    }
  };

  return (
    <div className="navbar-flex-container">
      <img src={steelifyLogo} alt="STEELIFY Logo" className="navbar-logo" onClick={() => navigate('/')} />
      <Menu onClick={onClick} mode="horizontal" items={items} className="navbar-menu" />
    </div>
  );
};

export default Navbar;
