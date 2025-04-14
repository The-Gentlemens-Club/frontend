import React, { useState, useRef, useEffect } from "react";
import styles from "./Dropdown.module.scss";

interface DropdownProps {
  options: { label: string; value: string | number }[];
  value?: string | number;
  onChange: (value: string | number) => void;
  placeholder?: string;
  className?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className={`dropdown ${className}`}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-trigger"
      >
        <span>{selectedOption?.label || placeholder}</span>
        <span className={`dropdown-arrow ${isOpen ? "open" : ""}`}>▼</span>
      </button>

      {isOpen && (
        <div className="dropdown-content">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
              className={`dropdown-option ${option.value === value ? "selected" : ""}`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
