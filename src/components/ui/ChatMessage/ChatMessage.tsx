import React from "react";
import { Avatar } from "../Avatar/Avatar";
import styles from "./ChatMessage.module.scss";

interface ChatMessageProps {
  username: string;
  message: string;
  timestamp: Date;
  avatarUrl?: string;
  isCurrentUser?: boolean;
  isAdmin?: boolean;
  className?: string;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({
  username,
  message,
  timestamp,
  avatarUrl,
  isCurrentUser = false,
  isAdmin = false,
  className = "",
}) => {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div
      className={`chat-message ${isCurrentUser ? "chat-message--self" : ""} ${className}`}
    >
      <Avatar src={avatarUrl} size="sm" className="chat-message__avatar" />
      <div className="chat-message__content">
        <div className="chat-message__header">
          <span
            className={`chat-message__username ${isAdmin ? "chat-message__username--admin" : ""}`}
          >
            {username}
          </span>
          <span className="chat-message__time">{formatTime(timestamp)}</span>
        </div>
        <p className="chat-message__text">{message}</p>
      </div>
    </div>
  );
};
