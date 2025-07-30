/**
 * Form validation utility functions
 */

// Email validation regex
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Phone number validation regex (accepts various formats)
const PHONE_REGEX = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;

// URL validation regex
const URL_REGEX = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;

/**
 * Validates if a value is not empty
 * @param {string} value - The value to check
 * @returns {boolean} - True if value is not empty
 */
export const isNotEmpty = (value) => {
  return value !== undefined && value !== null && value.trim() !== '';
};

/**
 * Validates if a value is a valid email
 * @param {string} email - The email to validate
 * @returns {boolean} - True if email is valid
 */
export const isValidEmail = (email) => {
  return EMAIL_REGEX.test(email);
};

/**
 * Validates if a value is a valid phone number
 * @param {string} phone - The phone number to validate
 * @returns {boolean} - True if phone number is valid
 */
export const isValidPhone = (phone) => {
  return PHONE_REGEX.test(phone);
};

/**
 * Validates if a value is a valid URL
 * @param {string} url - The URL to validate
 * @returns {boolean} - True if URL is valid
 */
export const isValidUrl = (url) => {
  return URL_REGEX.test(url);
};

/**
 * Validates if a value has minimum length
 * @param {string} value - The value to check
 * @param {number} minLength - The minimum length required
 * @returns {boolean} - True if value meets minimum length
 */
export const hasMinLength = (value, minLength) => {
  return value && value.length >= minLength;
};

/**
 * Validates if a value has maximum length
 * @param {string} value - The value to check
 * @param {number} maxLength - The maximum length allowed
 * @returns {boolean} - True if value meets maximum length
 */
export const hasMaxLength = (value, maxLength) => {
  return value && value.length <= maxLength;
};

/**
 * Validates registration form fields
 * @param {Object} values - Form values
 * @returns {Object} - Object with error messages
 */
export const validateRegistrationForm = (values) => {
  const errors = {};
  
  // First Name validation
  if (!isNotEmpty(values.firstName)) {
    errors.firstName = 'First name is required';
  }
  
  // Last Name validation
  if (!isNotEmpty(values.lastName)) {
    errors.lastName = 'Last name is required';
  }
  
  // Job Title validation
  if (!isNotEmpty(values.jobTitle)) {
    errors.jobTitle = 'Job title is required';
  }
  
  // Company validation
  if (!isNotEmpty(values.company)) {
    errors.company = 'Company name is required';
  }
  
  // Mobile Number validation
  if (!isNotEmpty(values.mobileNumber)) {
    errors.mobileNumber = 'Mobile number is required';
  } else if (!isValidPhone(values.mobileNumber)) {
    errors.mobileNumber = 'Please enter a valid mobile number';
  }
  
  // Email validation
  if (!isNotEmpty(values.email)) {
    errors.email = 'Email is required';
  } else if (!isValidEmail(values.email)) {
    errors.email = 'Please enter a valid email address';
  }
  
  // Company Website validation (optional field)
  if (values.companyWebsite && !isValidUrl(values.companyWebsite)) {
    errors.companyWebsite = 'Please enter a valid URL';
  }
  
  return errors;
};

/**
 * Validates contact form fields
 * @param {Object} values - Form values
 * @returns {Object} - Object with error messages
 */
export const validateContactForm = (values) => {
  const errors = {};
  
  // Name validation
  if (!isNotEmpty(values.name)) {
    errors.name = 'Name is required';
  }
  
  // Email validation
  if (!isNotEmpty(values.email)) {
    errors.email = 'Email is required';
  } else if (!isValidEmail(values.email)) {
    errors.email = 'Please enter a valid email address';
  }
  
  // Message validation
  if (!isNotEmpty(values.message)) {
    errors.message = 'Message is required';
  } else if (!hasMinLength(values.message, 10)) {
    errors.message = 'Message must be at least 10 characters';
  }
  
  return errors;
};