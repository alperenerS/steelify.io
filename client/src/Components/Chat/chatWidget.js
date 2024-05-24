import React, { useState } from 'react';
import { Card, Button } from 'antd';
import { MinusOutlined } from '@ant-design/icons';
import ChatHeader from './chatHeader';
import ChatContent from './chatContent';
import ChatInput from './chatInput';
import './chatWidget.css';

const ChatWidget = () => {
  const [visible, setVisible] = useState(false);

  const toggleDrawer = () => {
    setVisible(!visible);
  };

  return (
    <div className="chat-widget-container">
      {visible ? (
        <Card
          title={<ChatHeader toggleDrawer={toggleDrawer} />}
          className="chat-card"
          extra={<MinusOutlined onClick={toggleDrawer} />}
        >
          <ChatContent />
          <ChatInput />
        </Card>
      ) : (
        <div className="chat-bar" onClick={toggleDrawer}>
          <span className="chat-bar-text">Messages</span>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
