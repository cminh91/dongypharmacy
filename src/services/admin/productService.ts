import { apiFetch } from '@/utils/api';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  salePrice: number;
  stockQuantity: number;
  imageUrl: string;
  additionalImages: string[];
  categoryId: string;
  isActive: boolean;
  isFeatured: boolean;
}

export interface ProductCreate {
  name: string;
  description: string;
  price: number;
  salePrice: number;
  stockQuantity: number;
  imageUrl: string;
  additionalImages: string[];
  categoryId: string;
  isActive: boolean;
  isFeatured: boolean;
}

export interface ProductsResponse {
  data: Product[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface ProductReview {
  id: string;
  productId: string;
  rating: number;
  comment: string;
  imageUrl?: string;
  userId: string;
  createdAt: string;
  user?: {
    id: string;
    name: string;
    avatar?: string;
  };
}

export const adminProductService = {
  getProducts: async (params?: {
    page?: number;
    limit?: number;
    search?: string;
  }): Promise<ProductsResponse> => {
    const queryParams = new URLSearchParams();
    if (params?.page) queryParams.append('page', params.page.toString());
    if (params?.limit) queryParams.append('limit', params.limit.toString());
    if (params?.search) queryParams.append('search', params.search);

    const response = await apiFetch(`/api/products?${queryParams.toString()}`);
    const data = await response.json();
    
    return {
      data: data?.data || [],
      total: data?.total || 0,
      page: data?.page || 1,
      limit: data?.limit || 10,
      totalPages: data?.totalPages || 1,
    };
  },

  getProduct: async (id: string): Promise<Product> => {
    const response = await apiFetch(`/api/products/${id}`);
    const data = await response.json();
    return data;
  },

  createProduct: async (data: ProductCreate): Promise<Product> => {
    const response = await apiFetch('/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  updateProduct: async (id: string, data: Partial<ProductCreate>): Promise<Product> => {
    const response = await apiFetch(`/api/products/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  deleteProduct: async (id: string): Promise<void> => {
    await apiFetch(`/api/products/${id}`, {
      method: 'DELETE',
    });
  },

  getFeaturedProducts: async (): Promise<Product[]> => {
    const response = await apiFetch('/api/products/featured');
    return response.json();
  },

  getProductReviews: async (productId: string): Promise<ProductReview[]> => {
    const response = await apiFetch(`/api/products/${productId}/reviews`);
    return response.json();
  },

  createProductReview: async (productId: string, data: {
    rating: number;
    comment: string;
    imageUrl?: string;
  }): Promise<ProductReview> => {
    const response = await apiFetch(`/api/products/${productId}/reviews`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        productId,
        ...data
      }),
    });
    
    if (!response.ok) {
      throw new Error(`Không thể tạo đánh giá: ${response.status}`);
    }
    
    return response.json();
  }
}; 