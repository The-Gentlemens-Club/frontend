import React from "react";
import styles from "./Switch.module.scss";

interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
}

export const Switch: React.FC<SwitchProps> = ({
  checked,
  onChange,
  disabled = false,
  className = "",
}) => {
  return (
    <label
      className={`switch ${className} ${disabled ? "switch--disabled" : ""}`}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
      />
      <span className="switch__slider" />
    </label>
  );
};
