import React from 'react';
import { MinusOutlined } from '@ant-design/icons';
import './chatHeader.css';

const ChatHeader = ({ toggleDrawer, orderName }) => {
  return (
    <div className="chat-header">
      <div className="chat-title-container">
        <div className="chat-title">Messages</div>
        <div className="chat-order-name">{orderName}</div>
      </div>
      <MinusOutlined className="chat-toggle-icon" onClick={toggleDrawer} />
    </div>
  );
};

export default ChatHeader;
