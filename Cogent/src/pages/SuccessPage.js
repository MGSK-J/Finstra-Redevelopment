import React, { useEffect } from 'react';
import { Link, useLocation, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const SuccessPage = () => {
  const location = useLocation();
  const { state } = location;
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // If no state is passed (direct URL access), redirect to home
  if (!state || !state.name) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="pt-20 pb-16 bg-dark-dark min-h-screen flex items-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-primary/20 to-purple-900/20 p-8 md:p-12 rounded-lg border border-primary/30"
        >
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-primary/20 p-3">
              <svg className="w-16 h-16 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Registration Successful!
          </h1>
          
          <p className="text-xl text-gray-300 mb-6">
            Thank you, {state.name}! Your registration for Finastra's Universal Banking Forum has been confirmed. We're excited to have you join us for this exclusive event.
          </p>
          
          <div className="bg-dark-dark/50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">Event Details</h2>
            
            <div className="space-y-3 text-left">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-primary mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                </svg>
                <div>
                  <span className="block text-white font-medium">Date & Time</span>
                  <span className="block text-gray-400">June 15th, 2023 | 8:30 AM - 6:30 PM BST</span>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="w-5 h-5 text-primary mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                </svg>
                <div>
                  <span className="block text-white font-medium">Location</span>
                  <span className="block text-gray-400">The Landmark London, 222 Marylebone Rd, London, UK</span>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="w-5 h-5 text-primary mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <div>
                  <span className="block text-white font-medium">Confirmation</span>
                  <span className="block text-gray-400">A confirmation email has been sent to your registered email address</span>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-gray-300 mb-8">
            We look forward to seeing you at the event! You'll receive additional information about the agenda and speakers in the coming days. For more information about Finastra, visit <a href="https://www.finastra.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.finastra.com</a>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/agenda" className="btn-secondary">
              View Agenda
            </Link>
            <Link to="/" className="btn-primary">
              Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SuccessPage;