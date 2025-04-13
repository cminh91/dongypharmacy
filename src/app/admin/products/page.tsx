'use client';
import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';




const ProductsPage: FC = () => {
  // Mock data for products list
  const products = [
    {
      id: '1',
      name: 'Hoàng Liên Giải Độc Hoàn',
      image: '/images/hepasaky.png',
      category: 'Thuốc bổ gan',
      price: 320000,
      stock: 50,
      status: 'Đang bán'
    },
    {
      id: '2',
      name: 'Thập Toàn Đại Bổ Hoàn',
      image: '/images/lypasaky.png',
      category: 'Thuốc bổ',
      price: 450000,
      stock: 35,
      status: 'Đang bán'
    },
    {
      id: '3',
      name: 'An Cung Ngưu Hoàng Hoàn',
      image: '/images/trongdong.png',
      category: 'Thuốc bổ',
      price: 580000,
      stock: 20,
      status: 'Đang bán'
    },
    {
      id: '4',
      name: 'Hà Thủ Ô Đỏ',
      image: '/images/hepasaky.png',
      category: 'Dược liệu',
      price: 280000,
      stock: 0,
      status: 'Hết hàng'
    },
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Quản lý sản phẩm</h1>
        <Link 
          href="/admin/products/add" 
          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
        >
          <i className="fas fa-plus mr-2"></i>Thêm sản phẩm
        </Link>
      </div>

      {/* Bộ lọc và tìm kiếm */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Tìm kiếm</label>
            <input 
              type="text" 
              placeholder="Tên sản phẩm..." 
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Danh mục</label>
            <select className="w-full border border-gray-300 rounded-md px-3 py-2">
              <option value="">Tất cả danh mục</option>
              <option value="thuoc-bo">Thuốc bổ</option>
              <option value="thuoc-bo-gan">Thuốc bổ gan</option>
              <option value="duoc-lieu">Dược liệu</option>
              <option value="gia-vi-dong-y">Gia vị Đông y</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Trạng thái</label>
            <select className="w-full border border-gray-300 rounded-md px-3 py-2">
              <option value="">Tất cả trạng thái</option>
              <option value="dang-ban">Đang bán</option>
              <option value="het-hang">Hết hàng</option>
              <option value="ngung-ban">Ngừng bán</option>
            </select>
          </div>
          <div className="flex items-end">
            <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              <i className="fas fa-search mr-2"></i>Tìm kiếm
            </button>
          </div>
        </div>
      </div>

      {/* Bảng sản phẩm */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sản phẩm</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Danh mục</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Giá</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tồn kho</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trạng thái</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Thao tác</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {products.map((product) => (
                <tr key={product.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 relative">
                        <Image 
                          src={product.image} 
                          alt={product.name}
                          fill
                          className="object-cover rounded-md"
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{product.name}</div>
                        <div className="text-sm text-gray-500">ID: {product.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{product.category}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{product.price.toLocaleString()}₫</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{product.stock}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${product.status === 'Đang bán' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Link href={`/admin/products/${product.id}`} className="text-blue-600 hover:text-blue-900 mr-4">
                      <i className="fas fa-eye"></i>
                    </Link>
                    <Link href={`/admin/products/edit/${product.id}`} className="text-blue-600 hover:text-blue-900 mr-4">
                      <i className="fas fa-edit"></i>
                    </Link>
                    <button className="text-red-600 hover:text-red-900">
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
              Hiển thị <span className="font-medium">1</span> đến <span className="font-medium">4</span> của <span className="font-medium">4</span> sản phẩm
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
};

export default ProductsPage;