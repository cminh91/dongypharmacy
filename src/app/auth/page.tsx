import { FC } from 'react';
import Link from 'next/link';

const AuthPage: FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <Link href="/" className="text-3xl font-bold text-green-700">Đông Y Pharmacy</Link>
            <p className="text-gray-600 mt-2">Đăng nhập hoặc tạo tài khoản mới</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            {/* Tabs */}
            <div className="flex border-b mb-6">
              <button className="flex-1 py-2 text-center border-b-2 border-green-500 text-green-700 font-medium">
                Đăng nhập
              </button>
              <button className="flex-1 py-2 text-center text-gray-500 hover:text-green-700">
                Đăng ký
              </button>
            </div>

            {/* Đăng nhập form */}
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Nhập email của bạn"
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

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox text-green-600" />
                  <span className="ml-2 text-sm text-gray-600">Ghi nhớ đăng nhập</span>
                </label>
                <Link href="/auth/forgot-password" className="text-sm text-green-600 hover:underline">
                  Quên mật khẩu?
                </Link>
              </div>

              <button type="submit" className="btn-primary w-full py-2">
                Đăng nhập
              </button>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Hoặc đăng nhập với</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <button className="flex items-center justify-center px-4 py-2 border rounded-lg hover:bg-gray-50">
                  <i className="fab fa-google text-red-500 mr-2"></i>
                  Google
                </button>
                <button className="flex items-center justify-center px-4 py-2 border rounded-lg hover:bg-gray-50">
                  <i className="fab fa-facebook text-blue-500 mr-2"></i>
                  Facebook
                </button>
              </div>
            </div>
          </div>

          <p className="text-center mt-4 text-gray-600">
            Chưa có tài khoản?
            <Link href="/auth/register" className="text-green-600 hover:underline ml-1">
              Đăng ký ngay
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;