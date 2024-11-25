import React from "react";
import clsx from "clsx";

const Button = ({ children, variant = "primary", size = "md", className, ...props }) => {
  const baseStyles = "rounded px-4 py-2 font-medium focus:outline-none";
  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  };
  const sizes = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  return (
    <button
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
