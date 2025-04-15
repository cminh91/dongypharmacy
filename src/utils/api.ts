export const baseUrl =
  process.env.NEXT_PUBLIC_API_BASE_URL;

// Lấy token từ cookie phía client
function getTokenFromCookie() {
  if (typeof document === "undefined") return null;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; admin_access_token=`);
  if (parts.length === 2) return parts.pop()?.split(";").shift() || null;
  return null;
}

// Hàm tiện ích gọi API, tự động thêm Authorization nếu có token (chỉ client)
export async function apiFetch(path: string, options: RequestInit = {}) {
  const url = baseUrl + path;
  let opts: RequestInit = { ...options };

  if (typeof window !== "undefined") {
    // Chỉ client mới lấy được cookie
    const token = getTokenFromCookie();
    if (token) {
      opts.headers = {
        ...(opts.headers || {}),
        Authorization: `Bearer ${token}`,
      };
    }
  }
  return fetch(url, opts);
}