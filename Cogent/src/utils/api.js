import axios from 'axios';

// Base URL for API calls
const API_BASE_URL = process.env.NODE_ENV === 'production'
  ? '/api' // In production, API calls are made to the same domain
  : 'http://localhost:5000/api'; // In development, API calls are made to the backend server

// Create an axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Submit registration form data
 * @param {Object} formData - Registration form data
 * @returns {Promise} - Promise with the response data
 */
export const submitRegistration = async (formData) => {
  try {
    const response = await api.post('/register', formData);
    return response.data;
  } catch (error) {
    // Handle error and provide meaningful message
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      throw new Error(error.response.data.message || 'Registration failed');
    } else if (error.request) {
      // The request was made but no response was received
      throw new Error('No response from server. Please try again later.');
    } else {
      // Something happened in setting up the request that triggered an Error
      throw new Error('Error setting up request. Please try again.');
    }
  }
};

/**
 * Get all registrations
 * @returns {Promise} - Promise with the response data
 */
export const getRegistrations = async () => {
  try {
    const response = await api.get('/registrations');
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message || 'Failed to fetch registrations');
    } else if (error.request) {
      throw new Error('No response from server. Please try again later.');
    } else {
      throw new Error('Error setting up request. Please try again.');
    }
  }
};

export default api;