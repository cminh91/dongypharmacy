import { apiFetch } from '@/utils/api';

export interface Contact {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  phoneNumber: string;
  isRead: boolean;
  isReplied: boolean;
  replyNotes?: string;
}

export const adminContactService = {
  // Lấy danh sách liên hệ
  getContacts: async () => {
    const response = await apiFetch('/api/contact');
    return response.json();
  },

  // Đánh dấu đã đọc
  markAsRead: async (id: string) => {
    const response = await apiFetch(`/api/contact/${id}/read`, {
      method: 'PUT',
    });
    return response.json();
  },

  // Đánh dấu đã trả lời
  markAsReplied: async (id: string) => {
    const response = await apiFetch(`/api/contact/${id}/replied`, {
      method: 'PUT',
    });
    return response.json();
  },

  // Xóa liên hệ
  deleteContact: async (id: string) => {
    const response = await apiFetch(`/api/contact/${id}`, {
      method: 'DELETE',
    });
    return response.json();
  },
}; 