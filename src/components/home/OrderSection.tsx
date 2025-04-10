import { FC } from 'react';

interface OrderItemProps {
  id: string;
  name: string;
  quantity: number;
  price: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  date: string;
}

const OrderItem: FC<OrderItemProps> = ({ id, name, quantity, price, status, date }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'processing':
        return 'bg-blue-100 text-blue-800';
      case 'shipped':
        return 'bg-purple-100 text-purple-800';
      case 'delivered':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending':
        return 'Chờ xử lý';
      case 'processing':
        return 'Đang xử lý';
      case 'shipped':
        return 'Đang giao';
      case 'delivered':
        return 'Đã giao';
      default:
        return status;
    }
  };

  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="text-sm text-gray-900">#{id}</span>
      </td>
      <td className="px-6 py-4">
        <div className="text-sm text-gray-900">{name}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{quantity}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{price.toLocaleString('vi-VN')}đ</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(status)}`}>
          {getStatusText(status)}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{date}</td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <a href={`/order/${id}`} className="text-primary hover:text-green-600">Chi tiết</a>
      </td>
    </tr>
  );
};

const OrderSection: FC = () => {
  const orders: OrderItemProps[] = [
    {
      id: 'ORD001',
      name: 'Trà thảo dược giảm cân',
      quantity: 2,
      price: 350000,
      status: 'delivered',
      date: '15/10/2023'
    },
    {
      id: 'ORD002',
      name: 'Thuốc bổ gan',
      quantity: 1,
      price: 480000,
      status: 'shipped',
      date: '18/10/2023'
    },
    {
      id: 'ORD003',
      name: 'Viên uống tăng cường miễn dịch',
      quantity: 3,
      price: 750000,
      status: 'processing',
      date: '20/10/2023'
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Đơn Hàng Của Bạn</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Theo dõi và quản lý đơn hàng của bạn một cách dễ dàng.</p>
        </div>

        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Mã đơn hàng
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Sản phẩm
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Số lượng
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Giá tiền
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Trạng thái
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Ngày đặt
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Chi tiết</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {orders.map((order) => (
                      <OrderItem key={order.id} {...order} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSection;