"use client";
import Link from 'next/link';
import Image from 'next/image';
import { apiFetch } from '../../../utils/api';
import { useState, useEffect } from 'react';

type Category = {
  id: string;
  name: string;
  imageUrl: string;
  slug: string;
  description: string;
  productCount: number;
  isActive: boolean;
  sortOrder: number;
};

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [filteredCategories, setFilteredCategories] = useState<Category[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await apiFetch('/api/categories', { method: 'GET' });
        if (!res.ok) throw new Error('Lỗi khi lấy danh sách danh mục');
        const data = await res.json();
        setCategories(data);
        setFilteredCategories(data);
      } catch (error) {
        setCategories([]);
        setFilteredCategories([]);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    let results = categories;
    
    // Apply search filter
    if (searchTerm) {
      results = results.filter(category => 
        category.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply status filter
    if (statusFilter !== 'all') {
      const isActive = statusFilter === 'active';
      results = results.filter(category => category.isActive === isActive);
    }
    
    setFilteredCategories(results);
  }, [searchTerm, statusFilter, categories]);

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

      {/* Updated search and filter section */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Tìm kiếm</label>
            <input
              type="text"
              placeholder="Tên danh mục..."
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Trạng thái</label>
            <select 
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="all">Tất cả trạng thái</option>
              <option value="active">Hiển thị</option>
              <option value="inactive">Ẩn</option>
            </select>
          </div>
          <div className="flex items-end">
            <button 
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              onClick={() => {
                setSearchTerm('');
                setStatusFilter('all');
              }}
            >
              <i className="fas fa-sync-alt mr-2"></i>Đặt lại
            </button>
          </div>
        </div>
      </div>

      {/* Updated table with serial numbers */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Thứ tự</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Danh mục</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mô tả</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trạng thái</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Thao tác</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredCategories.length === 0 ? (
                <tr>
                  <td colSpan={5} className="text-center py-8 text-gray-500">
                    Không có danh mục nào.
                  </td>
                </tr>
              ) : (
                filteredCategories.map((category, index) => (
                  <tr key={category.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {category.sortOrder}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {/* <div className="flex-shrink-0 h-10 w-10 relative">
                          <Image
                            src={category.imageUrl}
                            alt={category.name}
                            fill
                            className="object-cover rounded-md"
                          />
                        </div> */}
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{category.name}</div>
                          {/* <div className="text-sm text-gray-500">ID: {category.id}</div> */}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">{category.description}</div>
                    </td>
                    {/* <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{category.slug}</div>
                    </td> */}
                    {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {category.productCount}
                    </td> */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${category.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {category.isActive ? 'Hiển thị' : 'Ẩn'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Link href={`/admin/categories/${category.id}`} className="text-blue-600 hover:text-blue-900 mr-4">
                        <i className="fas fa-edit"></i>
                      </Link>
                      {/* Nút xóa chỉ là placeholder, cần triển khai thêm logic xóa nếu muốn */}
                      <button className="text-red-600 hover:text-red-900" disabled>
                        <i className="fas fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        {/* Phân trang chỉ là UI, chưa xử lý logic */}
        <div className="bg-white px-4 py-3 border-t border-gray-200 sm:px-6">
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-700">
              Hiển thị <span className="font-medium">{categories.length > 0 ? 1 : 0}</span> đến <span className="font-medium">{categories.length}</span> của <span className="font-medium">{categories.length}</span> danh mục
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