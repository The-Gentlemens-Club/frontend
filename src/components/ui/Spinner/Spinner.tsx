import React from "react";
import styles from "./Spinner.module.scss";

interface SpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({
  size = "md",
  className = "",
}) => {
  const sizes = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  return (
    <div className={`spinner ${sizes[size]} ${className}`}>
      <div className="spinner-inner">
        <div className="spinner-track"></div>
        <div className="spinner-indicator"></div>
      </div>
    </div>
  );
};
