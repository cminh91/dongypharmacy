import { FC } from 'react';
import Link from 'next/link';

const CheckoutPage: FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Thanh toán</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Form thông tin giao hàng */}
        <div className="lg:w-2/3">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-6">Thông tin giao hàng</h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">Họ và tên</label>
                  <input
                    type="text"
                    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Nhập họ và tên"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Số điện thoại</label>
                  <input
                    type="tel"
                    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Nhập số điện thoại"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Nhập email"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Địa chỉ</label>
                <textarea
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  rows={3}
                  placeholder="Nhập địa chỉ giao hàng"
                  required
                ></textarea>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Ghi chú</label>
                <textarea
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  rows={3}
                  placeholder="Ghi chú về đơn hàng, ví dụ: thời gian hay chỉ dẫn địa điểm giao hàng chi tiết"
                ></textarea>
              </div>
            </form>
          </div>

          <div className="bg-white rounded-lg shadow p-6 mt-6">
            <h2 className="text-xl font-bold mb-6">Phương thức thanh toán</h2>
            
            <div className="space-y-4">
              <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="payment"
                  className="form-radio text-green-600"
                  defaultChecked
                />
                <span className="ml-2">Thanh toán khi nhận hàng (COD)</span>
              </label>

              <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="payment"
                  className="form-radio text-green-600"
                />
                <span className="ml-2">Chuyển khoản ngân hàng</span>
              </label>

              <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="payment"
                  className="form-radio text-green-600"
                />
                <span className="ml-2">Thanh toán qua ví điện tử</span>
              </label>
            </div>
          </div>
        </div>

        {/* Tổng quan đơn hàng */}
        <div className="lg:w-1/3">
          <div className="bg-white rounded-lg shadow p-6 sticky top-4">
            <h2 className="text-xl font-bold mb-6">Tổng quan đơn hàng</h2>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between pb-4 border-b">
                <span className="text-gray-600">Tạm tính</span>
                <span className="font-medium">1.090.000₫</span>
              </div>
              <div className="flex justify-between pb-4 border-b">
                <span className="text-gray-600">Phí vận chuyển</span>
                <span className="font-medium">30.000₫</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">Tổng cộng</span>
                <span className="font-bold text-green-700 text-xl">
                  1.120.000₫
                </span>
              </div>
            </div>

            <button className="btn-primary w-full py-3 mb-3">
              Đặt hàng
            </button>

            <Link href="/cart" className="btn-secondary w-full text-center py-3">
              <i className="fas fa-arrow-left mr-2"></i>
              Quay lại giỏ hàng
            </Link>

            <div className="mt-6 text-sm text-gray-500">
              <p>Bằng cách đặt hàng, bạn đồng ý với:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li><Link href="/terms" className="text-green-600 hover:underline">Điều khoản dịch vụ</Link></li>
                <li><Link href="/privacy" className="text-green-600 hover:underline">Chính sách bảo mật</Link></li>
                <li><Link href="/shipping" className="text-green-600 hover:underline">Chính sách vận chuyển</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;