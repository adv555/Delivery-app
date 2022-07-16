import React from "react";
import clsx from "clsx";

interface ButtonProps {
  label: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  type = "button",
  onClick,
  disabled,
  className,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx("font-bold py-2 px-4 rounded shadow", className)}
    >
      {label}
    </button>
  );
};
