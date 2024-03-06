import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginOutlined, UserAddOutlined, TeamOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import steelifyLogo from './steelifyLogo.png'; // Import the logo as a module
import './navbar.css'; // Import the CSS file
const items = [
  {
    label: 'Register',
    key: 'register',
    icon: <UserAddOutlined />,
    path: '/register'
  },
  {
    label: 'Login',
    key: 'login',
    icon: <LoginOutlined />,
    path: '/login' // Düzeltildi: Yol '/login' olarak güncellendi
  },
    {
      label: 'About Us',
      key: '/aboutus', // Anahtar olarak rotayı kullanın
      icon: <TeamOutlined />,
      path: '/about-us'

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
