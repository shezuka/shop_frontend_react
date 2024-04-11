import React from "react";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  loading = false,
  onClick,
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
    classes.push("bg-primary-500", "hover:bg-primary-600");
  } else if (variant === "secondary") {
    classes.push("bg-secondary-700", "hover:bg-secondary-800");
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
