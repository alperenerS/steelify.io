import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import './cookieConsent.css';
import CookieButton from './cookieButton';
import CookieMessage from './cookieMessage';
import CookieModal from './cookieModal';

const CookieConsent = () => {
  const [cookies, setCookie] = useCookies(['userConsent']);
  const [isVisible, setIsVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    // if (!cookies.userConsent) {
    //   setIsVisible(true);
    // }
    setIsVisible(true); // Geliştirme sürecinde sürekli görünür kılmak için
  }, [cookies]);

  const handleAccept = () => {
    setCookie('userConsent', true, { path: '/', maxAge: 31536000 });
    setIsVisible(false);
  };

  const handleViewCookies = () => {
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="cookie-consent">
      <CookieMessage />
      <div className="cookie-buttons">
        <CookieButton onClick={handleAccept} label="Accept" />
        <CookieButton onClick={handleViewCookies} label="View Cookies" />
      </div>
      <CookieModal isVisible={isModalVisible} onClose={handleModalClose} />
    </div>
  );
};

export default CookieConsent;
