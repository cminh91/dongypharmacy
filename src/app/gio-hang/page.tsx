'use client';

import { FC, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CartItemProps {
  id: string;
  name: string;
  image: string;
  price: number;
  oldPrice?: number;
  quantity: number;
}

const CartPage: FC = () => {
  // Trong thực tế, dữ liệu này sẽ được lấy từ state management (Redux/Context)
  const cartItems: CartItemProps[] = [
    {
      id: '1',
      name: 'Hoàng Liên Giải Độc Hoàn',
      image: 'https://images.unsplash.com/photo-1611485988300-b7ef6818e268?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      price: 320000,
      oldPrice: 380000,
      quantity: 2
    },
    {
      id: '2',
      name: 'Thập Toàn Đại Bổ Hoàn',
      image: 'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      price: 450000,
      oldPrice: 530000,
      quantity: 1
    }
  ];

  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);
  
  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    const updatedItems = cartItems.map(item => 
      item.id === id ? {...item, quantity: newQuantity} : item
    );
    // In a real app, you would update the cart state here
  };
  
  const handleApplyCoupon = () => {
    // In a real app, you would validate the coupon code here
    setDiscount(100000); // Example discount
  };
  
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = 30000; // Phí vận chuyển cố định
  const total = subtotal + shipping - discount;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Giỏ hàng của bạn</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <i className="fas fa-shopping-cart text-6xl text-gray-300 mb-4"></i>
          <p className="text-gray-500 mb-4">Giỏ hàng của bạn đang trống</p>
          <Link href="/products" className="btn-primary inline-flex items-center">
            <i className="fas fa-arrow-left mr-2"></i>
            Tiếp tục mua sắm
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Danh sách sản phẩm */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left">Sản phẩm</th>
                    <th className="px-6 py-4 text-center">Số lượng</th>
                    <th className="px-6 py-4 text-right">Thành tiền</th>
                    <th className="px-6 py-4"></th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {cartItems.map(item => (
                    <tr key={item.id}>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={80}
                            height={80}
                            className="rounded-lg"
                          />
                          <div className="ml-4">
                            <h3 className="font-medium">{item.name}</h3>
                            <div className="mt-1">
                              <span className="font-medium text-green-700">
                                {item.price.toLocaleString()}₫
                              </span>
                              {item.oldPrice && (
                                <span className="text-gray-500 text-sm line-through ml-2">
                                  {item.oldPrice.toLocaleString()}₫
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center">
                          <div className="flex items-center border rounded-lg">
                            <button 
                              className="px-3 py-1 text-lg hover:bg-gray-100"
                              onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            >
                              -
                            </button>
                            <input
                              type="number"
                              className="w-16 text-center border-x"
                              min="1"
                              value={item.quantity}
                              onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                            />
                            <button 
                              className="px-3 py-1 text-lg hover:bg-gray-100"
                              onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right font-medium">
                        {(item.price * item.quantity).toLocaleString()}₫
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button className="text-red-500 hover:text-red-700">
                          <i className="fas fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Tổng tiền và thanh toán */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold mb-4">Tổng đơn hàng</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Tạm tính</span>
                  <span className="font-medium">{subtotal.toLocaleString()}₫</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Phí vận chuyển</span>
                  <span className="font-medium">{shipping.toLocaleString()}₫</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex-1 mr-2">
                    <input
                      type="text"
                      placeholder="Nhập mã giảm giá"
                      className="w-full px-3 py-2 border rounded"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                    />
                  </div>
                  <button 
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                    onClick={handleApplyCoupon}
                  >
                    Áp dụng
                  </button>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Giảm giá</span>
                    <span className="font-medium text-green-700">-{discount.toLocaleString()}₫</span>
                  </div>
                )}
                <div className="border-t pt-3">
                  <div className="flex justify-between">
                    <span className="font-bold">Tổng cộng</span>
                    <span className="font-bold text-green-700 text-xl">
                      {total.toLocaleString()}₫
                    </span>
                  </div>
                </div>
              </div>

              <Link href="/tai-khoan/dat-hang" className="btn-primary w-full text-center py-3">
                Tiến hành thanh toán
              </Link>             
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;