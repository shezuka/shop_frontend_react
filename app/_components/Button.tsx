import React from "react";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant?: "primary" | "secondary" | "primary-light";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  onClick?: () => void;
  active?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  loading = false,
  onClick,
  className = "",
  active = false,
  ...props
}) => {
  const classes = [
    "flex",
    "items-center",
    "justify-center",
    "rounded-md",
    "px-4",
    "py-2",
    "font-medium",
    "text-white",
    "transition",
    "duration-150",
    "ease-in-out",
    "hover:bg-gray-700",
    "focus:outline-none",
    "focus:ring-2",
    "focus:ring-offset-2",
  ];

  if (variant === "primary") {
    classes.push(
      `bg-primary-${active ? "800" : "500"}`,
      `hover:bg-primary-${active ? "900" : "600"}`,
    );
  } else if (variant === "secondary") {
    classes.push(
      `bg-secondary-${active ? "900" : "700"}`,
      `hover:bg-secondary-${active ? "950" : "800"}`,
    );
  } else if (variant === "primary-light") {
    classes.push(`bg-primary-100`, `hover:bg-primary-200`, "text-primary-800");
  }

  if (size === "sm") {
    classes.push("text-xs", "px-2", "py-1");
  } else if (size === "lg") {
    classes.push("text-lg", "px-6", "py-3");
  }

  if (fullWidth) {
    classes.push("w-full");
  }

  if (disabled) {
    classes.push("opacity-75", "cursor-not-allowed");
  }

  if (loading) {
    classes.push("animate-spin");
  }

  if (className) {
    classes.push(className);
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classes.join(" ")}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
