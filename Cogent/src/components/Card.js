import React from 'react';
import { motion } from 'framer-motion';

/**
 * Card component for consistent content containers
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Card content
 * @param {string} props.className - Additional CSS classes
 * @param {Object} props.variants - Framer Motion variants
 * @param {boolean} props.hover - Whether to apply hover effect
 * @param {string} props.as - HTML element to render as
 */
const Card = ({
  children,
  className = '',
  variants,
  hover = false,
  as = 'div',
  ...rest
}) => {
  // Base classes for all cards
  const baseClasses = 'bg-white rounded-lg shadow-md overflow-hidden';
  
  // Hover effect classes
  const hoverClasses = hover ? 'transition-all duration-300 hover:shadow-xl hover:-translate-y-1' : '';
  
  // Combine all classes
  const cardClasses = [
    baseClasses,
    hoverClasses,
    className
  ].join(' ');
  
  // Create the motion component with the specified HTML element
  const MotionComponent = motion[as];
  
  return (
    <MotionComponent
      className={cardClasses}
      variants={variants}
      {...rest}
    >
      {children}
    </MotionComponent>
  );
};

/**
 * Card.Header component for card headers
 */
Card.Header = ({ children, className = '', ...rest }) => {
  const headerClasses = [
    'px-6 py-4 border-b border-gray-200',
    className
  ].join(' ');
  
  return (
    <div className={headerClasses} {...rest}>
      {children}
    </div>
  );
};

/**
 * Card.Body component for card content
 */
Card.Body = ({ children, className = '', ...rest }) => {
  const bodyClasses = [
    'px-6 py-4',
    className
  ].join(' ');
  
  return (
    <div className={bodyClasses} {...rest}>
      {children}
    </div>
  );
};

/**
 * Card.Footer component for card footers
 */
Card.Footer = ({ children, className = '', ...rest }) => {
  const footerClasses = [
    'px-6 py-4 border-t border-gray-200',
    className
  ].join(' ');
  
  return (
    <div className={footerClasses} {...rest}>
      {children}
    </div>
  );
};

export default Card;