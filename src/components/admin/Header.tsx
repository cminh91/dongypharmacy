import { FC } from 'react';

interface AdminHeaderProps {
  title?: string;
}

const AdminHeader: FC<AdminHeaderProps> = ({ title = 'Admin Panel' }) => {
  return (
    <header className="bg-white shadow-sm">
      <div className="flex items-center justify-between px-6 py-3">
        <h2 className="text-xl font-semibold">{title}</h2>
        <div className="flex items-center space-x-4">
          <button className="text-gray-500 hover:text-gray-700">
            <i className="fas fa-bell"></i>
          </button>
          <div className="relative">
            <div className="flex items-center text-gray-700 hover:text-gray-900 cursor-pointer">
              <span className="mr-2">Admin</span>
              <i className="fas fa-chevron-down text-xs"></i>
            </div>
            {/* Dropdown menu có thể được thêm vào đây */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;