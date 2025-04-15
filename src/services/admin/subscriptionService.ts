import { apiFetch } from '@/utils/api';

export interface Subscription {
  id: string;
  email: string;
  source: string;
  createdAt: string;
}

export const adminSubscriptionService = {
  // Lấy danh sách đăng ký
  getSubscriptions: async () => {
    const response = await apiFetch('/api/subscriptions');
    return response.json();
  },

  // Hủy đăng ký
  unsubscribe: async (id: string) => {
    const response = await apiFetch(`/api/subscriptions/${id}`, {
      method: 'DELETE',
    });
    return response.json();
  },
}; 