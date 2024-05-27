import React from 'react';
import { MinusOutlined } from '@ant-design/icons';
import './chatHeader.css';

const ChatHeader = ({ toggleDrawer }) => {
  return (
    <div className="chat-header">
      <div className="chat-title">Messages</div>
      <MinusOutlined className="chat-toggle-icon" onClick={toggleDrawer} />
    </div>
  );
};

export default ChatHeader;
