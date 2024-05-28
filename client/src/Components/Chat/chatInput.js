import React, { useState } from "react";
import { Input, Button, Upload, message as antdMessage } from "antd";
import { PaperClipOutlined } from "@ant-design/icons";
import "./chatInput.css";

const ChatInput = ({ onSendMessage }) => {
  const [messageText, setMessageText] = useState("");
  const [fileList, setFileList] = useState([]);

  const sendMessage = () => {
    if (messageText.trim()) {
      onSendMessage(messageText);
      setMessageText("");
      setFileList([]);
    }
  };

  const beforeUpload = (file) => {
    const isLt10M = file.size / 1024 / 1024 < 10;
    if (!isLt10M) {
      antdMessage.error("File must be smaller than 10MB!");
    }
    return isLt10M;
  };

  const handleFileChange = ({ fileList }) => {
    setFileList(fileList);
  };

  return (
    <div className="chat-input">
      <Input
        value={messageText}
        onChange={(e) => setMessageText(e.target.value)}
        placeholder="Type a message"
        onPressEnter={sendMessage}
        prefix={
          <Upload
            beforeUpload={beforeUpload}
            fileList={fileList}
            onChange={handleFileChange}
            maxCount={1}
            accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
            showUploadList={false}
          >
            <PaperClipOutlined style={{ cursor: 'pointer' }} />
          </Upload>
        }
        style={{ flex: 1 }}
      />
      <Button type="primary" onClick={sendMessage} style={{ marginLeft: '10px' }}>
        Send
      </Button>
    </div>
  );
};

export default ChatInput;
