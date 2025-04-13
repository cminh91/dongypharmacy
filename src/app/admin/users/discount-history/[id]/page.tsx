'use client';

import React, { FC } from 'react';
import Link from 'next/link';

interface DiscountHistory {
  id: string;
  date: string;
  amount: number;
  description: string;
}

const DiscountHistoryPage: FC<{ params: Promise<{ id: string }> }> = ({ params }) => {
  // Next.js 15+ dynamic API: unwrap params bằng React.use()
  const { id } = React.use(params);
  // Trong thực tế, dữ liệu này sẽ được lấy từ API dựa trên id
  const discountHistory: DiscountHistory[] = [
    { id: 'CK001', date: '2024-01-15', amount: 180000, description: 'Chiết khấu đơn hàng #DH001' },
    { id: 'CK002', date: '2024-01-10', amount: 120000, description: 'Chiết khấu đơn hàng #DH002' },
    { id: 'CK003', date: '2024-01-05', amount: 75000, description: 'Chiết khấu đơn hàng #DH003' }
  ];

  const totalAmount = discountHistory.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Chi tiết lịch sử chiết khấu</h1>
        <Link 
          href={`/admin/users/edit/${id}`}
          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
        >
          <i className="fas fa-arrow-left mr-2"></i>Quay lại
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-6 border-b">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-lg font-medium">Tổng số giao dịch: {discountHistory.length}</h2>
              <p className="text-gray-600 mt-1">Tổng số tiền chiết khấu: {totalAmount.toLocaleString()}₫</p>
            </div>
            <div className="flex space-x-2">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                <i className="fas fa-file-excel mr-2"></i>Xuất Excel
              </button>
              <button className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600">
                <i className="fas fa-print mr-2"></i>In báo cáo
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mã giao dịch</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ngày</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mô tả</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Số tiền</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {discountHistory.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                    {item.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(item.date).toLocaleDateString('vi-VN')}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {item.description}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-medium text-green-600">
                    {item.amount.toLocaleString()}₫
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot className="bg-gray-50">
              <tr>
                <td colSpan={3} className="px-6 py-4 text-sm font-medium text-gray-900">
                  Tổng cộng
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-medium text-green-700">
                  {totalAmount.toLocaleString()}₫
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DiscountHistoryPage;