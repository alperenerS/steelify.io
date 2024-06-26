import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import "./navbar.css";
import { logout } from '../../Redux/Slices/userSlice';

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const userName = useSelector(state => state.user.user?.name);
  const isAuthenticated = useSelector(state => state.user.token != null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const items = isAuthenticated
    ? [
        { label: "Get Quote", key: "get-quote", path: "/get-quote" },
        { label: "About Us", key: "about-us", path: "/about-us" },
        { label: "My Requests/Orders", key: "my-requests", path: "/my-requests" },
        { label: userName, key: "user", children: [{ label: "Log Out", key: "logout" }] },
      ]
    : [
        { label: "Login", key: "login", path: "/login" },
        { label: "Register", key: "register", path: "/register" },
        { label: "Get Quote", key: "get-quote", path: "/get-quote" },
        { label: "About Us", key: "about-us", path: "/about-us" },
      ];

  const onClick = (e) => {
    if (e.key === "logout") {
      dispatch(logout());
      navigate("/login");
      return;
    }

    const item = items.find(item => item.key === e.key) ||
      items.flatMap(i => i.children || []).find(sub => sub.key === e.key);

    if (item && item.path) {
      navigate(item.path);
    }
  };

  const menu = (
    <Menu onClick={onClick}>
      {items.map(item => 
        item.children ? (
          <Menu.SubMenu key={item.key} title={item.label}>
            {item.children.map(subItem => (
              <Menu.Item key={subItem.key}>
                {subItem.label}
              </Menu.Item>
            ))}
          </Menu.SubMenu>
        ) : (
          <Menu.Item key={item.key}>
            {item.label}
          </Menu.Item>
        )
      )}
    </Menu>
  );

  return (
    <div className="navbar-flex-container">
      <img
        src="https://yenastorage.blob.core.windows.net/steelify/steelify_logo.png"
        alt="STEELIFY Logo"
        className="navbar-logo"
        onClick={() => navigate("/")}
      />
      {isMobile ? (
        <Dropdown overlay={menu} trigger={['click']}>
          <Button className="navbar-menu-button" icon={<DownOutlined />}>
            Menu
          </Button>
        </Dropdown>
      ) : (
        <Menu
          onClick={onClick}
          mode="horizontal"
          items={items}
          selectedKeys={[]}
          className="navbar-menu"
        />
      )}
    </div>
  );
};

export default Navbar;
