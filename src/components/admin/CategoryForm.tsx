"use client";

import React, { FC, useState } from 'react';
import Image from 'next/image';

export interface CategoryData {
  id?: string;
  name: string;
  slug: string;
  description?: string;
  image?: File | string;
  status: 'hien-thi' | 'an';
}

// Remove the unused CategoryFormData type
interface CategoryFormProps {
  onSubmit: (data: CategoryData) => void;
  initialValues?: Partial<CategoryData>;
}

const CategoryForm: FC<CategoryFormProps> = ({ onSubmit, initialValues }) => {
  const [nameError, setNameError] = useState('');
  const [slugError, setSlugError] = useState('');
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    
    // Validate required fields
    const name = formData.get('name') as string;
    const slug = formData.get('slug') as string;
    
    if (!name) {
      setNameError('Tên danh mục là bắt buộc');
      setIsSubmitting(false);
      return;
    } else {
      setNameError('');
    }

    if (!slug) {
      setSlugError('Slug là bắt buộc');
      setIsSubmitting(false);
      return;
    } else {
      setSlugError('');
    }

    try {
      const data: CategoryData = {
        name,
        slug,
        description: formData.get('description') as string | undefined,
        status: formData.get('status') as 'hien-thi' | 'an',
        image: formData.get('image') as File | undefined
      };
      await onSubmit(data);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
          Tên danh mục:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          defaultValue={initialValues?.name}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
        {nameError && <p className="text-red-500 text-xs italic">{nameError}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="slug" className="block text-gray-700 text-sm font-bold mb-2">
          Slug:
        </label>
        <input
          type="text"
          id="slug"
          name="slug"
          defaultValue={initialValues?.slug}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
        {slugError && <p className="text-red-500 text-xs italic">{slugError}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
          Mô tả:
        </label>
        <textarea
          id="description"
          name="description"
          defaultValue={initialValues?.description}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">
          Hình ảnh:
        </label>
        <input
          type="file"
          id="image"
          name="image"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              const reader = new FileReader();
              reader.onloadend = () => {
                setImagePreviewUrl(reader.result as string);
              };
              reader.readAsDataURL(file);
            } else {
              setImagePreviewUrl(null);
            }
          }}
        />
      </div>
      {imagePreviewUrl && (
        <div className="mb-4">
          {/* Replace img with Image component from next/image */}
          <div className="relative h-40 w-auto">
            <Image 
              src={imagePreviewUrl} 
              alt="Preview" 
              className="rounded-md" 
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      )}
      <div className="mb-4">
        <label htmlFor="status" className="block text-gray-700 text-sm font-bold mb-2">
          Trạng thái:
        </label>
        <select
          id="status"
          name="status"
          defaultValue={initialValues?.status}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="hien-thi">Hiển thị</option>
          <option value="an">Ẩn</option>
        </select>
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Đang xử lý...
            </span>
          ) : (
            initialValues ? 'Lưu thay đổi' : 'Thêm danh mục'
          )}
        </button>
      </div>
    </form>
  );
};

export default CategoryForm;