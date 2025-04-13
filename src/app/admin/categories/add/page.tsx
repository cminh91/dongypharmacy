"use client";

import React, { FC } from 'react';
import Link from 'next/link';
import CategoryForm from '@/components/admin/CategoryForm';

import type { CategoryData } from '@/components/admin/CategoryForm';

const AddCategoryPage: FC = () => {
  const handleSubmit = (data: CategoryData) => {
    console.log('Thêm danh mục:', data);
    // Gọi API thêm danh mục ở đây
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">Thêm danh mục mới</h1>
      <Link href="/admin/categories" className="inline-block mb-4 text-blue-500 hover:underline">
        {`<< Quay lại trang danh mục`}
      </Link>
      <div className="bg-white shadow-md rounded-lg p-6">
        <CategoryForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default AddCategoryPage;