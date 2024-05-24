import React, { useState } from 'react';
import { Input, Button } from 'antd';
import './chatInput.css';

const ChatInput = () => {
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    console.log('Send message:', message);
    setMessage('');
  };

  return (
    <div className="chat-input">
      <Input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
        onPressEnter={sendMessage}
      />
      <Button type="primary" onClick={sendMessage}>
        Send
      </Button>
    </div>
  );
};

export default ChatInput;
