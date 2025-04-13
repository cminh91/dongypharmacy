"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import CategoryForm from '@/components/admin/CategoryForm';
import type { CategoryData } from '@/components/admin/CategoryForm';

interface EditCategoryClientProps {
  id: string;
}

const EditCategoryClient: React.FC<EditCategoryClientProps> = ({ id }) => {
  const router = useRouter();
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  // Dữ liệu mẫu, cần thay bằng API call để lấy thông tin danh mục theo ID
  const initialValues: CategoryData = {
    name: 'Thuốc bổ',
    slug: 'thuoc-bo',
    description: 'Các loại thuốc bổ dưỡng cơ thể',
    status: 'hien-thi',
  };

  const handleSubmit = async (data: CategoryData) => {
    try {
      console.log('Sửa danh mục:', { ...data, id });
      // Gọi API sửa danh mục ở đây
      // router.refresh();
    } catch (error) {
      console.error('Lỗi khi sửa danh mục:', error);
    } finally {
      setIsDeleting(false);
    }
  };

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      console.log('Xóa danh mục:', id);
      // Gọi API xóa danh mục ở đây
      router.push('/admin/categories');
    } finally {
      setIsDeleting(false);
      setShowDeleteConfirm(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">Sửa danh mục</h1>
      <div className="flex justify-between items-center mb-4">
        <Link href="/admin/categories" className="text-blue-500 hover:underline">
          {`<< Quay lại trang danh mục`}
        </Link>
        <button
          onClick={() => setShowDeleteConfirm(true)}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          Xóa danh mục
        </button>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6">
        <CategoryForm onSubmit={handleSubmit} initialValues={initialValues} />
      </div>

      {/* Dialog xác nhận xóa */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-lg font-bold mb-4">Xác nhận xóa</h3>
            <p className="mb-6">Bạn có chắc chắn muốn xóa danh mục này? Hành động này không thể hoàn tác.</p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
              >
                Hủy
              </button>
              <button
                onClick={handleDelete}
                disabled={isDeleting}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 disabled:opacity-50"
              >
                {isDeleting ? 'Đang xóa...' : 'Xác nhận xóa'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditCategoryClient;