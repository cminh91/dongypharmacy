import { apiFetch } from '@/utils/api';

export interface Category {
  id: number;
  name: string;
  description: string;
  status: 'active' | 'inactive';
  created_at: string;
  updated_at: string;
}

export interface CategoryCreate {
  name: string;
  description: string;
  status: 'active' | 'inactive';
}

export const categoryService = {
  // Lấy danh sách danh mục
  getCategories: async (params?: { page?: number; limit?: number; search?: string }) => {
    const queryParams = new URLSearchParams();
    if (params?.page) queryParams.append('page', params.page.toString());
    if (params?.limit) queryParams.append('limit', params.limit.toString());
    if (params?.search) queryParams.append('search', params.search);
    
    const response = await apiFetch(`/categories?${queryParams.toString()}`);
    return response.json();
  },

  // Lấy chi tiết danh mục
  getCategory: async (id: number) => {
    const response = await apiFetch(`/categories/${id}`);
    return response.json();
  },

  // Tạo danh mục mới
  createCategory: async (data: CategoryCreate) => {
    const response = await apiFetch('/categories', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  // Cập nhật danh mục
  updateCategory: async (id: number, data: Partial<CategoryCreate>) => {
    const response = await apiFetch(`/categories/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  // Xóa danh mục
  deleteCategory: async (id: number) => {
    const response = await apiFetch(`/categories/${id}`, {
      method: 'DELETE',
    });
    return response.json();
  },
}; 