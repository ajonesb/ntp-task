// components/Button/Button.tsx
import React from "react";

export interface ButtonProps {
  primary?: boolean;
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
  withIcon?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export const Button = ({
  primary = false,
  size = "medium",
  label,
  className,
  onClick,
  withIcon = false,
}: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        flex items-center gap-2 px-4 py-2 rounded-md
        ${primary ? "bg-[#536B86] text-white" : "bg-gray-200 text-gray-700"}
        hover:opacity-90 transition-opacity
        ${className}
      `}
    >
      {withIcon && (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 16V8.00002C21 6.53002 20.52 5.76002 19.62 5.40002C18.71 5.04002 17.64 5.34002 16.66 6.32002L14.83 8.15002C14.37 8.61002 13.65 8.61002 13.19 8.15002L11.36 6.32002C10.38 5.34002 9.31 5.04002 8.4 5.40002C7.49 5.76002 7.01 6.53002 7.01 8.00002V16C7.01 19 8.01 20 11.01 20H17C20 20 21 19 21 16Z"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 8V16C3 19 4 20 7 20"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      {label}
    </button>
  );
};
