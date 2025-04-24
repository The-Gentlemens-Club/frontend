import React from "react";
import { Card } from "../Card/Card";
import styles from "./SimpleStatsCard.module.scss";

interface SimpleStatsCardProps {
  title: string;
  value: string;
  className?: string;
}

export const SimpleStatsCard: React.FC<SimpleStatsCardProps> = ({
  title,
  value,
  className = "",
}) => {
  return (
    <Card className={`${styles.simpleStatsCard} ${className}`}>
      <div className={styles.simpleStatsCard__content}>
        <h3 className={styles.simpleStatsCard__title}>{title}</h3>
        <span className={styles.simpleStatsCard__value}>{value}</span>
      </div>
    </Card>
  );
}; 