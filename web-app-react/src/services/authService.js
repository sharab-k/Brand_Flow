import client from '../api/client';

const authService = {
  login: async (credentials) => {
    return client.post('/auth/login', credentials);
  },
  
  register: async (userData) => {
    return client.post('/auth/register', userData);
  },

  forgotPassword: async (email) => {
    return client.post('/auth/forgot-password', { email });
  },

  resetPassword: async (data) => {
    return client.post('/auth/reset-password', data);
  },

  verifyOtp: async (otp) => {
    return client.post('/auth/verify-otp', { otp });
  }
};

export default authService;
