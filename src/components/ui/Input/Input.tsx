import React from "react";
import styles from "./Input.module.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  fullWidth = false,
  className = "",
  ...props
}) => {
  return (
    <div className={`input-container ${fullWidth ? "w-full" : ""}`}>
      {label && <label className="input-label">{label}</label>}
      <input
        className={`input ${error ? "error" : ""} ${className}`}
        {...props}
      />
      {error && <span className="input-error">{error}</span>}
    </div>
  );
};
