// src/components/common/Button.js
import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  className = "", 
  variant = "primary", 
  size = "medium",
  ...props 
}) => {
  const baseClasses = "action-button";
  const variantClasses = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    danger: "bg-red-500 text-white hover:bg-red-600"
  };
  const sizeClasses = {
    small: "py-1 px-2 text-sm",
    medium: "py-2 px-4",
    large: "py-3 px-6 text-lg"
  };
  
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  return (
    <button 
      className={buttonClasses}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;