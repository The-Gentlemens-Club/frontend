import React from "react";
import styles from "./Tabs.module.scss";

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  activeTab?: string;
  onChange?: (tabId: string) => void;
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab,
  onChange,
  className = "",
}) => {
  const [active, setActive] = React.useState(activeTab || tabs[0]?.id);

  const handleTabClick = (tabId: string) => {
    setActive(tabId);
    onChange?.(tabId);
  };

  return (
    <div className={`tabs-container ${className}`}>
      <div className="tabs-header">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button ${active === tab.id ? "active" : ""}`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tabs-content">
        {tabs.find((tab) => tab.id === active)?.content}
      </div>
    </div>
  );
};
