import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu } from 'antd';
import steelifyLogo from './steelifyLogo.png';
import './navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem('accessToken'); // Oturum kontrolü

  // Kullanıcı oturum durumuna göre menü öğeleri
  const items = isAuthenticated
    ? [
        { label: 'Get Quote', key: 'get-quote', path: '/get-quote' },
        { label: 'About Us', key: 'about-us', path: '/about-us' },
        {
          label: 'Emre Mataracı', // Kullanıcı adınızı veya dinamik bir şekilde alınan bir ismi buraya yazabilirsiniz
          key: 'user',
          children: [
            { label: 'Profile', key: 'profile', path: '/profile' }, // OPSİYONEL
            { label: 'My Requests/Orders', key: 'my-orders', path: '/my-orders' },
            { label: 'Log Out', key: 'logout' },
          ],
        },
      ]
    : [
        { label: 'Login', key: 'login', path: '/login' },
        { label: 'Register', key: 'register', path: '/register' },
        { label: 'Get Quote', key: 'get-quote', path: '/get-quote' },
        { label: 'About Us', key: 'about-us', path: '/about-us' },
      ];
      
      //Logout
      const onClick = (e) => {
        if (e.key === 'logout') {
          localStorage.removeItem('accessToken');
          navigate('/login');
          return;
        }
        
        let item = items.find(item => item.key === e.key);
        if (!item) {
          items.forEach(i => {
            if (i.children) {
              const subItem = i.children.find(sub => sub.key === e.key);
              if (subItem) item = subItem;
            }
          });
        }
      
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
