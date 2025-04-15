'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { adminProductService } from '@/services/admin/productService';
import SingleImageUpload from '@/components/ui/SingleImageUpload';
import MultipleImageUpload from '@/components/ui/MultipleImageUpload';
import { apiFetch } from '@/utils/api';

export default function AddProductPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [mainImageFile, setMainImageFile] = useState<File | null>(null);
  const [additionalImageFiles, setAdditionalImageFiles] = useState<File[]>([]);

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: 0,
    salePrice: 0,
    stockQuantity: 0,
    imageUrl: '',
    additionalImages: [] as string[],
    categoryId: '',
    isActive: true,
    isFeatured: false,
  });

  const handleMainImageChange = (file: File | null) => {
    setMainImageFile(file);
  };

  const handleAdditionalImagesChange = (files: File[]) => {
    setAdditionalImageFiles(files);
  };

  const handleImageChange = async (file: File | null) => {
    if (!file) {
      setFormData(prev => ({
        ...prev,
        imageUrl: ''
      }));
      return;
    }

    try {
      const formData = new FormData();
      formData.append('images', file);

      const response = await apiFetch('/api/upload-images', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      const data = await response.json();
      if (data.imageUrls && data.imageUrls.length > 0) {
        setFormData(prev => ({
          ...prev,
          imageUrl: data.imageUrls[0]
        }));
      }
    } catch (err) {
      console.error('Error uploading image:', err);
      // Handle error appropriately
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Upload main image
      let imageUrl = '';
      if (mainImageFile) {
        const formData = new FormData();
        formData.append('images', mainImageFile);
        const response = await apiFetch('/api/upload-images', {
          method: 'POST',
          body: formData,
        });
        const result = await response.json();
        if (result.imageUrls && result.imageUrls.length > 0) {
          imageUrl = result.imageUrls[0];
        }
      }

      // Upload additional images
      let additionalImages: string[] = [];
      if (additionalImageFiles.length > 0) {
        const formData = new FormData();
        additionalImageFiles.forEach(file => {
          formData.append('images', file);
        });
        const response = await apiFetch('/api/upload-images', {
          method: 'POST',
          body: formData,
        });
        const result = await response.json();
        if (result.imageUrls) {
          additionalImages = result.imageUrls;
        }
      }

      // Create product
      const productData = {
        ...formData,
        imageUrl,
        additionalImages,
      };

      await adminProductService.createProduct(productData);
      router.push('/admin/products');
    } catch (err) {
      console.error('Error creating product:', err);
      setError('Có lỗi xảy ra khi tạo sản phẩm');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Thêm sản phẩm mới</h1>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Ảnh chính
          </label>
          <SingleImageUpload onChange={handleMainImageChange} />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Ảnh phụ
          </label>
          <MultipleImageUpload onChange={handleAdditionalImagesChange} />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tên sản phẩm
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Mô tả
          </label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            rows={4}
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Giá
            </label>
            <input
              type="number"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Giá khuyến mãi
            </label>
            <input
              type="number"
              value={formData.salePrice}
              onChange={(e) => setFormData({ ...formData, salePrice: parseFloat(e.target.value) })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Số lượng
          </label>
          <input
            type="number"
            value={formData.stockQuantity}
            onChange={(e) => setFormData({ ...formData, stockQuantity: parseInt(e.target.value) })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Danh mục
          </label>
          <input
            type="text"
            value={formData.categoryId}
            onChange={(e) => setFormData({ ...formData, categoryId: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div> */}

        <div className="flex items-center space-x-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={formData.isActive}
              onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
              className="mr-2"
            />
            <span className="text-sm text-gray-700">Hiển thị</span>
          </label>

          <label className="flex items-center">
            <input
              type="checkbox"
              checked={formData.isFeatured}
              onChange={(e) => setFormData({ ...formData, isFeatured: e.target.checked })}
              className="mr-2"
            />
            <span className="text-sm text-gray-700">Nổi bật</span>
          </label>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => router.back()}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
          >
            Hủy
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
          >
            {isSubmitting ? 'Đang lưu...' : 'Lưu'}
          </button>
        </div>
      </form>
    </div>
  );
}