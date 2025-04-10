import { FC } from 'react';
import Link from 'next/link';

const PoliciesPage: FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Chính sách & Điều khoản</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Điều khoản sử dụng */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-file-alt text-2xl text-green-600"></i>
            </div>
            <h2 className="text-xl font-bold">Điều khoản sử dụng</h2>
          </div>
          <div className="prose prose-green">
            <p>Khi sử dụng dịch vụ của Đông Y Pharmacy, bạn đồng ý với các điều khoản sau:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Tuân thủ quy định về đặt hàng và thanh toán</li>
              <li>Cung cấp thông tin chính xác khi đăng ký tài khoản</li>
              <li>Không sử dụng dịch vụ vào mục đích bất hợp pháp</li>
              <li>Tôn trọng quyền sở hữu trí tuệ của website</li>
            </ul>
            <Link href="/policies/terms" className="text-green-600 hover:underline block mt-4">
              Xem chi tiết
              <i className="fas fa-arrow-right ml-2"></i>
            </Link>
          </div>
        </div>

        {/* Chính sách bảo mật */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-shield-alt text-2xl text-green-600"></i>
            </div>
            <h2 className="text-xl font-bold">Chính sách bảo mật</h2>
          </div>
          <div className="prose prose-green">
            <p>Chúng tôi cam kết bảo vệ thông tin cá nhân của bạn:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Mã hóa thông tin thanh toán</li>
              <li>Không chia sẻ thông tin với bên thứ ba</li>
              <li>Bảo mật dữ liệu người dùng</li>
              <li>Quyền kiểm soát thông tin cá nhân</li>
            </ul>
            <Link href="/policies/privacy" className="text-green-600 hover:underline block mt-4">
              Xem chi tiết
              <i className="fas fa-arrow-right ml-2"></i>
            </Link>
          </div>
        </div>

        {/* Chính sách vận chuyển */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-truck text-2xl text-green-600"></i>
            </div>
            <h2 className="text-xl font-bold">Chính sách vận chuyển</h2>
          </div>
          <div className="prose prose-green">
            <p>Thông tin về dịch vụ vận chuyển của chúng tôi:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Phí vận chuyển theo khu vực</li>
              <li>Thời gian giao hàng dự kiến</li>
              <li>Chính sách đổi trả hàng</li>
              <li>Hướng dẫn kiểm tra hàng</li>
            </ul>
            <Link href="/policies/shipping" className="text-green-600 hover:underline block mt-4">
              Xem chi tiết
              <i className="fas fa-arrow-right ml-2"></i>
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Câu hỏi thường gặp</h2>
        <div className="space-y-4">
          <div className="bg-white rounded-lg shadow p-6">
            <button className="flex justify-between items-center w-full">
              <span className="font-medium">Làm thế nào để đặt hàng?</span>
              <i className="fas fa-chevron-down"></i>
            </button>
            <div className="mt-4 text-gray-600">
              <p>Để đặt hàng, bạn có thể thực hiện theo các bước sau:</p>
              <ol className="list-decimal list-inside mt-2 space-y-2">
                <li>Chọn sản phẩm và thêm vào giỏ hàng</li>
                <li>Kiểm tra giỏ hàng và tiến hành thanh toán</li>
                <li>Điền thông tin giao hàng</li>
                <li>Chọn phương thức thanh toán</li>
                <li>Xác nhận đơn hàng</li>
              </ol>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <button className="flex justify-between items-center w-full">
              <span className="font-medium">Chính sách đổi trả như thế nào?</span>
              <i className="fas fa-chevron-down"></i>
            </button>
            <div className="mt-4 text-gray-600">
              <p>Chúng tôi áp dụng chính sách đổi trả trong vòng 7 ngày kể từ ngày nhận hàng, với các điều kiện:</p>
              <ul className="list-disc list-inside mt-2 space-y-2">
                <li>Sản phẩm còn nguyên vẹn, chưa sử dụng</li>
                <li>Có đầy đủ bao bì, nhãn mác</li>
                <li>Có hóa đơn mua hàng</li>
                <li>Lý do đổi trả hợp lý</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <button className="flex justify-between items-center w-full">
              <span className="font-medium">Phương thức thanh toán nào được chấp nhận?</span>
              <i className="fas fa-chevron-down"></i>
            </button>
            <div className="mt-4 text-gray-600">
              <p>Chúng tôi chấp nhận các phương thức thanh toán sau:</p>
              <ul className="list-disc list-inside mt-2 space-y-2">
                <li>Thanh toán khi nhận hàng (COD)</li>
                <li>Chuyển khoản ngân hàng</li>
                <li>Ví điện tử (Momo, ZaloPay, VNPay)</li>
                <li>Thẻ tín dụng/ghi nợ</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Bạn cần hỗ trợ thêm?</h2>
        <p className="text-gray-600 mb-6">Đội ngũ chăm sóc khách hàng của chúng tôi luôn sẵn sàng hỗ trợ bạn</p>
        <div className="flex justify-center space-x-4">
          <Link href="/contact" className="btn-primary px-6 py-2">
            <i className="fas fa-headset mr-2"></i>
            Liên hệ hỗ trợ
          </Link>
          <Link href="/faq" className="btn-secondary px-6 py-2">
            <i className="fas fa-question-circle mr-2"></i>
            Xem thêm FAQ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PoliciesPage;