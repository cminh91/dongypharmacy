import { FC } from 'react';
import { redirect } from 'next/navigation';

const AdminPage: FC = () => {
  // Trong thực tế, cần kiểm tra xác thực người dùng ở đây
  // Nếu không phải admin, chuyển hướng về trang chủ
  // const isAdmin = checkAdminAuth();
  // if (!isAdmin) return redirect('/');

  // Chuyển hướng đến trang dashboard
  redirect('/admin/dashboard');

  return null;
};

export default AdminPage;