import React, { useState } from "react";
import { Card } from "../Card/Card";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { Avatar } from "../Avatar/Avatar";
import styles from "./GameChat.module.scss";

interface Message {
  id: string;
  sender: string;
  avatar?: string;
  content: string;
  timestamp: Date;
}

interface GameChatProps {
  messages: Message[];
  onSendMessage: (content: string) => void;
  className?: string;
}

export const GameChat: React.FC<GameChatProps> = ({
  messages,
  onSendMessage,
  className = "",
}) => {
  const [messageInput, setMessageInput] = useState("");

  const handleSend = () => {
    if (messageInput.trim()) {
      onSendMessage(messageInput);
      setMessageInput("");
    }
  };

  return (
    <Card className={`game-chat ${className}`}>
      <div className="game-chat-messages">
        {messages.map((message) => (
          <div key={message.id} className="game-chat-message">
            <Avatar
              src={message.avatar}
              name={message.sender}
              size="sm"
              className="game-chat-avatar"
            />
            <div className="game-chat-content">
              <div className="game-chat-header">
                <span className="game-chat-sender">{message.sender}</span>
                <span className="game-chat-time">
                  {message.timestamp.toLocaleTimeString()}
                </span>
              </div>
              <p className="game-chat-text">{message.content}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="game-chat-input">
        <Input
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          placeholder="Type your message..."
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
        />
        <Button onClick={handleSend} variant="primary">
          Send
        </Button>
      </div>
    </Card>
  );
};
