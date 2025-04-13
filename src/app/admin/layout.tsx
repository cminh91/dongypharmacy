import AdminSidebar from '@/components/admin/Sidebar';
import AdminHeader from '@/components/admin/Header';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  // Trong thực tế, cần kiểm tra xác thực người dùng ở đây
  // Nếu không phải admin, chuyển hướng về trang chủ
  // const isAdmin = checkAdminAuth();
  // if (!isAdmin) return redirect('/');

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <AdminHeader />

        {/* Page Content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}