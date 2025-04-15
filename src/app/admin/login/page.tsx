"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { adminAuthService } from "@/services/admin/authService";

const TOKEN_COOKIE_NAME = 'admin_access_token';

// Hàm helper để set cookie
const setCookie = (name: string, value: string, days: number) => {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = `expires=${date.toUTCString()}`;
  const secure = process.env.NODE_ENV === 'production' ? '; secure' : '';
  document.cookie = `${name}=${value}; ${expires}; path=/; sameSite=strict${secure}`;
};

export default function AdminLoginPage() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Không log thông tin đăng nhập để bảo mật
      console.log('Login page: Attempting login');
      
      // Gọi API đăng nhập
      const response = await adminAuthService.login(fullName, password);
      
      if (response && response.accessToken) {
        console.log('Login page: Login successful');
        
        // Tính toán thời hạn cookie từ expiresIn
        let expires = 7; // Mặc định 7 ngày
        if (response.expiresIn) {
          // Chuyển đổi expiresIn (ví dụ: "7d", "24h") thành số ngày
          const value = parseInt(response.expiresIn);
          const unit = response.expiresIn.slice(-1);
          
          if (unit === 'd') {
            expires = value;
          } else if (unit === 'h') {
            expires = Math.ceil(value / 24);
          } else if (unit === 'm') {
            expires = Math.ceil(value / (24 * 60));
          }
        }
        
        // Lưu token vào cookie
        setCookie(TOKEN_COOKIE_NAME, response.accessToken, expires);
        
        // Chuyển hướng đến trang dashboard
        console.log('Login page: Redirecting to dashboard');
        router.push('/admin/dashboard');
      } else {
        console.log('Login page: Login failed: No accessToken in response');
        setError('Đăng nhập thất bại. Vui lòng thử lại.');
      }
    } catch (err) {
      console.error('Login page: Login error');
      setError('Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Đăng nhập vào trang quản trị
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="fullName" className="sr-only">
                Họ và tên
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Họ và tên"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Mật khẩu
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {loading ? "Đang đăng nhập..." : "Đăng nhập"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}