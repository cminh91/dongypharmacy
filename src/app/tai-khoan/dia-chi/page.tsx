import { FC } from 'react';
import Link from 'next/link';

interface AddressProps {
  id: string;
  name: string;
  phone: string;
  address: string;
  isDefault: boolean;
}

const AddressesPage: FC = () => {
  // Dữ liệu mẫu, trong thực tế sẽ lấy từ API
  const addresses: AddressProps[] = [
    {
      id: '1',
      name: 'Nguyễn Văn A',
      phone: '0123456789',
      address: '123 Đường ABC, Quận XYZ, TP.HCM',
      isDefault: true
    },
    {
      id: '2',
      name: 'Nguyễn Thị B',
      phone: '0987654321',
      address: '456 Đường DEF, Quận UVW, TP.HCM',
      isDefault: false
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Sổ địa chỉ</h1>
      
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
              <Link href="/account/wishlist" className="flex items-center space-x-2 text-gray-600 hover:bg-gray-50 p-3 rounded-lg">
                <i className="fas fa-heart"></i>
                <span>Sản phẩm yêu thích</span>
              </Link>
              <Link href="/account/addresses" className="flex items-center space-x-2 text-green-600 bg-green-50 p-3 rounded-lg">
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
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Địa chỉ của bạn</h2>
              <button className="btn-primary">
                <i className="fas fa-plus mr-2"></i>
                Thêm địa chỉ mới
              </button>
            </div>
            
            {addresses.length > 0 ? (
              <div className="space-y-4">
                {addresses.map(address => (
                  <div key={address.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-bold">{address.name}</h3>
                        <p className="text-gray-600">{address.phone}</p>
                        <p className="text-gray-600">{address.address}</p>
                      </div>
                      <div className="flex space-x-2">
                        {address.isDefault && (
                          <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                            Mặc định
                          </span>
                        )}
                        <button className="text-gray-500 hover:text-green-600">
                          <i className="fas fa-edit"></i>
                        </button>
                        <button className="text-gray-500 hover:text-red-600">
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <i className="fas fa-map-marker-alt text-4xl text-gray-300 mb-4"></i>
                <p className="text-gray-500 mb-4">Bạn chưa có địa chỉ nào</p>
                <button className="btn-primary">
                  Thêm địa chỉ mới
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressesPage;