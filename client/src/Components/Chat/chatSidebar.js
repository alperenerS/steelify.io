import React from 'react';
import { List } from 'antd';
import './chatSidebar.css';
import dummyData from './dummyData';

const ChatSidebar = ({ handleOrderClick, activeOrderId }) => {
  return (
    <div className="chat-sidebar">
      <List
        className="chat-sidebar-content"
        dataSource={dummyData}
        renderItem={item => (
          <List.Item
            className={`chat-sidebar-item ${item.orderId === activeOrderId ? 'active' : ''}`}
            style={{
              width: '100%',
              boxSizing: 'border-box',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
              borderBottom: '1px solid #d9d9d9',
            }}
            onClick={() => handleOrderClick(item)}
          >
            <div style={{ width: '100%' }}>{item.orderName}</div>
          </List.Item>
        )}
      />
    </div>
  );
};

export default ChatSidebar;
