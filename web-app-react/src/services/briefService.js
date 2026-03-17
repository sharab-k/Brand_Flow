import api from '../api/client';

export const briefService = {
  getBriefs: async (params) => {
    const response = await api.get('/briefs', { params });
    return response.data;
  },

  getBriefById: async (id) => {
    const response = await api.get(`/briefs/${id}`);
    return response.data;
  },

  createBrief: async (briefData) => {
    const response = await api.post('/briefs', briefData);
    return response.data;
  },

  updateBrief: async (id, briefData) => {
    const response = await api.put(`/briefs/${id}`, briefData);
    return response.data;
  },

  deleteBrief: async (id) => {
    const response = await api.delete(`/briefs/${id}`);
    return response.data;
  },

  inviteManufacturers: async (id, manufacturerIds) => {
    const response = await api.post(`/briefs/${id}/invite`, { manufacturerIds });
    return response.data;
  }
};
