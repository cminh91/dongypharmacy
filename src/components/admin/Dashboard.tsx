import { FC } from 'react';
import Link from 'next/link';

const AdminDashboard: FC = () => {
  // Dữ liệu thống kê (trong thực tế sẽ được lấy từ API)
  const stats = [
    { title: 'Tổng đơn hàng', value: '124', change: '+12%', icon: 'fas fa-shopping-cart', color: 'bg-blue-500' },
    { title: 'Doanh thu', value: '32.5M₫', change: '+8%', icon: 'fas fa-money-bill-wave', color: 'bg-green-500' },
    { title: 'Sản phẩm', value: '45', change: '+3', icon: 'fas fa-box', color: 'bg-purple-500' },
    { title: 'Khách hàng', value: '289', change: '+18', icon: 'fas fa-users', color: 'bg-orange-500' },
  ];

  // Đơn hàng gần đây (trong thực tế sẽ được lấy từ API)
  const recentOrders = [
    { id: 'ORD-001', customer: 'Nguyễn Văn A', date: '15/05/2024', total: '850.000₫', status: 'Đã giao' },
    { id: 'ORD-002', customer: 'Trần Thị B', date: '14/05/2024', total: '1.250.000₫', status: 'Đang giao' },
    { id: 'ORD-003', customer: 'Lê Văn C', date: '13/05/2024', total: '450.000₫', status: 'Đã giao' },
    { id: 'ORD-004', customer: 'Phạm Thị D', date: '12/05/2024', total: '720.000₫', status: 'Đã hủy' },
    { id: 'ORD-005', customer: 'Hoàng Văn E', date: '11/05/2024', total: '950.000₫', status: 'Đang xử lý' },
  ];

  // Sản phẩm bán chạy (trong thực tế sẽ được lấy từ API)
  const topProducts = [
    { name: 'Hoàng Liên Giải Độc Hoàn', sales: 48, revenue: '15.360.000₫' },
    { name: 'Thập Toàn Đại Bổ Hoàn', sales: 32, revenue: '14.400.000₫' },
    { name: 'An Cung Ngưu Hoàng Hoàn', sales: 24, revenue: '13.920.000₫' },
    { name: 'Hà Thủ Ô Đỏ', sales: 18, revenue: '5.040.000₫' },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
            <i className="fas fa-download mr-2"></i>Xuất báo cáo
          </button>
        </div>
      </div>

      {/* Thống kê */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">{stat.title}</p>
                <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                <p className="text-green-500 text-sm mt-1">{stat.change} so với tháng trước</p>
              </div>
              <div className={`${stat.color} text-white p-3 rounded-full`}>
                <i className={`${stat.icon} text-xl`}></i>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Đơn hàng gần đây */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow">
          <div className="p-6 border-b">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">Đơn hàng gần đây</h2>
              <Link href="/admin/orders" className="text-green-600 hover:underline">
                Xem tất cả
              </Link>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mã đơn</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Khách hàng</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ngày</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tổng tiền</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trạng thái</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {recentOrders.map((order, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                      <Link href={`/admin/orders/${order.id}`}>{order.id}</Link>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.customer}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.total}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Sản phẩm bán chạy */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">Sản phẩm bán chạy</h2>
              <Link href="/admin/products" className="text-green-600 hover:underline">
                Xem tất cả
              </Link>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">{product.name}</h3>
                    <p className="text-sm text-gray-500">{product.sales} đã bán</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{product.revenue}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Hàm trợ giúp để xác định màu sắc dựa trên trạng thái đơn hàng
const getStatusColor = (status: string): string => {
  switch (status) {
    case 'Đã giao':
      return 'bg-green-100 text-green-800';
    case 'Đang giao':
      return 'bg-blue-100 text-blue-800';
    case 'Đang xử lý':
      return 'bg-yellow-100 text-yellow-800';
    case 'Đã hủy':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export default AdminDashboard;