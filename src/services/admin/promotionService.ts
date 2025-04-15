import { apiFetch } from '@/utils/api';

export interface Promotion {
  id: string;
  name: string;
  code: string;
  type: 'percentage' | 'fixed';
  amount: number;
  startDate: string;
  endDate: string;
  description: string;
  minimumPurchase: number;
  usageLimit: number;
  isActive: boolean;
}

export interface PromotionCreate {
  name: string;
  code: string;
  type: 'percentage' | 'fixed';
  amount: number;
  startDate: string;
  endDate: string;
  description: string;
  minimumPurchase: number;
  usageLimit: number;
  isActive?: boolean;
}

export const adminPromotionService = {
  // Lấy danh sách khuyến mãi
  getPromotions: async () => {
    const response = await apiFetch('/api/promotions');
    return response.json();
  },

  // Lấy chi tiết khuyến mãi
  getPromotion: async (id: string) => {
    const response = await apiFetch(`/api/promotions/${id}`);
    return response.json();
  },

  // Tạo khuyến mãi mới
  createPromotion: async (data: PromotionCreate) => {
    const response = await apiFetch('/api/promotions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  // Xóa khuyến mãi
  deletePromotion: async (id: string) => {
    const response = await apiFetch(`/api/promotions/${id}`, {
      method: 'DELETE',
    });
    return response.json();
  },
}; 