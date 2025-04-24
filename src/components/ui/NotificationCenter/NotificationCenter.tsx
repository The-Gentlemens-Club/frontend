import React from 'react';
import { Card } from '../Card/Card';
import { Badge } from '../Badge/Badge';
import styles from './NotificationCenter.module.scss';

interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  timestamp: Date;
  isRead: boolean;
}

interface NotificationCenterProps {
  notifications: Notification[];
  onMarkAsRead: (id: string) => void;
  onClearAll: () => void;
  className?: string;
}

export const NotificationCenter: React.FC<NotificationCenterProps> = ({
  notifications,
  onMarkAsRead,
  onClearAll,
  className = '',
}) => {
  const unreadCount = notifications.filter(n => !n.isRead).length;

  const getBadgeVariant = (type: Notification['type']): 'default' | 'success' | 'warning' | 'error' => {
    switch (type) {
      case 'info':
        return 'default';
      case 'success':
      case 'warning':
      case 'error':
        return type;
      default:
        return 'default';
    }
  };

  return (
    <Card className={`notification-center ${className}`}>
      <div className="notification-header">
        <h3 className="notification-title">
          Notifications
          {unreadCount > 0 && (
            <Badge variant="error" className="notification-badge">
              {unreadCount}
            </Badge>
          )}
        </h3>
        <button
          onClick={onClearAll}
          className="notification-clear-btn"
          disabled={notifications.length === 0}
        >
          Clear All
        </button>
      </div>
      
      <div className="notification-list">
        {notifications.length === 0 ? (
          <p className="notification-empty">No notifications</p>
        ) : (
          notifications.map((notification) => (
            <div
              key={notification.id}
              className={`notification-item ${notification.isRead ? 'read' : 'unread'}`}
              onClick={() => !notification.isRead && onMarkAsRead(notification.id)}
            >
              <div className="notification-content">
                <h4 className="notification-item-title">{notification.title}</h4>
                <p className="notification-message">{notification.message}</p>
                <span className="notification-time">
                  {notification.timestamp.toLocaleString()}
                </span>
              </div>
              <Badge variant={getBadgeVariant(notification.type)} className="notification-type-badge">
                {notification.type}
              </Badge>
            </div>
          ))
        )}
      </div>
    </Card>
  );
};