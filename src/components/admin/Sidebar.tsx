'use client';

import { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const AdminSidebar: FC = () => {
  const pathname = usePathname();

  const menuItems = [
    { title: 'Dashboard', path: '/admin/dashboard', icon: 'fas fa-tachometer-alt' },
    { title: 'Sản phẩm', path: '/admin/products', icon: 'fas fa-box' },
    { title: 'Danh mục', path: '/admin/categories', icon: 'fas fa-tags' },
    { title: 'Đơn hàng', path: '/admin/orders', icon: 'fas fa-shopping-cart' },
    { title: 'Người dùng', path: '/admin/users', icon: 'fas fa-users' },
    { title: 'Bài viết', path: '/admin/posts', icon: 'fas fa-newspaper' },
    { title: 'Khuyến mãi', path: '/admin/promotions', icon: 'fas fa-percent' },
    { title: 'Cấu hình', path: '/admin/settings', icon: 'fas fa-cog' },
  ];

  return (
    <div className="w-64 bg-white shadow-md h-full">
      <div className="p-4 border-b">
        <Link href="/admin/dashboard" className="flex items-center">
          <span className="text-xl font-bold text-green-600">Đông Y Admin</span>
        </Link>
      </div>
      <nav className="mt-4">
        <ul>
          {menuItems.map((item, index) => {
            const isActive = pathname === item.path || pathname.startsWith(`${item.path}/`);
            return (
              <li key={index}>
                <Link 
                  href={item.path} 
                  className={`flex items-center px-4 py-3 ${isActive 
                    ? 'bg-green-50 text-green-600' 
                    : 'text-gray-600 hover:bg-green-50 hover:text-green-600'}`}
                >
                  <i className={`${item.icon} w-5 h-5 mr-3`}></i>
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default AdminSidebar;