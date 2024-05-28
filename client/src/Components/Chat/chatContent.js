import React from "react";
import { List, Typography } from "antd";
import { formatDate, shouldShowTimestamp } from "./chatHelpers";
import "./chatContent.css";

const ChatContent = ({ messages }) => {
  return (
    <List
      className="chat-content"
      dataSource={messages}
      renderItem={(item, index) => {
        const showTimestamp =
          index === 0 ||
          shouldShowTimestamp(item.timestamp, messages[index - 1]?.timestamp);

        return (
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
              {showTimestamp && (
                <Typography.Text className="timestamp">
                  {formatDate(item.timestamp)}
                </Typography.Text>
              )}
            </div>
          </List.Item>
        );
      }}
    />
  );
};

export default ChatContent;
