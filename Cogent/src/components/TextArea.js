import React from 'react';
import { motion } from 'framer-motion';
import { formFieldFocus } from '../utils/animations';

/**
 * TextArea component for consistent form styling
 * 
 * @param {Object} props - Component props
 * @param {string} props.id - TextArea ID
 * @param {string} props.name - TextArea name
 * @param {string} props.label - TextArea label
 * @param {string} props.placeholder - TextArea placeholder
 * @param {string} props.value - TextArea value
 * @param {Function} props.onChange - Change handler
 * @param {Function} props.onBlur - Blur handler
 * @param {boolean} props.required - Whether textarea is required
 * @param {string} props.error - Error message
 * @param {boolean} props.touched - Whether textarea has been touched
 * @param {number} props.rows - Number of rows
 * @param {string} props.className - Additional CSS classes
 */
const TextArea = ({
  id,
  name,
  label,
  placeholder,
  value,
  onChange,
  onBlur,
  required = false,
  error,
  touched,
  rows = 4,
  className = '',
  ...rest
}) => {
  // Determine if we should show an error
  const showError = error && touched;
  
  // TextArea classes based on error state
  const textareaClasses = [
    'w-full px-4 py-2 border rounded-md bg-white focus:outline-none transition-all duration-200',
    showError 
      ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500' 
      : 'border-gray-300 focus:border-purple-500 focus:ring-1 focus:ring-purple-500',
    className
  ].join(' ');
  
  return (
    <div className="mb-4">
      {label && (
        <label 
          htmlFor={id || name} 
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <motion.div whileFocus={formFieldFocus}>
        <textarea
          id={id || name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          required={required}
          rows={rows}
          className={textareaClasses}
          aria-invalid={showError ? 'true' : 'false'}
          aria-describedby={showError ? `${name}-error` : undefined}
          {...rest}
        />
      </motion.div>
      
      {showError && (
        <motion.p 
          id={`${name}-error`}
          className="mt-1 text-sm text-red-500"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          {error}
        </motion.p>
      )}
    </div>
  );
};

export default TextArea;