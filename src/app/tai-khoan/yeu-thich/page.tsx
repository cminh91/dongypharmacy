import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ProductProps {
  id: string;
  name: string;
  image: string;
  price: number;
  rating: number;
}

const WishlistPage: FC = () => {
  // Dữ liệu mẫu, trong thực tế sẽ lấy từ API
  const wishlistItems: ProductProps[] = [
    {
      id: '1',
      name: 'Hoàng Liên Giải Độc Hoàn',
      image: '/images/hepasaky.png',
      price: 320000,
      rating: 4.5
    },
    {
      id: '2',
      name: 'Thập Toàn Đại Bổ Hoàn',
      image: '/images/lypasaky.png',
      price: 450000,
      rating: 5
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Sản phẩm yêu thích</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar menu */}
        <div className="lg:w-1/4">
          <div className="bg-white rounded-lg shadow p-6">
            <nav className="space-y-2">
              <Link href="/account" className="flex items-center space-x-2 text-gray-600 hover:bg-gray-50 p-3 rounded-lg">
                <i className="fas fa-user-circle"></i>
                <span>Thông tin tài khoản</span>
              </Link>
              <Link href="/account/orders" className="flex items-center space-x-2 text-gray-600 hover:bg-gray-50 p-3 rounded-lg">
                <i className="fas fa-shopping-bag"></i>
                <span>Đơn hàng của tôi</span>
              </Link>
              <Link href="/account/wishlist" className="flex items-center space-x-2 text-green-600 bg-green-50 p-3 rounded-lg">
                <i className="fas fa-heart"></i>
                <span>Sản phẩm yêu thích</span>
              </Link>
              <Link href="/account/addresses" className="flex items-center space-x-2 text-gray-600 hover:bg-gray-50 p-3 rounded-lg">
                <i className="fas fa-map-marker-alt"></i>
                <span>Sổ địa chỉ</span>
              </Link>
              <button className="flex items-center space-x-2 text-red-600 hover:bg-red-50 p-3 rounded-lg w-full">
                <i className="fas fa-sign-out-alt"></i>
                <span>Đăng xuất</span>
              </button>
            </nav>
          </div>
        </div>

        {/* Main content */}
        <div className="lg:w-3/4">
          <div className="bg-white rounded-lg shadow p-6">
            {wishlistItems.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {wishlistItems.map(item => (
                  <div key={item.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="relative h-40 mb-4">
                      <Image 
                        src={item.image} 
                        alt={item.name} 
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                    <h3 className="font-bold mb-2">{item.name}</h3>
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          i < Math.floor(item.rating) ? 
                            <i key={i} className="fas fa-star"></i> : 
                            <i key={i} className="far fa-star"></i>
                        ))}
                      </div>
                    </div>
                    <div className="font-bold text-green-700 mb-4">{item.price.toLocaleString()}₫</div>
                    <div className="flex space-x-2">
                      <button className="btn-primary flex-1">
                        Thêm vào giỏ hàng
                      </button>
                      <button className="btn-outline">
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <i className="fas fa-heart text-4xl text-gray-300 mb-4"></i>
                <p className="text-gray-500 mb-4">Bạn chưa có sản phẩm yêu thích nào</p>
                <Link href="/products" className="btn-primary">
                  Mua sắm ngay
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;