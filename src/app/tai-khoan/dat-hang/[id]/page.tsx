import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
type OrderProps = {
  id: string;
  date: string;
  status: string;
  total: number;
  shippingMethod: string;
  paymentMethod: string;
  trackingNumber: string;
  estimatedDelivery: string;
  items: Array<{
    name: string;
    quantity: number;
    price: number;
    image: string;
  }>;
  history: Array<{
    date: string;
    status: string;
    description: string;
  }>;
};

const OrderDetailPage: FC<{ params: Promise<{ id: string }> }> = ({ params }) => {
  // Next.js 15+ dynamic API: unwrap params bằng React.use()
  const { id } = React.use(params);
  // Trong thực tế, dữ liệu này sẽ được lấy từ API dựa trên id
  const order: OrderProps = {
    id: id,
    date: '2024-01-15',
    status: 'Đã giao hàng',
    total: 690000,
    shippingMethod: 'Giao hàng nhanh',
    paymentMethod: 'Thanh toán khi nhận hàng',
    trackingNumber: 'VN123456789',
    estimatedDelivery: '2024-01-18',
    items: [
      { name: 'Hoàng Liên Giải Độc Hoàn', quantity: 2, price: 320000, image: '/images/hepasaky.png' },
      { name: 'Thập Toàn Đại Bổ Hoàn', quantity: 1, price: 450000, image: '/images/lypasaky.png' }
    ],
    history: [
      { date: '2024-01-15 09:30', status: 'Đã đặt hàng', description: 'Đơn hàng đã được tiếp nhận' },
      { date: '2024-01-15 14:15', status: 'Đang xử lý', description: 'Đơn hàng đang được đóng gói' },
      { date: '2024-01-16 10:00', status: 'Đang vận chuyển', description: 'Đơn hàng đã được bàn giao cho đơn vị vận chuyển' },
      { date: '2024-01-17 15:30', status: 'Đang giao hàng', description: 'Đơn hàng đang trên đường giao' },
      { date: '2024-01-18 11:20', status: 'Đã giao hàng', description: 'Đơn hàng đã được giao thành công' }
    ]
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Chi tiết đơn hàng #{order.id}</h2>
        <Link href="/tai-khoan/dat-hang" className="text-green-600 hover:underline">
          Quay lại danh sách đơn hàng
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="border rounded-lg p-4">
          <h3 className="font-medium mb-4">Thông tin đơn hàng</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Ngày đặt hàng:</span>
              <span>{new Date(order.date).toLocaleDateString('vi-VN')}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Trạng thái:</span>
              <span className={`px-2 py-1 rounded-full text-xs ${order.status === 'Đã giao hàng' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                {order.status}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Phương thức vận chuyển:</span>
              <span>{order.shippingMethod}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Phương thức thanh toán:</span>
              <span>{order.paymentMethod}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Mã vận đơn:</span>
              <span>{order.trackingNumber}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Dự kiến giao hàng:</span>
              <span>{new Date(order.estimatedDelivery).toLocaleDateString('vi-VN')}</span>
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-4">
          <h3 className="font-medium mb-4">Sản phẩm đã đặt</h3>
          <div className="space-y-4">
            {order.items.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="relative w-16 h-16 bg-gray-100 rounded-md flex items-center justify-center overflow-hidden">
                  <Image src={item.image} alt={item.name} fill className="object-contain" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium">{item.name}</h4>
                  <div className="flex justify-between text-sm text-gray-600 mt-1">
                    <span>Số lượng: {item.quantity}</span>
                    <span>{item.price.toLocaleString('vi-VN')}₫</span>
                  </div>
                </div>
              </div>
            ))}
            <div className="border-t pt-3 mt-3 flex justify-between font-medium">
              <span>Tổng cộng:</span>
              <span className="text-green-700">{order.total.toLocaleString('vi-VN')}₫</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border rounded-lg p-4">
        <h3 className="font-medium mb-4">Lịch sử đơn hàng</h3>
        <div className="space-y-4">
          {order.history.map((history, index) => (
            <div key={index} className="flex space-x-4">
              <div className="flex flex-col items-center">
                <div className={`w-3 h-3 rounded-full ${index === order.history.length - 1 ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                {index < order.history.length - 1 && <div className="w-px h-8 bg-gray-300"></div>}
              </div>
              <div>
                <div className="text-sm font-medium">{history.status}</div>
                <div className="text-xs text-gray-500">{new Date(history.date).toLocaleString('vi-VN')}</div>
                <div className="text-sm text-gray-600 mt-1">{history.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex justify-end space-x-4">
        <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
          In hóa đơn
        </button>
        <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
          Đặt lại đơn hàng
        </button>
      </div>
    </div>
  );
};

export default OrderDetailPage;