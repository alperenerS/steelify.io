// src/components/sidebar/sidebarUserContact.js
import React from 'react';
import { useSelector } from 'react-redux';
import './sidebarUserContact.css';

const SidebarUserContact = () => {
  const user = useSelector((state) => state.user.user);

  const getInitials = (name) => {
    const names = name.split(' ');
    const initials = names.map((n) => n[0]).join('');
    return initials;
  };

  return (
    <div className="user-contact">
      <div className="user-avatar">
        {user && user.profileImage ? (
          <img src={user.profileImage} alt="User Avatar" className="avatar-image" />
        ) : (
          <span className="avatar-initial">{user ? getInitials(user.name) : 'A'}</span>
        )}
      </div>
      <div className="user-info">
        <div className="user-name">{user ? user.name : 'Guest'}</div>
        <div className="user-action">Send message</div>
      </div>
    </div>
  );
};

export default SidebarUserContact;
