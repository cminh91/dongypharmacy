'use client';

import React, { FC, useState } from 'react';
import Link from 'next/link';

interface DiscountHistory {
  id: string;
  date: string;
  amount: number;
  description: string;
}

const EditUserPage: FC<{ params: Promise<{ id: string }> }> = ({ params }) => {
  // Next.js 15+ dynamic API: unwrap params bằng React.use()
  const { id } = React.use(params);
  // Trong thực tế, dữ liệu này sẽ được lấy từ API dựa trên id
  const [formData, setFormData] = useState({
    name: 'Nguyễn Văn A',
    email: 'nguyenvana@example.com',
    phone: '0901234567',
    role: 'Đối tác',
    referralCode: 'REF001',
    discount: 15,
    status: 'Hoạt động',
    unpaidAmount: 2500000,
    unpaidAmountOK: 3500000,
    totalOrders: 5,
    idNumber: '123456789012',
    idIssueDate: '2020-01-01',
    password: '',
    bankAccount: '9876543210',
    bankName: 'Vietcombank',
    bankAccountHolder: 'Nguyễn Văn A'
  });


  const [discountHistory] = useState<DiscountHistory[]>([
    { id: 'CK001', date: '2024-01-15', amount: 180000, description: 'Chiết khấu đơn hàng #DH001' },
    { id: 'CK002', date: '2024-01-10', amount: 120000, description: 'Chiết khấu đơn hàng #DH002' },
    { id: 'CK003', date: '2024-01-05', amount: 75000, description: 'Chiết khấu đơn hàng #DH003' }
  ]);

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Vui lòng nhập tên người dùng';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Vui lòng nhập email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email không hợp lệ';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Vui lòng nhập số điện thoại';
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = 'Số điện thoại không hợp lệ';
    }

    if (!formData.role) {
      newErrors.role = 'Vui lòng chọn vai trò';
    }

    if (formData.discount < 0 || formData.discount > 100) {
      newErrors.discount = 'Chiết khấu phải từ 0% đến 100%';
    }

    if (!formData.idNumber.trim()) {
      newErrors.idNumber = 'Vui lòng nhập số CMND/CCCD';
    } else if (!/^\d{9,12}$/.test(formData.idNumber)) {
      newErrors.idNumber = 'Số CMND/CCCD không hợp lệ';
    }





    if (!formData.bankAccount.trim()) {
      newErrors.bankAccount = 'Vui lòng nhập số tài khoản';
    } else if (!/^\d{8,20}$/.test(formData.bankAccount)) {
      newErrors.bankAccount = 'Số tài khoản không hợp lệ';
    }

    if (!formData.bankName.trim()) {
      newErrors.bankName = 'Vui lòng nhập tên ngân hàng';
    }

    if (!formData.bankAccountHolder.trim()) {
      newErrors.bankAccountHolder = 'Vui lòng nhập tên chủ tài khoản';
    }

    if (formData.password) {
      if (formData.password.length < 6) {
        newErrors.password = 'Mật khẩu phải có ít nhất 6 ký tự';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      // Gọi API để cập nhật thông tin người dùng
      // const response = await fetch(`/api/users/${id}`, {
      //   method: 'PUT',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });

      // if (response.ok) {
      //   router.push('/admin/users');
      // }

      // Tạm thời chỉ log ra console
      console.log('Form submitted:', formData);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'discount' ? Number(value) : value
    }));
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Chỉnh sửa người dùng</h1>
        <Link 
          href="/admin/users" 
          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
        >
          <i className="fas fa-arrow-left mr-2"></i>Quay lại
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tên người dùng
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md px-3 py-2`}
                    placeholder="Nhập tên người dùng"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md px-3 py-2`}
                    placeholder="Nhập email"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mật khẩu mới
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`w-full border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md px-3 py-2`}
                    placeholder="Nhập mật khẩu mới (không bắt buộc)"
                  />
                  {errors.password && (
                    <p className="mt-1 text-sm text-red-500">{errors.password}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Số điện thoại
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md px-3 py-2`}
                    placeholder="Nhập số điện thoại"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Vai trò
                  </label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className={`w-full border ${errors.role ? 'border-red-500' : 'border-gray-300'} rounded-md px-3 py-2`}
                  >
                    <option value="">Chọn vai trò</option>
                    <option value="Admin">Admin</option>
                    <option value="Khách hàng">Khách hàng</option>
                    <option value="Đối tác">Đối tác</option>
                    <option value="Cộng tác viên">Cộng tác viên</option>
                  </select>
                  {errors.role && (
                    <p className="mt-1 text-sm text-red-500">{errors.role}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mã giới thiệu
                  </label>
                  <input
                    type="text"
                    name="referralCode"
                    value={formData.referralCode}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                    placeholder="Nhập mã giới thiệu (không bắt buộc)"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Chiết khấu (%)
                  </label>
                  <input
                    type="number"
                    name="discount"
                    value={formData.discount}
                    onChange={handleChange}
                    min="0"
                    max="100"
                    className={`w-full border ${errors.discount ? 'border-red-500' : 'border-gray-300'} rounded-md px-3 py-2`}
                    placeholder="Nhập phần trăm chiết khấu"
                  />
                  {errors.discount && (
                    <p className="mt-1 text-sm text-red-500">{errors.discount}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Trạng thái
                  </label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                  >
                    <option value="Hoạt động">Hoạt động</option>
                    <option value="Bị khóa">Bị khóa</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Số CMND/CCCD
                  </label>
                  <input
                    type="text"
                    name="idNumber"
                    value={formData.idNumber}
                    onChange={handleChange}
                    className={`w-full border ${errors.idNumber ? 'border-red-500' : 'border-gray-300'} rounded-md px-3 py-2`}
                    placeholder="Nhập số CMND/CCCD"
                  />
                  {errors.idNumber && (
                    <p className="mt-1 text-sm text-red-500">{errors.idNumber}</p>
                  )}
                </div>


                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Số tài khoản
                  </label>
                  <input
                    type="text"
                    name="bankAccount"
                    value={formData.bankAccount}
                    onChange={handleChange}
                    className={`w-full border ${errors.bankAccount ? 'border-red-500' : 'border-gray-300'} rounded-md px-3 py-2`}
                    placeholder="Nhập số tài khoản"
                  />
                  {errors.bankAccount && (
                    <p className="mt-1 text-sm text-red-500">{errors.bankAccount}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Ngân hàng
                  </label>
                  <input
                    type="text"
                    name="bankName"
                    value={formData.bankName}
                    onChange={handleChange}
                    className={`w-full border ${errors.bankName ? 'border-red-500' : 'border-gray-300'} rounded-md px-3 py-2`}
                    placeholder="Nhập tên ngân hàng"
                  />
                  {errors.bankName && (
                    <p className="mt-1 text-sm text-red-500">{errors.bankName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tên chủ tài khoản
                  </label>
                  <input
                    type="text"
                    name="bankAccountHolder"
                    value={formData.bankAccountHolder}
                    onChange={handleChange}
                    className={`w-full border ${errors.bankAccountHolder ? 'border-red-500' : 'border-gray-300'} rounded-md px-3 py-2`}
                    placeholder="Nhập tên chủ tài khoản"
                  />
                  {errors.bankAccountHolder && (
                    <p className="mt-1 text-sm text-red-500">{errors.bankAccountHolder}</p>
                  )}
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <Link
                  href="/admin/users"
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
                >
                  Hủy
                </Link>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Lưu thay đổi
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="space-y-6">
          {/* Thông tin tổng quan */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-medium mb-4">Thông tin tổng quan</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Tổng đơn hàng:</span>
                <span className="font-medium">{formData.totalOrders}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Số tiền chưa chi trả:</span>
                <span className="font-medium text-red-600">{formData.unpaidAmount.toLocaleString()}₫</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Số tiền đã chi trả:</span>
                <span className="font-medium text-red-600">{formData.unpaidAmountOK.toLocaleString()}₫</span>
              </div>
            </div>
          </div>

          {/* Lịch sử chiết khấu */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium">Lịch sử chiết khấu</h2>
              <Link
                href={`/admin/users/edit/${id}/discount-history`}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm"
              >
                <i className="fas fa-eye mr-2"></i>Xem chi tiết
              </Link>
            </div>
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
      </div>
    </div>
  );
};

export default EditUserPage;