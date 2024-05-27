import React from 'react';
import { List } from 'antd';
import './chatContent.css';

const ChatContent = ({ messages }) => {
  return (
    <List
      className="chat-content"
      dataSource={messages}
      renderItem={item => (
        <List.Item className={item.sender === 'user1' ? 'chat-message user1' : 'chat-message user2'}>
          <div>{item.message}</div>
        </List.Item>
      )}
    />
  );
};

export default ChatContent;
