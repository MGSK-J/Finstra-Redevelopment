import { useState } from 'react';

/**
 * Custom hook for form validation
 * @param {Object} initialValues - Initial form values
 * @param {Function} validate - Validation function that returns errors object
 * @returns {Object} Form state, handlers, and validation state
 */
const useFormValidation = (initialValues, validate) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });

    // Clear error when user starts typing again
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  // Handle input blur (when user leaves a field)
  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({
      ...touched,
      [name]: true,
    });

    // Validate the field on blur
    const fieldErrors = validate({ [name]: values[name] });
    setErrors({
      ...errors,
      ...fieldErrors,
    });
  };

  // Handle form submission
  const handleSubmit = async (onSubmit) => (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate all fields
    const formErrors = validate(values);
    setErrors(formErrors);

    // Mark all fields as touched
    const allTouched = Object.keys(values).reduce(
      (acc, key) => ({ ...acc, [key]: true }),
      {}
    );
    setTouched(allTouched);

    // If no errors, call the onSubmit callback
    if (Object.keys(formErrors).length === 0) {
      try {
        await onSubmit(values);
        // Reset form after successful submission if needed
        // setValues(initialValues);
        // setTouched({});
      } catch (error) {
        console.error('Form submission error:', error);
        // Handle submission error if needed
      }
    }

    setIsSubmitting(false);
  };

  // Reset the form to initial values
  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
  };

  // Check if a field has an error and has been touched
  const hasError = (field) => !!(errors[field] && touched[field]);

  // Get error message for a field
  const getErrorMessage = (field) => (hasError(field) ? errors[field] : '');

  return {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
    hasError,
    getErrorMessage,
  };
};

export default useFormValidation;