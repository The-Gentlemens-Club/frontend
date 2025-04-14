import React from "react";
import styles from "./Progress.module.scss";

interface ProgressProps {
  value: number;
  max?: number;
  variant?: "primary" | "success" | "warning" | "error";
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  className?: string;
}

export const Progress: React.FC<ProgressProps> = ({
  value,
  max = 100,
  variant = "primary",
  size = "md",
  showLabel = false,
  className = "",
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div className={`progress-container ${size} ${className}`}>
      <div
        className={`progress-bar ${variant}`}
        style={{ width: `${percentage}%` }}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
      />
      {showLabel && (
        <span className="progress-label">{Math.round(percentage)}%</span>
      )}
    </div>
  );
};
