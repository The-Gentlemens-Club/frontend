import React from "react";
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
          <div key={reward.id} className="reward-item">
            <div className="reward-image-container">
              <img
                src={reward.image}
                alt={reward.title}
                className="reward-image"
              />
              <span className="reward-points">{reward.points} Points</span>
            </div>
            <div className="reward-content">
              <h4 className="reward-title">{reward.title}</h4>
              <p className="reward-description">{reward.description}</p>
              <Progress
                value={(reward.progress / reward.maxProgress) * 100}
                size="sm"
                color={reward.isAvailable ? "success" : "primary"}
                className="reward-progress"
              />
              <div className="reward-footer">
                <span className="reward-progress-text">
                  Progress: {reward.progress}/{reward.maxProgress}
                </span>
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
          </div>
        ))}
      </div>
    </Card>
  );
};
