import React from "react";
import { List } from "antd";
import "./chatContent.css";

const ChatContent = ({ messages }) => {
  return (
    <List
      className="chat-content"
      dataSource={messages}
      renderItem={(item) => (
        <List.Item
          className="chat-message-wrapper"
          style={{ border: "none", padding: 0 }}
        >
          <div
            className={
              item.sender === "user1"
                ? "chat-message user1"
                : "chat-message user2"
            }
          >
            <div className="message-bubble">{item.message}</div>
          </div>
        </List.Item>
      )}
    />
  );
};

export default ChatContent;
