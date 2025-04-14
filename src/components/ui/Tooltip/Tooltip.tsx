import React, { useState } from "react";
import styles from "./Tooltip.module.scss";

interface TooltipProps {
  content: string;
  position?: "top" | "right" | "bottom" | "left";
  children: React.ReactNode;
  className?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  position = "top",
  children,
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className={`tooltip-wrapper ${className}`}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className={`tooltip tooltip--${position}`}>
          {content}
          <div className="tooltip__arrow" />
        </div>
      )}
    </div>
  );
};
