import React from 'react';
import { List } from 'antd';
import './chatContent.css';

const data = [
  'Message 1',
  'Message 2',
  'Message 3',
  'Message 4',
];

const ChatContent = () => {
  return (
    <List
      className="chat-content"
      dataSource={data}
      renderItem={item => <List.Item>{item}</List.Item>}
    />
  );
};

export default ChatContent;
