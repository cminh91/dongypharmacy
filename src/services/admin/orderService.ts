import { apiFetch } from '@/utils/api';

export interface Order {
  id: string;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
  trackingNumber?: string;
  cancelReason?: string;
  // Thêm các trường khác nếu cần
}

export interface OrderStatusUpdate {
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
  trackingNumber?: string;
  cancelReason?: string;
}

export const adminOrderService = {
  // Lấy danh sách đơn hàng
  getOrders: async () => {
    const response = await apiFetch('/api/orders/admin/orders');
    return response.json();
  },

  // Lấy chi tiết đơn hàng
  getOrder: async (id: string) => {
    const response = await apiFetch(`/api/orders/${id}`);
    return response.json();
  },

  // Cập nhật trạng thái đơn hàng
  updateOrderStatus: async (id: string, data: OrderStatusUpdate) => {
    const response = await apiFetch(`/api/orders/admin/orders/${id}/status`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },
}; 