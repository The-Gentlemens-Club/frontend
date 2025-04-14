import React, { useState, useEffect } from "react";
import styles from "./Countdown.module.scss";

interface CountdownProps {
  endTime: Date;
  onComplete?: () => void;
  className?: string;
}

export const Countdown: React.FC<CountdownProps> = ({
  endTime,
  onComplete,
  className = "",
}) => {
  const [timeLeft, setTimeLeft] = useState({
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endTime.getTime() - now;

      if (distance <= 0) {
        clearInterval(timer);
        onComplete?.();
        return;
      }

      setTimeLeft({
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime, onComplete]);

  return (
    <div className={`countdown ${className}`}>
      <span className="countdown-number">
        {timeLeft.minutes.toString().padStart(2, "0")}
      </span>
      <span className="countdown-separator">:</span>
      <span className="countdown-number">
        {timeLeft.seconds.toString().padStart(2, "0")}
      </span>
    </div>
  );
};
