import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import axios from 'axios';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Submit to backend API
      const response = await axios.post('http://localhost:5000/api/register', data);
      
      // If successful, navigate to success page
      if (response.status === 201) {
        navigate('/success', { state: { name: data.firstName } });
      }
    } catch (error) {
      console.error('Registration error:', error);
      
      if (error.response && error.response.data && error.response.data.error) {
        setSubmitError(error.response.data.error);
      } else {
        setSubmitError('An unexpected error occurred. Please try again later.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20 pb-16 bg-dark-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Register Now
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Join us for Finastra's Universal Banking Forum - an unforgettable experience!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="bg-gradient-to-br from-primary/20 to-purple-900/20 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-6">Register Now</h2>
              <p className="text-gray-300 mb-6">
                Join us on June 15th, 2023 in London, UK, for Finastra's Universal Banking Forum, where we'll explore the future of Open Finance and Banking as a Service.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <div>
                    <h3 className="text-white font-medium">Network with Industry Leaders</h3>
                    <p className="text-gray-400 text-sm">Connect with Finastra executives and financial services experts</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <div>
                    <h3 className="text-white font-medium">Explore Open Finance</h3>
                    <p className="text-gray-400 text-sm">Learn about the future of Banking as a Service and embedded finance</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <div>
                    <h3 className="text-white font-medium">Discover Innovation</h3>
                    <p className="text-gray-400 text-sm">Experience hands-on demos of Finastra's latest solutions and platforms</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-dark-dark/50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-white font-medium">The Landmark London, 222 Marylebone Rd, London, UK</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-white font-medium">June 15th, 2023 | 8:30 AM - 6:30 PM BST</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-dark-light/20 p-6 md:p-8 rounded-lg border border-gray-800">
              <h2 className="text-xl font-semibold text-white mb-6">Registration Form</h2>
              
              {submitError && (
                <div className="mb-6 p-4 bg-red-900/50 border border-red-500 rounded-md">
                  <p className="text-red-200">{submitError}</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-1">First Name *</label>
                    <input
                      id="firstName"
                      type="text"
                      className="form-input"
                      placeholder="Enter your first name"
                      {...register('firstName', { required: 'First name is required' })}
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-sm text-red-400">{errors.firstName.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-1">Last Name *</label>
                    <input
                      id="lastName"
                      type="text"
                      className="form-input"
                      placeholder="Enter your last name"
                      {...register('lastName', { required: 'Last name is required' })}
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-sm text-red-400">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-300 mb-1">Job Title</label>
                  <input
                    id="jobTitle"
                    type="text"
                    className="form-input"
                    placeholder="Enter your job title"
                    {...register('jobTitle')}
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">Company</label>
                  <input
                    id="company"
                    type="text"
                    className="form-input"
                    placeholder="Enter your company name"
                    {...register('company')}
                  />
                </div>
                
                <div>
                  <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-300 mb-1">Mobile Number</label>
                  <input
                    id="mobileNumber"
                    type="tel"
                    className="form-input"
                    placeholder="Enter your mobile number"
                    {...register('mobileNumber')}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address *</label>
                  <input
                    id="email"
                    type="email"
                    className="form-input"
                    placeholder="Enter your email address"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="companyWebsite" className="block text-sm font-medium text-gray-300 mb-1">Company Website URL</label>
                  <input
                    id="companyWebsite"
                    type="url"
                    className="form-input"
                    placeholder="Enter your company website URL"
                    {...register('companyWebsite')}
                  />
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="privacy"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-600 bg-dark-light text-primary focus:ring-primary"
                      {...register('privacy', { required: 'You must agree to the privacy policy' })}
                    />
                  </div>
                  <div className="ml-3">
                    <label htmlFor="privacy" className="text-sm text-gray-300">
                      By filling out the registration form to attend our event, you agree and consent to Finastra's Privacy Policy. For more information, visit <a href="https://www.finastra.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.finastra.com</a>.
                    </label>
                    {errors.privacy && (
                      <p className="mt-1 text-sm text-red-400">{errors.privacy.message}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full btn-primary ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Registering...' : 'Register'}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;