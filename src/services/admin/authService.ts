const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const TOKEN_COOKIE_NAME = 'admin_access_token';

export interface AdminUser {
  id: string;
  fullName: string;
  email: string;
  phoneNumber: string | null;
  role: string;
  avatarUrl: string | null;
  isEmailVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface AdminLoginResponse {
  user: AdminUser;
  accessToken: string;
  expiresIn: string;
}

class AdminAuthService {
  async login(fullName: string, password: string): Promise<AdminLoginResponse> {
    try {
      // Không log thông tin đăng nhập để bảo mật
      console.log('AuthService: Attempting login');
      
      const response = await fetch(`${API_URL}/api/auth/admin/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName,
          password
        }),
      });

      if (!response.ok) {
        console.error('AuthService: Login failed with status:', response.status);
        throw new Error('Login failed');
      }

      const data = await response.json();
      console.log('AuthService: Login successful');
      return data;
    } catch (error) {
      console.error('AuthService: Login error');
      throw error;
    }
  }

  async logout(): Promise<void> {
    console.log('AuthService: Logging out');
    // Xóa token khỏi cookie
    document.cookie = `${TOKEN_COOKIE_NAME}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }

  isAuthenticated(): boolean {
    // Kiểm tra xem có token trong cookie không
    return document.cookie.includes(`${TOKEN_COOKIE_NAME}=`);
  }
}

export const adminAuthService = new AdminAuthService(); 