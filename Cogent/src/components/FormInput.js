import React from 'react';
import { motion } from 'framer-motion';
import { formFieldFocus } from '../utils/animations';

/**
 * FormInput component for consistent form styling
 * 
 * @param {Object} props - Component props
 * @param {string} props.id - Input ID
 * @param {string} props.name - Input name
 * @param {string} props.type - Input type (text, email, tel, etc.)
 * @param {string} props.label - Input label
 * @param {string} props.placeholder - Input placeholder
 * @param {string} props.value - Input value
 * @param {Function} props.onChange - Change handler
 * @param {Function} props.onBlur - Blur handler
 * @param {boolean} props.required - Whether input is required
 * @param {string} props.error - Error message
 * @param {boolean} props.touched - Whether input has been touched
 * @param {string} props.className - Additional CSS classes
 */
const FormInput = ({
  id,
  name,
  type = 'text',
  label,
  placeholder,
  value,
  onChange,
  onBlur,
  required = false,
  error,
  touched,
  className = '',
  ...rest
}) => {
  // Determine if we should show an error
  const showError = error && touched;
  
  // Input classes based on error state
  const inputClasses = [
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
        <input
          id={id || name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          required={required}
          className={inputClasses}
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

export default FormInput;