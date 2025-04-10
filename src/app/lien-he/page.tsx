import { FC } from 'react';
import Link from 'next/link';

const ContactPage: FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex mb-6" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li><Link href="/" className="text-gray-600 hover:text-green-600">Trang chủ</Link></li>
          <li><span className="mx-2">/</span></li>
          <li className="text-green-600">Liên hệ</li>
        </ol>
      </nav>

      <h1 className="text-3xl font-bold mb-8 text-center">Liên Hệ Với Chúng Tôi</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        <div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-primary">Thông Tin Liên Hệ</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <i className="fas fa-map-marker-alt text-primary mt-1 mr-4 text-xl"></i>
                <div>
                  <h3 className="font-medium text-lg mb-1">Trụ sở chính</h3>
                  <p className="text-gray-600">123 Đường Nguyễn Văn Linh, Quận 7, TP. Hồ Chí Minh</p>
                </div>
              </div>

              <div className="flex items-start">
                <i className="fas fa-store text-primary mt-1 mr-4 text-xl"></i>
                <div>
                  <h3 className="font-medium text-lg mb-1">Cửa hàng</h3>
                  <p className="text-gray-600 mb-2">456 Đường Lê Văn Sỹ, Quận 3, TP. Hồ Chí Minh</p>
                  <p className="text-gray-600">789 Đường Cách Mạng Tháng 8, Quận 10, TP. Hồ Chí Minh</p>
                </div>
              </div>

              <div className="flex items-start">
                <i className="fas fa-phone-alt text-primary mt-1 mr-4 text-xl"></i>
                <div>
                  <h3 className="font-medium text-lg mb-1">Điện thoại</h3>
                  <p className="text-gray-600 mb-2">Tổng đài CSKH: 1900 1234</p>
                  <p className="text-gray-600">Hotline: 0987 654 321</p>
                </div>
              </div>

              <div className="flex items-start">
                <i className="fas fa-envelope text-primary mt-1 mr-4 text-xl"></i>
                <div>
                  <h3 className="font-medium text-lg mb-1">Email</h3>
                  <p className="text-gray-600 mb-2">Chăm sóc khách hàng: cskh@dongypharmacy.com</p>
                  <p className="text-gray-600">Hợp tác kinh doanh: business@dongypharmacy.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <i className="fas fa-clock text-primary mt-1 mr-4 text-xl"></i>
                <div>
                  <h3 className="font-medium text-lg mb-1">Giờ làm việc</h3>
                  <p className="text-gray-600">Thứ 2 - Chủ nhật: 8:00 - 20:00</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-medium text-lg mb-4">Kết nối với chúng tôi</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div>
          <form className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-primary">Gửi Tin Nhắn Cho Chúng Tôi</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Họ và tên <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Nhập họ và tên"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Số điện thoại <span className="text-red-500">*</span></label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Nhập số điện thoại"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email <span className="text-red-500">*</span></label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Nhập địa chỉ email"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Chủ đề</label>
              <select
                id="subject"
                name="subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="">Chọn chủ đề</option>
                <option value="product">Thông tin sản phẩm</option>
                <option value="order">Đơn hàng</option>
                <option value="support">Hỗ trợ kỹ thuật</option>
                <option value="feedback">Góp ý, phản hồi</option>
                <option value="cooperation">Hợp tác kinh doanh</option>
                <option value="other">Khác</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Nội dung <span className="text-red-500">*</span></label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Nhập nội dung tin nhắn"
                required
              ></textarea>
            </div>

            <div className="mb-6">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" required />
                <span className="text-gray-700">Tôi đồng ý với <Link href="/policies/privacy" className="text-primary hover:underline">chính sách bảo mật</Link> của Đông Y Pharmacy</span>
              </label>
            </div>

            <button type="submit" className="bg-primary text-white font-medium py-3 px-6 rounded-lg hover:bg-green-600 transition-colors w-full">
              Gửi tin nhắn
            </button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Bản Đồ</h2>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <div className="aspect-w-16 aspect-h-9">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5177580567037!2d106.69916121471856!3d10.771594992323746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f40a3b49e59%3A0xa1bd14e483a602db!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBLaG9hIGjhu41jIFThu7Egbmhpw6puIFRQLkhDTQ!5e0!3m2!1svi!2s!4v1620879158277!5m2!1svi!2s" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Câu Hỏi Thường Gặp</h2>
        <div className="space-y-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <button className="flex justify-between items-center w-full text-left">
              <span className="font-medium">Làm thế nào để đặt hàng trên website?</span>
              <i className="fas fa-chevron-down text-primary"></i>
            </button>
            <div className="mt-4 text-gray-600">
              <p>Để đặt hàng trên website, bạn có thể thực hiện theo các bước sau:</p>
              <ol className="list-decimal list-inside mt-2 space-y-2">
                <li>Chọn sản phẩm và thêm vào giỏ hàng</li>
                <li>Kiểm tra giỏ hàng và tiến hành thanh toán</li>
                <li>Điền thông tin giao hàng</li>
                <li>Chọn phương thức thanh toán</li>
                <li>Xác nhận đơn hàng</li>
              </ol>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <button className="flex justify-between items-center w-full text-left">
              <span className="font-medium">Phí vận chuyển được tính như thế nào?</span>
              <i className="fas fa-chevron-down text-primary"></i>
            </button>
            <div className="mt-4 text-gray-600">
              <p>Phí vận chuyển được tính dựa trên khoảng cách và trọng lượng đơn hàng. Đơn hàng trên 500.000đ sẽ được miễn phí vận chuyển trong nội thành TP.HCM. Đối với các tỉnh thành khác, phí vận chuyển sẽ được hiển thị khi bạn tiến hành thanh toán.</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <button className="flex justify-between items-center w-full text-left">
              <span className="font-medium">Tôi có thể thanh toán bằng những phương thức nào?</span>
              <i className="fas fa-chevron-down text-primary"></i>
            </button>
            <div className="mt-4 text-gray-600">
              <p>Chúng tôi chấp nhận các phương thức thanh toán sau:</p>
              <ul className="list-disc list-inside mt-2 space-y-2">
                <li>Thanh toán khi nhận hàng (COD)</li>
                <li>Chuyển khoản ngân hàng</li>
                <li>Thẻ tín dụng/ghi nợ (Visa, Mastercard, JCB)</li>
                <li>Ví điện tử (Momo, ZaloPay, VNPay)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mt-6">
          <Link href="/faq" className="text-primary hover:underline inline-flex items-center">
            Xem tất cả câu hỏi thường gặp
            <i className="fas fa-arrow-right ml-2"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;