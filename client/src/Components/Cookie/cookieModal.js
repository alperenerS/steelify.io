import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import './cookieModal.css';

const CookieModal = ({ isVisible, onClose }) => {
  const [cookies, setCookie] = useCookies(['essential', 'analytics', 'marketing']);
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: cookies.analytics !== 'false',
    marketing: cookies.marketing !== 'false',
  });

  const handleToggle = (category) => {
    setPreferences((prevPreferences) => ({
      ...prevPreferences,
      [category]: !prevPreferences[category],
    }));
  };

  const handleSave = () => {
    Object.keys(preferences).forEach((category) => {
      setCookie(category, preferences[category], { path: '/', maxAge: 31536000 });
    });
    onClose();
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="cookie-modal">
      <div className="cookie-modal-content">
        <h2>Cookie Preferences</h2>
        <p>
          We use cookies to enhance your experience on our website. Please select your preferences below. You can update your preferences at any time.
        </p>
        <div className="cookie-preference">
          <label>
            <input
              type="checkbox"
              checked={preferences.essential}
              onChange={() => handleToggle('essential')}
              disabled
            />
            <span>Essential Cookies (Required)</span>
          </label>
          <p>
            Essential cookies are necessary for the website to function properly. These cookies ensure basic functionalities and security features of the website, anonymously.
          </p>
        </div>
        <div className="cookie-preference">
          <label>
            <input
              type="checkbox"
              checked={preferences.analytics}
              onChange={() => handleToggle('analytics')}
            />
            <span>Analytics Cookies</span>
          </label>
          <p>
            Analytics cookies help us understand how our visitors interact with the website. These cookies provide information on metrics such as number of visitors, bounce rate, traffic source, etc.
          </p>
        </div>
        <div className="cookie-preference">
          <label>
            <input
              type="checkbox"
              checked={preferences.marketing}
              onChange={() => handleToggle('marketing')}
            />
            <span>Marketing Cookies</span>
          </label>
          <p>
            Marketing cookies are used to provide visitors with relevant ads and marketing campaigns. These cookies track visitors across websites and collect information to provide customized ads.
          </p>
        </div>
        <div className="cookie-modal-actions">
          <button className="cookie-button" onClick={handleSave}>
            Save Preferences
          </button>
          <button className="cookie-button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieModal;
