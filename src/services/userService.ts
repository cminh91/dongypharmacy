import { apiFetch } from '@/utils/api';

export interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user';
  status: 'active' | 'inactive';
  created_at: string;
  updated_at: string;
}

export interface UserCreate {
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'user';
  status: 'active' | 'inactive';
}

export interface UserUpdate {
  name?: string;
  email?: string;
  role?: 'admin' | 'user';
  status?: 'active' | 'inactive';
}

export const userService = {
  // Lấy danh sách người dùng
  getUsers: async (params?: { page?: number; limit?: number; search?: string; role?: string }) => {
    const queryParams = new URLSearchParams();
    if (params?.page) queryParams.append('page', params.page.toString());
    if (params?.limit) queryParams.append('limit', params.limit.toString());
    if (params?.search) queryParams.append('search', params.search);
    if (params?.role) queryParams.append('role', params.role);
    
    const response = await apiFetch(`/users?${queryParams.toString()}`);
    return response.json();
  },

  // Lấy chi tiết người dùng
  getUser: async (id: number) => {
    const response = await apiFetch(`/users/${id}`);
    return response.json();
  },

  // Tạo người dùng mới
  createUser: async (data: UserCreate) => {
    const response = await apiFetch('/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  // Cập nhật người dùng
  updateUser: async (id: number, data: UserUpdate) => {
    const response = await apiFetch(`/users/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  // Xóa người dùng
  deleteUser: async (id: number) => {
    const response = await apiFetch(`/users/${id}`, {
      method: 'DELETE',
    });
    return response.json();
  },
}; 