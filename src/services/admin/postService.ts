import { apiFetch } from '@/utils/api';

export interface Post {
  id: string;
  title: string;
  slug: string;
  content: string;
  summary: string;
  imageUrl: string;
  isPublished: boolean;
  tags: string[];
  authorName: string;
  createdAt: string;
  updatedAt: string;
}

export interface PostCreate {
  title: string;
  slug: string;
  content: string;
  summary: string;
  imageUrl: string;
  isPublished: boolean;
  tags: string[];
  authorName: string;
}

export interface PostUpdate extends Partial<PostCreate> {}

export interface PostsResponse {
  posts: Post[];
  total: number;
  page: number;
  limit: number;
}

export const adminPostService = {
  // Lấy danh sách bài viết
  getPosts: async (params: {
    search?: string;
    tag?: string;
    limit?: number;
    page?: number;
  }): Promise<PostsResponse> => {
    const queryParams = new URLSearchParams();
    if (params.search) queryParams.append('search', params.search);
    if (params.tag) queryParams.append('tag', params.tag);
    if (params.limit) queryParams.append('limit', params.limit.toString());
    if (params.page) queryParams.append('page', params.page.toString());

    const response = await apiFetch(`/api/posts?${queryParams.toString()}`);
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    return response.json();
  },

  // Lấy chi tiết bài viết
  getPost: async (id: string): Promise<Post> => {
    const response = await apiFetch(`/api/posts/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch post');
    }
    return response.json();
  },

  // Tạo bài viết mới
  createPost: async (data: PostCreate): Promise<void> => {
    const response = await apiFetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error('Failed to create post');
    }
  },

  // Cập nhật bài viết
  updatePost: async (id: string, data: PostUpdate): Promise<void> => {
    const response = await apiFetch(`/api/posts/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error('Failed to update post');
    }
  },

  // Xóa bài viết
  deletePost: async (id: string): Promise<void> => {
    const response = await apiFetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete post');
    }
  },
}; 