import { apiFetch } from '@/utils/api';

export interface Category {
  id: string;
  name: string;
  description?: string;
  parentId?: string;
  slug?: string;
  imageUrl?: string;
  isActive?: boolean;
}

export interface CategoriesResponse {
  data: Category[];
  pagination?: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

export const adminCategoryService = {
  // Lấy danh sách danh mục
  getCategories: async (params?: {
    search?: string;
    isActive?: boolean;
    page?: number;
    limit?: number;
  }): Promise<CategoriesResponse> => {
    const queryParams = new URLSearchParams();
    if (params?.search) queryParams.append('search', params.search);
    if (params?.isActive !== undefined) queryParams.append('isActive', params.isActive.toString());
    if (params?.page) queryParams.append('page', params.page.toString());
    if (params?.limit) queryParams.append('limit', params.limit.toString());

    try {
      // Tạm thời trả về danh sách mẫu cho đến khi API được triển khai
      return {
        data: [
          { id: '1', name: 'Thuốc kháng sinh' },
          { id: '2', name: 'Thuốc giảm đau' },
          { id: '3', name: 'Vitamin & Thực phẩm chức năng' },
          { id: '4', name: 'Dụng cụ y tế' },
          { id: '5', name: 'Chăm sóc cá nhân' }
        ],
        pagination: {
          total: 5,
          page: 1,
          limit: 10,
          totalPages: 1
        }
      };
      
      // Phần code dưới đây sẽ được sử dụng khi API đã được triển khai
      /*
      const response = await apiFetch(`/api/categories?${queryParams.toString()}`);
      return response.json();
      */
    } catch (error) {
      console.error('Lỗi khi lấy danh sách danh mục:', error);
      return { data: [] };
    }
  },

  // Lấy chi tiết danh mục
  getCategory: async (id: string): Promise<Category> => {
    try {
      // Tạm thời trả về dữ liệu mẫu
      return { id, name: `Danh mục ${id}` };
      
      // Khi API đã được triển khai
      /*
      const response = await apiFetch(`/api/categories/${id}`);
      return response.json();
      */
    } catch (error) {
      console.error(`Lỗi khi lấy thông tin danh mục ${id}:`, error);
      throw error;
    }
  },

  // Tạo danh mục mới
  createCategory: async (data: Omit<Category, 'id'>): Promise<Category> => {
    try {
      // Khi API đã được triển khai
      /*
      const response = await apiFetch('/api/categories', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      return response.json();
      */
      
      // Tạm thời trả về dữ liệu mẫu
      return {
        id: Math.random().toString(36).substring(2, 9),
        ...data
      };
    } catch (error) {
      console.error('Lỗi khi tạo danh mục:', error);
      throw error;
    }
  },

  // Cập nhật danh mục
  updateCategory: async (id: string, data: Partial<Category>): Promise<Category> => {
    try {
      // Khi API đã được triển khai
      /*
      const response = await apiFetch(`/api/categories/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      return response.json();
      */
      
      // Tạm thời trả về dữ liệu mẫu
      return {
        id,
        name: data.name || `Danh mục ${id}`,
        ...data
      };
    } catch (error) {
      console.error(`Lỗi khi cập nhật danh mục ${id}:`, error);
      throw error;
    }
  },

  // Xóa danh mục
  deleteCategory: async (id: string): Promise<void> => {
    try {
      // Khi API đã được triển khai
      /*
      await apiFetch(`/api/categories/${id}`, {
        method: 'DELETE',
      });
      */
      
      // Không làm gì cả trong bản demo
      console.log(`Danh mục ${id} đã được xóa`);
    } catch (error) {
      console.error(`Lỗi khi xóa danh mục ${id}:`, error);
      throw error;
    }
  }
};
