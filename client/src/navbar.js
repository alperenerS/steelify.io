import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate hook'unu içe aktar
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';


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
    path: '/register'
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
    navigate(e.key);
  };
  return <Menu onClick={onClick} mode="horizontal" items={items} />;
};
export default Navbar;