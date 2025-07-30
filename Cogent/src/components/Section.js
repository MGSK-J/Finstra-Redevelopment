import React from 'react';
import { motion } from 'framer-motion';

/**
 * Section component for consistent page sections
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Section content
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.id - Section ID for navigation
 * @param {string} props.title - Section title
 * @param {string} props.subtitle - Section subtitle
 * @param {string} props.titleClassName - Additional CSS classes for title
 * @param {string} props.subtitleClassName - Additional CSS classes for subtitle
 * @param {Object} props.variants - Framer Motion variants
 * @param {boolean} props.centered - Whether to center content
 * @param {string} props.background - Background style (white, gray, gradient, etc.)
 */
const Section = ({
  children,
  className = '',
  id,
  title,
  subtitle,
  titleClassName = '',
  subtitleClassName = '',
  variants,
  centered = false,
  background = 'white',
  ...rest
}) => {
  // Background classes based on background prop
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    dark: 'bg-gray-900 text-white',
    gradient: 'bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 text-white',
    none: ''
  };
  
  // Base classes for all sections
  const baseClasses = 'py-16 md:py-24';
  
  // Centered content classes
  const centeredClasses = centered ? 'text-center' : '';
  
  // Combine all classes
  const sectionClasses = [
    baseClasses,
    backgroundClasses[background] || backgroundClasses.white,
    centeredClasses,
    className
  ].join(' ');
  
  // Title classes
  const defaultTitleClasses = 'text-3xl md:text-4xl font-bold mb-4';
  const combinedTitleClasses = [defaultTitleClasses, titleClassName].join(' ');
  
  // Subtitle classes
  const defaultSubtitleClasses = 'text-xl md:text-2xl text-gray-600 mb-8';
  const combinedSubtitleClasses = [defaultSubtitleClasses, subtitleClassName].join(' ');
  
  return (
    <motion.section
      id={id}
      className={sectionClasses}
      variants={variants}
      {...rest}
    >
      <div className="container mx-auto px-4">
        {title && (
          <motion.h2 
            className={combinedTitleClasses}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h2>
        )}
        
        {subtitle && (
          <motion.p 
            className={combinedSubtitleClasses}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {subtitle}
          </motion.p>
        )}
        
        {children}
      </div>
    </motion.section>
  );
};

export default Section;