import React from "react";
import styles from "./LoadingSpinner.module.scss";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "white";
  centered?: boolean;
  overlay?: boolean;
  className?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = "md",
  variant = "primary",
  centered = false,
  overlay = false,
  className = "",
}) => {
  const spinnerContent = (
    <div
      className={`
        loading-spinner
        loading-spinner--${size}
        loading-spinner--${variant}
        ${centered ? "loading-spinner--centered" : ""}
        ${className}
      `}
    >
      <div className="loading-spinner__ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );

  if (overlay) {
    return <div className="loading-spinner__overlay">{spinnerContent}</div>;
  }

  return spinnerContent;
};
