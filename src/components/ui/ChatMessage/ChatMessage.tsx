import React from "react";
import { Avatar } from "../Avatar/Avatar";
import styles from "./ChatMessage.module.scss";

interface ChatMessageProps {
  username: string;
  message: string;
  timestamp: Date;
  avatarUrl: string;
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
      className={`${styles.message} ${
        isCurrentUser ? styles.messageSelf : ""
      } ${className}`}
    >
      <Avatar 
        src={avatarUrl} 
        alt={`${username}'s avatar`} 
        size="small" 
        className={styles.avatar} 
      />
      <div className={styles.content}>
        <div className={styles.header}>
          <span
            className={`${styles.username} ${isAdmin ? styles.usernameAdmin : ""}`}
          >
            {username}
          </span>
          <span className={styles.timestamp}>{formatTime(timestamp)}</span>
        </div>
        <div className={styles.text}>{message}</div>
      </div>
    </div>
  );
};
