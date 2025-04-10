/**
 * Hàm chuyển đổi chuỗi tiếng Việt sang dạng URL an toàn (slug)
 * Loại bỏ dấu tiếng Việt, khoảng trắng và ký tự đặc biệt
 */
export function toSlug(str: string): string {
  // Chuyển về chữ thường
  str = str.toLowerCase();
  
  // Chuyển đổi các ký tự có dấu sang không dấu
  str = str
    .normalize('NFD') // tách các ký tự có dấu thành các ký tự riêng biệt
    .replace(/[\u0300-\u036f]/g, '') // loại bỏ các dấu
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D');
  
  // Loại bỏ các ký tự đặc biệt và thay thế khoảng trắng bằng dấu gạch ngang
  str = str
    .replace(/[^\w\s-]/g, '') // loại bỏ ký tự đặc biệt
    .replace(/[\s_]+/g, '-') // thay thế khoảng trắng và dấu gạch dưới bằng dấu gạch ngang
    .replace(/^-+|-+$/g, ''); // loại bỏ dấu gạch ngang ở đầu và cuối
  
  return str;
}

/**
 * Hàm tạo slug từ tên sản phẩm và ID
 * Kết hợp tên sản phẩm đã được chuyển đổi và ID để tạo slug duy nhất
 */
export function createProductSlug(name: string, id: string): string {
  const nameSlug = toSlug(name);
  return `${nameSlug}-${id}`;
}

/**
 * Hàm trích xuất ID từ slug
 * Lấy phần ID ở cuối slug (sau dấu gạch ngang cuối cùng)
 */
export function extractIdFromSlug(slug: string): string {
  const parts = slug.split('-');
  return parts[parts.length - 1];
}