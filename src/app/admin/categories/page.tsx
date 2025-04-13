"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import toast from 'react-hot-toast';

type Category = {
  id: string;
  name: string;
  image: string;
  slug: string;
  description: string;
  productCount: number;
  status: 'Hiển thị' | 'Ẩn';
};

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setIsLoading(true);
        // TODO: Thay bằng API call thực tế
        const mockCategories: Category[] = [
    {
      id: '1',
      name: 'Thuốc bổ',
      image: '/images/hepasaky.png',
      slug: 'thuoc-bo',
      description: 'Các loại thuốc bổ dưỡng cơ thể',
      productCount: 15,
      status: 'Hiển thị'
    },
    {
      id: '2',
      name: 'Thuốc bổ gan',
      image: '/images/lypasaky.png',
      slug: 'thuoc-bo-gan',
      description: 'Các sản phẩm hỗ trợ chức năng gan',
      productCount: 8,
      status: 'Hiển thị'
    },
    {
      id: '3',
      name: 'Dược liệu',
      image: '/images/trongdong.png',
      slug: 'duoc-lieu',
      description: 'Các loại dược liệu tự nhiên',
      productCount: 12,
      status: 'Hiển thị'
    },
    {
      id: '4',
      name: 'Gia vị Đông y',
      image: '/images/hepasaky.png',
      slug: 'gia-vi-dong-y',
      description: 'Các loại gia vị từ Đông y',
      productCount: 6,
      status: 'Ẩn'
    },
    {
      id: '5',
      name: 'Chăm sóc sắc đẹp',
      image: '/images/lypasaky.png',
      slug: 'cham-soc-sac-dep',
      description: 'Sản phẩm chăm sóc sắc đẹp từ thảo dược',
      productCount: 9,
      status: 'Hiển thị'
    },
        ];
        setCategories(mockCategories);
      } catch (error) {
        toast.error('Lỗi khi tải danh sách danh mục');
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm('Bạn có chắc chắn muốn xóa danh mục này?')) return;
    
    try {
      // TODO: Thay bằng API call xóa thực tế
      console.log('Xóa danh mục:', id);
      setCategories(categories.filter(c => c.id !== id));
      toast.success('Xóa danh mục thành công');
    } catch (error) {
      toast.error('Lỗi khi xóa danh mục');
      console.error(error);
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-6 flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Quản lý danh mục</h1>
        <Link 
          href="/admin/categories/add" 
          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
        >
          <i className="fas fa-plus mr-2"></i>Thêm danh mục
        </Link>
      </div>

      {/* Bộ lọc và tìm kiếm */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Tìm kiếm</label>
            <input 
              type="text" 
              placeholder="Tên danh mục..." 
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Trạng thái</label>
            <select className="w-full border border-gray-300 rounded-md px-3 py-2">
              <option value="">Tất cả trạng thái</option>
              <option value="hien-thi">Hiển thị</option>
              <option value="an">Ẩn</option>
            </select>
          </div>
          <div className="flex items-end">
            <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              <i className="fas fa-search mr-2"></i>Tìm kiếm
            </button>
          </div>
        </div>
      </div>

      {/* Bảng danh mục */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Danh mục</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mô tả</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Slug</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Số sản phẩm</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trạng thái</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Thao tác</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {categories.map((category) => (
                <tr key={category.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 relative">
                        <Image 
                          src={category.image} 
                          alt={category.name}
                          fill
                          className="object-cover rounded-md"
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{category.name}</div>
                        <div className="text-sm text-gray-500">ID: {category.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">{category.description}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{category.slug}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {category.productCount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${category.status === 'Hiển thị' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {category.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Link href={`/admin/categories/${category.id}`} className="text-blue-600 hover:text-blue-900 mr-4">
                      <i className="fas fa-edit"></i>
                    </Link>
                    <button className="text-red-600 hover:text-red-900" onClick={() => handleDelete(category.id)}>
                      <i className="fas fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-white px-4 py-3 border-t border-gray-200 sm:px-6">
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-700">
              Hiển thị <span className="font-medium">1</span> đến <span className="font-medium">5</span> của <span className="font-medium">5</span> danh mục
            </div>
            <div>
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  <span className="sr-only">Previous</span>
                  <i className="fas fa-chevron-left"></i>
                </a>
                <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                  1
                </a>
                <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  <span className="sr-only">Next</span>
                  <i className="fas fa-chevron-right"></i>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}