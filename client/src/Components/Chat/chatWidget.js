import React, { useState } from 'react';
import { Card } from 'antd';
import ChatHeader from './chatHeader';
import ChatContent from './chatContent';
import ChatInput from './chatInput';
import ChatSidebar from './chatSidebar';
import dummyData from './dummyData';
import './chatWidget.css';

const ChatWidget = () => {
  const [visible, setVisible] = useState(false);
  const [activeOrder, setActiveOrder] = useState(dummyData[0]);

  const toggleDrawer = () => {
    setVisible(!visible);
  };

  const handleOrderClick = (order) => {
    setActiveOrder(order);
  };

  return (
    <div className="chat-widget-container">
      {visible ? (
        <Card className="chat-card">
          <ChatHeader toggleDrawer={toggleDrawer} />
          <div className="chat-main">
            <div className="chat-body">
              <ChatSidebar handleOrderClick={handleOrderClick} />
              <div className="chat-content-container">
                <ChatContent messages={activeOrder.messages} />
              </div>
            </div>
            <ChatInput />
          </div>
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
