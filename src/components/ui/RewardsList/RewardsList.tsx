import React from "react";
import Image from "next/image";
import { Card } from "../Card/Card";
import { Button } from "../Button/Button";
import { Progress } from "../Progress/Progress";
import styles from "./RewardsList.module.scss";

interface Reward {
  id: string;
  title: string;
  description: string;
  points: number;
  image: string;
  progress: number;
  maxProgress: number;
  isAvailable: boolean;
}

interface RewardsListProps {
  rewards: Reward[];
  onClaimReward: (rewardId: string) => void;
  className?: string;
}

export const RewardsList: React.FC<RewardsListProps> = ({
  rewards,
  onClaimReward,
  className = "",
}) => {
  return (
    <Card className={`rewards-list ${className}`}>
      <h3 className="rewards-title">Available Rewards</h3>
      <div className="rewards-grid">
        {rewards.map((reward) => (
          <div
            key={reward.id}
            className={`${styles.card} ${
              !reward.isAvailable ? styles.disabled : ''
            }`}
          >
            <div className={styles.imageContainer}>
              <Image
                src={reward.image}
                alt={reward.title}
                width={100}
                height={100}
                className={styles.image}
              />
            </div>
            <div className={styles.content}>
              <h4 className={styles.title}>{reward.title}</h4>
              <p className={styles.description}>{reward.description}</p>
              <div className={styles.points}>
                <span>{reward.points} points</span>
              </div>
              <div className={styles.progress}>
                <div
                  className={styles.progressBar}
                  style={{
                    width: `${(reward.progress / reward.maxProgress) * 100}%`,
                  }}
                />
                <span className={styles.progressText}>
                  {reward.progress}/{reward.maxProgress}
                </span>
              </div>
              <Button
                variant={reward.isAvailable ? "primary" : "secondary"}
                size="sm"
                disabled={!reward.isAvailable}
                onClick={() => onClaimReward(reward.id)}
              >
                {reward.isAvailable ? "Claim Reward" : "In Progress"}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
