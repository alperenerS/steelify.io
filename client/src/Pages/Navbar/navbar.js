import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import steelifyLogo from './steelifyLogo.png'; // Import the logo as a module
import './navbar.css'; // Import the CSS file
const items = [
  {
    label: 'Register',
    key: 'register',
    icon: <MailOutlined />,
    path: '/register'
  },
  {
    label: 'Login',
    key: 'login',
    icon: <AppstoreOutlined />,
    path: '/login' // Düzeltildi: Yol '/login' olarak güncellendi
  },
  {
    label: 'RFQ',
    key: 'SubMenu',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
    ],
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
