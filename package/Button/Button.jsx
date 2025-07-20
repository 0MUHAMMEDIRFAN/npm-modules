import React from 'react';
import './Button.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  disabled = false, 
  onClick, 
  type = 'button',
  className = '',
  ...props 
}) => {
  const baseClasses = 'zero-button';
  const variantClasses = {
    primary: 'zero-button--primary',
    secondary: 'zero-button--secondary',
    success: 'zero-button--success',
    danger: 'zero-button--danger',
    warning: 'zero-button--warning',
    info: 'zero-button--info',
    outline: 'zero-button--outline'
  };
  
  const sizeClasses = {
    small: 'zero-button--small',
    medium: 'zero-button--medium',
    large: 'zero-button--large'
  };

  const buttonClasses = [
    baseClasses,
    variantClasses[variant] || variantClasses.primary,
    sizeClasses[size] || sizeClasses.medium,
    disabled ? 'zero-button--disabled' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      className={buttonClasses}
      disabled={disabled}
      onClick={onClick}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
