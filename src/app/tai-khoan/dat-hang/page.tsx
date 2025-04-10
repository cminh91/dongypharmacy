import { FC } from 'react';
import Link from 'next/link';

interface OrderProps {
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
}

const OrdersPage: FC = () => {
  const orders: OrderProps[] = [
    {
      id: 'DH001',
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
    },
    {
      id: 'DH002',
      date: '2024-01-10',
      status: 'Đang giao hàng',
      total: 450000,
      shippingMethod: 'Giao hàng tiêu chuẩn',
      paymentMethod: 'Chuyển khoản ngân hàng',
      trackingNumber: 'VN987654321',
      estimatedDelivery: '2024-01-14',
      items: [
        { name: 'Thập Toàn Đại Bổ Hoàn', quantity: 1, price: 450000, image: '/images/lypasaky.png' }
      ],
      history: [
        { date: '2024-01-10 11:45', status: 'Đã đặt hàng', description: 'Đơn hàng đã được tiếp nhận' },
        { date: '2024-01-11 09:30', status: 'Đang xử lý', description: 'Đơn hàng đang được đóng gói' },
        { date: '2024-01-12 14:00', status: 'Đang vận chuyển', description: 'Đơn hàng đã được bàn giao cho đơn vị vận chuyển' },
        { date: '2024-01-13 10:15', status: 'Đang giao hàng', description: 'Đơn hàng đang trên đường giao' }
      ]
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold mb-6">Đơn hàng gần đây</h2>
      <div className="space-y-6">
        {orders.map(order => (
          <div key={order.id} className="border rounded-lg p-4">
            <div className="flex flex-wrap items-center justify-between mb-4">
              <div>
                <span className="font-medium">Đơn hàng #{order.id}</span>
                <span className="text-gray-500 mx-2">•</span>
                <span className="text-gray-500">{new Date(order.date).toLocaleDateString('vi-VN')}</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className={`px-3 py-1 rounded-full text-sm ${order.status === 'Đã giao hàng' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                  {order.status}
                </span>
                <Link href={`/tai-khoan/dat-hang/${order.id}`} className="text-green-600 hover:underline">
                  Chi tiết
                </Link>
              </div>
            </div>
            <div className="space-y-2">
              {order.items.map((item, index) => (
                <div key={index} className="flex justify-between text-sm">
                  <span className="text-gray-600">{item.name} x{item.quantity}</span>
                  <span className="font-medium">{item.price.toLocaleString()}₫</span>
                </div>
              ))}
              <div className="border-t pt-2 mt-2 flex justify-between">
                <span className="font-medium">Tổng cộng:</span>
                <span className="font-bold text-green-700">{order.total.toLocaleString()}₫</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <Link href="/tai-khoan/dat-hang" className="text-green-600 hover:underline">
          Xem tất cả đơn hàng
          <i className="fas fa-arrow-right ml-2"></i>
        </Link>
      </div>
    </div>
  );
};

export default OrdersPage;