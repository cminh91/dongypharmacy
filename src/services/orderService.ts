import { apiFetch } from '@/utils/api';

export interface Order {
  id: number;
  user_id: number;
  total_amount: number;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
  payment_status: 'pending' | 'paid' | 'failed';
  shipping_address: string;
  created_at: string;
  updated_at: string;
}

export interface OrderUpdate {
  status?: 'pending' | 'processing' | 'completed' | 'cancelled';
  payment_status?: 'pending' | 'paid' | 'failed';
}

export const orderService = {
  // Lấy danh sách đơn hàng
  getOrders: async (params?: { page?: number; limit?: number; search?: string; status?: string }) => {
    const queryParams = new URLSearchParams();
    if (params?.page) queryParams.append('page', params.page.toString());
    if (params?.limit) queryParams.append('limit', params.limit.toString());
    if (params?.search) queryParams.append('search', params.search);
    if (params?.status) queryParams.append('status', params.status);
    
    const response = await apiFetch(`/orders?${queryParams.toString()}`);
    return response.json();
  },

  // Lấy chi tiết đơn hàng
  getOrder: async (id: number) => {
    const response = await apiFetch(`/orders/${id}`);
    return response.json();
  },

  // Cập nhật trạng thái đơn hàng
  updateOrder: async (id: number, data: OrderUpdate) => {
    const response = await apiFetch(`/orders/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  // Lấy thống kê đơn hàng
  getOrderStats: async () => {
    const response = await apiFetch('/orders/stats');
    return response.json();
  },
}; 