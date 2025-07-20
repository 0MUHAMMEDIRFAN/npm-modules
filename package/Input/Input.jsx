import React, { forwardRef } from 'react';
import './Input.css';

const Input = forwardRef(({ 
  type = 'text', 
  label, 
  placeholder, 
  value, 
  onChange, 
  onBlur,
  onFocus,
  error, 
  disabled = false, 
  required = false,
  size = 'medium',
  variant = 'default',
  helperText,
  prefix,
  suffix,
  className = '',
  ...props 
}, ref) => {
  const baseClasses = 'zero-input';
  const sizeClasses = {
    small: 'zero-input--small',
    medium: 'zero-input--medium',
    large: 'zero-input--large'
  };

  const variantClasses = {
    default: 'zero-input--default',
    filled: 'zero-input--filled',
    outlined: 'zero-input--outlined'
  };

  const inputClasses = [
    baseClasses,
    sizeClasses[size] || sizeClasses.medium,
    variantClasses[variant] || variantClasses.default,
    error ? 'zero-input--error' : '',
    disabled ? 'zero-input--disabled' : '',
    prefix ? 'zero-input--with-prefix' : '',
    suffix ? 'zero-input--with-suffix' : '',
    className
  ].filter(Boolean).join(' ');

  const inputId = props.id || `input-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className="zero-input-wrapper">
      {label && (
        <label htmlFor={inputId} className="zero-input-label">
          {label}
          {required && <span className="zero-input-required">*</span>}
        </label>
      )}
      
      <div className="zero-input-container">
        {prefix && <span className="zero-input-prefix">{prefix}</span>}
        
        <input
          ref={ref}
          id={inputId}
          type={type}
          className={inputClasses}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          disabled={disabled}
          required={required}
          {...props}
        />
        
        {suffix && <span className="zero-input-suffix">{suffix}</span>}
      </div>
      
      {error && <span className="zero-input-error">{error}</span>}
      {helperText && !error && <span className="zero-input-helper">{helperText}</span>}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
