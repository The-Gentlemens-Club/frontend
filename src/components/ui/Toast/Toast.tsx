import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./Toast.module.css";

interface ToastProps {
  message: string;
  type?: "success" | "error" | "info" | "warning";
  duration?: number;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({
  message,
  type = "info",
  duration = 3000,
  onClose,
}) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return <div className={`toast toast-${type}`}>{message}</div>;
};

export const ToastContainer: React.FC = () => {
  const [toasts, setToasts] = useState<
    Array<{
      id: number;
      message: string;
      type: ToastProps["type"];
    }>
  >([]);

  const show = (message: string, type: ToastProps["type"] = "info") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
  };

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return createPortal(
    <div className="toast-container">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </div>,
    document.body,
  );
};

export const useToast = () => {
  const show = (message: string, type: ToastProps["type"] = "info") => {
    const event = new CustomEvent("show-toast", { detail: { message, type } });
    window.dispatchEvent(event);
  };

  return { show };
};
