'use client';

import React, { FC } from 'react';

const DiscountHistoryDetailPage: FC<{ params: Promise<{ id: string }> }> = ({ params }) => {
  // Next.js 15+ dynamic API: unwrap params bằng React.use()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id: _id } = React.use(params);
  // Trong thực tế, dữ liệu này sẽ được lấy từ API dựa trên id
  const discountHistory = [
    { id: 'CK001', date: '2024-01-15', amount: 180000, description: 'Chiết khấu đơn hàng #DH001' },
    { id: 'CK002', date: '2024-01-10', amount: 120000, description: 'Chiết khấu đơn hàng #DH002' },
    { id: 'CK003', date: '2024-01-05', amount: 75000, description: 'Chiết khấu đơn hàng #DH003' }
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">Chi tiết lịch sử chiết khấu</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-medium mb-4">Thông tin chi tiết</h2>
        <div className="space-y-4">
          {discountHistory.map((discount) => (
            <div key={discount.id} className="border-b pb-3 last:border-0 last:pb-0">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-medium">#{discount.id}</div>
                  <div className="text-sm text-gray-500">
                    {new Date(discount.date).toLocaleDateString('vi-VN')}
                  </div>
                  <div className="text-sm text-gray-600">
                    {discount.description}
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium text-green-600">{discount.amount.toLocaleString()}₫</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscountHistoryDetailPage;