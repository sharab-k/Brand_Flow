import api from '../api/client';

export const userService = {
  getProfile: async () => {
    const response = await api.get('/user/profile');
    return response.data;
  },

  updateProfile: async (profileData) => {
    const response = await api.put('/user/profile', profileData);
    return response.data;
  },

  updateSettings: async (settingsData) => {
    const response = await api.put('/user/settings', settingsData);
    return response.data;
  },

  getBillingInfo: async () => {
    const response = await api.get('/user/billing');
    return response.data;
  },

  getOrganizationInfo: async () => {
    const response = await api.get('/user/organization');
    return response.data;
  },

  updateOrganizationInfo: async (orgData) => {
    const response = await api.put('/user/organization', orgData);
    return response.data;
  }
};
