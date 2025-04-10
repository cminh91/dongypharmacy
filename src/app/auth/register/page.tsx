"use client";

import { FC } from "react";
import Link from "next/link";

const RegisterPage: FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <Link href="/" className="text-3xl font-bold text-green-700">
              Đông Y Pharmacy
            </Link>
            <p className="text-gray-600 mt-2">Tạo tài khoản mới</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <form className="space-y-4">
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
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Nhập email"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Mật khẩu</label>
                <input
                  type="password"
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Nhập mật khẩu"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Xác nhận mật khẩu</label>
                <input
                  type="password"
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Nhập lại mật khẩu"
                  required
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full py-2"
              >
                Đăng ký
              </button>
            </form>

            <p className="text-center mt-4 text-gray-600">
              Đã có tài khoản?
              <Link href="/auth" className="text-green-600 hover:underline ml-1">
                Đăng nhập
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;