import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ProductDetailPageProps {
  params: Promise<{ id: string }>;
}

import React from 'react';

const ProductDetailPage: FC<ProductDetailPageProps> = ({ params }) => {
  const { id } = React.use(params);

  // Trong thực tế, dữ liệu này sẽ được lấy từ API dựa trên ID
  const product = {
    id: id,
    name: 'Hoàng Liên Giải Độc Hoàn',
    image: '/images/hepasaky.png',
    category: 'Thuốc bổ gan',
    categoryId: '2',
    price: 320000,
    originalPrice: 350000,
    discount: 9,
    stock: 50,
    sold: 48,
    status: 'Đang bán',
    description: 'Hoàng Liên Giải Độc Hoàn là sản phẩm hỗ trợ giải độc gan, thanh nhiệt, giải độc cơ thể. Sản phẩm được chiết xuất từ các thảo dược tự nhiên như hoàng liên, hoàng cầm, hoàng bá, đan sâm, nhân trần...',
    shortDescription: 'Hỗ trợ giải độc gan, thanh nhiệt, giải độc cơ thể',
    ingredients: 'Hoàng liên, hoàng cầm, hoàng bá, đan sâm, nhân trần, cam thảo, bạch truật, trần bì',
    usage: 'Ngày uống 2 lần, mỗi lần 2 viên sau bữa ăn',
    metaTitle: 'Hoàng Liên Giải Độc Hoàn - Đông Y Pharmacy',
    metaDescription: 'Hoàng Liên Giải Độc Hoàn hỗ trợ giải độc gan, thanh nhiệt, giải độc cơ thể từ thảo dược tự nhiên',
    createdAt: '10/01/2024',
    updatedAt: '15/05/2024',
    images: [
      '/images/hepasaky.png',
      '/images/lypasaky.png',
      '/images/trongdong.png'
    ],
    specifications: [
      { name: 'Xuất xứ', value: 'Việt Nam' },
      { name: 'Thương hiệu', value: 'Đông Y Pharmacy' },
      { name: 'Dạng bào chế', value: 'Viên hoàn cứng' },
      { name: 'Quy cách đóng gói', value: 'Hộp 60 viên' },
      { name: 'Hạn sử dụng', value: '36 tháng kể từ ngày sản xuất' }
    ]
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex items-center mb-6">
        <Link href="/admin/products" className="text-blue-600 hover:text-blue-800 mr-2">
          <i className="fas fa-arrow-left"></i> Quay lại
        </Link>
        <h1 className="text-2xl font-bold">Chi tiết sản phẩm</h1>
      </div>

      {/* Thông tin sản phẩm */}
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="p-6 border-b">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Thông tin sản phẩm</h2>
            <div className="flex space-x-2">
              <Link 
                href={`/admin/products/edit/${id}`} 
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                <i className="fas fa-edit mr-2"></i>Chỉnh sửa
              </Link>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 mb-6 md:mb-0 md:pr-6">
              <div className="relative h-64 w-full rounded-lg overflow-hidden mb-4">
                <Image 
                  src={product.image} 
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-2">
                {product.images.map((img, index) => (
                  <div key={index} className="relative h-20 rounded-lg overflow-hidden">
                    <Image 
                      src={img} 
                      alt={`${product.name} - ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">ID</h3>
                  <p className="mt-1">{product.id}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Tên sản phẩm</h3>
                  <p className="mt-1">{product.name}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Danh mục</h3>
                  <p className="mt-1">
                    <Link href={`/admin/categories/${product.categoryId}`} className="text-blue-600 hover:underline">
                      {product.category}
                    </Link>
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Trạng thái</h3>
                  <p className="mt-1">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${product.status === 'Đang bán' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {product.status}
                    </span>
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Giá bán</h3>
                  <p className="mt-1">{product.price.toLocaleString()}₫</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Giá gốc</h3>
                  <p className="mt-1">{product.originalPrice.toLocaleString()}₫ <span className="text-red-500">(-{product.discount}%)</span></p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Tồn kho</h3>
                  <p className="mt-1">{product.stock} sản phẩm</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Đã bán</h3>
                  <p className="mt-1">{product.sold} sản phẩm</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Ngày tạo</h3>
                  <p className="mt-1">{product.createdAt}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Cập nhật lần cuối</h3>
                  <p className="mt-1">{product.updatedAt}</p>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-sm font-medium text-gray-500">Mô tả ngắn</h3>
                  <p className="mt-1">{product.shortDescription}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Thông tin chi tiết */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold">Mô tả sản phẩm</h2>
          </div>
          <div className="p-6">
            <p className="whitespace-pre-line">{product.description}</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold">Thông tin khác</h2>
          </div>
          <div className="p-6">
            <div className="mb-4">
              <h3 className="text-sm font-medium text-gray-500 mb-2">Thành phần</h3>
              <p>{product.ingredients}</p>
            </div>
            <div className="mb-4">
              <h3 className="text-sm font-medium text-gray-500 mb-2">Cách dùng</h3>
              <p>{product.usage}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">Thông số kỹ thuật</h3>
              <div className="border rounded-md overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <tbody className="divide-y divide-gray-200">
                    {product.specifications.map((spec, index) => (
                      <tr key={index}>
                        <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-500 bg-gray-50 w-1/3">{spec.name}</td>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SEO */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b">
          <h2 className="text-lg font-semibold">Thông tin SEO</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 gap-6">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Meta Title</h3>
              <p className="mt-1">{product.metaTitle}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Meta Description</h3>
              <p className="mt-1">{product.metaDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;