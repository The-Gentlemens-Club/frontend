import React from "react";
import NextLink from "next/link";
import styles from "./Link.module.scss";

interface LinkProps {
  href: string;
  children: React.ReactNode;
  variant?: "default" | "button";
  className?: string;
  external?: boolean;
}

export const Link: React.FC<LinkProps> = ({
  href,
  children,
  variant = "default",
  className = "",
  external = false,
  ...props
}) => {
  if (external) {
    return (
      <a
        href={href}
        className={`link ${variant} ${className}`}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href} className={`link ${variant} ${className}`} {...props}>
      {children}
    </NextLink>
  );
};
