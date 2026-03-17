import api from '../api/client';

export const messageService = {
  getConversations: async () => {
    const response = await api.get('/messages/conversations');
    return response.data;
  },

  getMessages: async (conversationId) => {
    const response = await api.get(`/messages/conversations/${conversationId}`);
    return response.data;
  },

  sendMessage: async (conversationId, messageData) => {
    const response = await api.post(`/messages/conversations/${conversationId}`, messageData);
    return response.data;
  },

  markAsRead: async (conversationId) => {
    const response = await api.put(`/messages/conversations/${conversationId}/read`);
    return response.data;
  }
};
