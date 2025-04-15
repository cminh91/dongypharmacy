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
  tags: string[];
  isActive: boolean;
  isFeatured: boolean;
  specifications: string;
  usageInstructions: string;
  sku: string;
  categoryId: string;
}

export interface ProductsResponse {
  data: Product[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
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

export const productService = {
  // Lấy danh sách sản phẩm với các tùy chọn lọc, sắp xếp và phân trang
  getProducts: async (params?: {
    search?: string;
    categoryId?: string;
    minPrice?: number;
    maxPrice?: number;
    tag?: string;
    featured?: boolean;
    sortBy?: string;
    sortOrder?: 'ASC' | 'DESC';
    page?: number;
    limit?: number;
  }): Promise<ProductsResponse> => {
    const queryParams = new URLSearchParams();
    if (params?.search) queryParams.append('search', params.search);
    if (params?.categoryId) queryParams.append('categoryId', params.categoryId);
    if (params?.minPrice) queryParams.append('minPrice', params.minPrice.toString());
    if (params?.maxPrice) queryParams.append('maxPrice', params.maxPrice.toString());
    if (params?.tag) queryParams.append('tag', params.tag);
    if (params?.featured !== undefined) queryParams.append('featured', params.featured.toString());
    if (params?.sortBy) queryParams.append('sortBy', params.sortBy);
    if (params?.sortOrder) queryParams.append('sortOrder', params.sortOrder);
    if (params?.page) queryParams.append('page', params.page.toString());
    if (params?.limit) queryParams.append('limit', params.limit.toString());
    
    const response = await apiFetch(`/api/products?${queryParams.toString()}`);
    return response.json();
  },
  
  // Lấy sản phẩm theo ID
  getProduct: async (id: string): Promise<Product> => {
    const response = await apiFetch(`/api/products/${id}`);
    return response.json();
  },
  
  // Lấy danh sách sản phẩm nổi bật
  getFeaturedProducts: async (): Promise<Product[]> => {
    const response = await apiFetch('/api/products/featured');
    return response.json();
  },
  
  // Lấy đánh giá của một sản phẩm
  getProductReviews: async (productId: string): Promise<ProductReview[]> => {
    const response = await apiFetch(`/api/products/${productId}/reviews`);
    return response.json();
  },
  
  // Tạo đánh giá sản phẩm mới
  createProductReview: async (productId: string, reviewData: {
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
        ...reviewData
      }),
    });
    return response.json();
  }
}; 