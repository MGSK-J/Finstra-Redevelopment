import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { buttonHover, buttonTap } from '../utils/animations';

/**
 * Button component with consistent styling and animations
 * 
 * @param {Object} props - Component props
 * @param {string} props.variant - Button variant (primary, secondary, outline, text)
 * @param {string} props.size - Button size (sm, md, lg)
 * @param {string} props.to - Link destination (if button should be a Link)
 * @param {boolean} props.fullWidth - Whether button should take full width
 * @param {string} props.className - Additional CSS classes
 * @param {Function} props.onClick - Click handler
 * @param {boolean} props.disabled - Whether button is disabled
 * @param {React.ReactNode} props.children - Button content
 */
const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  to, 
  fullWidth = false,
  className = '',
  onClick,
  disabled = false,
  children,
  ...rest
 }) => {
  // Base classes for all button variants
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500';
  
  // Size classes
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };
  
  // Variant classes
  const variantClasses = {
    primary: 'bg-purple-600 text-white hover:bg-purple-700 active:bg-purple-800 disabled:bg-purple-300',
    secondary: 'bg-gray-800 text-white hover:bg-gray-900 active:bg-black disabled:bg-gray-600',
    outline: 'border border-purple-600 text-purple-600 bg-transparent hover:bg-purple-50 active:bg-purple-100 disabled:border-purple-300 disabled:text-purple-300',
    text: 'text-purple-600 bg-transparent hover:bg-purple-50 active:bg-purple-100 disabled:text-purple-300'
  };
  
  // Combine all classes
  const buttonClasses = [
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    fullWidth ? 'w-full' : '',
    className
  ].join(' ');
  
  // If 'to' prop is provided, render a Link component
  if (to) {
    return (
      <motion.div
        whileHover={!disabled && buttonHover}
        whileTap={!disabled && buttonTap}
        className={disabled ? 'cursor-not-allowed' : ''}
      >
        <Link
          to={to}
          className={buttonClasses}
          onClick={disabled ? (e) => e.preventDefault() : onClick}
          aria-disabled={disabled}
          {...rest}
        >
          {children}
        </Link>
      </motion.div>
    );
  }
  
  // Otherwise, render a button element
  return (
    <motion.button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      whileHover={!disabled && buttonHover}
      whileTap={!disabled && buttonTap}
      {...rest}
    >
      {children}
    </motion.button>
  );
};

export default Button;