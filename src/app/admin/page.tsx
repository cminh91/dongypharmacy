import { FC } from 'react';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

const TOKEN_COOKIE_NAME = 'admin_access_token';

const AdminPage: FC = async () => {
  // Kiểm tra token từ cookie
  const cookieStore = await cookies();
  const token = cookieStore.get(TOKEN_COOKIE_NAME);
  
  // Nếu không có token, chuyển hướng về trang login
  if (!token) {
    redirect('/admin/login');
  }

  // Nếu có token, chuyển hướng đến trang dashboard
  redirect('/admin/dashboard');

  return null;
};

export default AdminPage;