'use client';
import { FC, useState } from 'react';
import Link from 'next/link';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  icon: string;
  items: FAQItem[];
}

const FAQPage: FC = () => {
  const [expandedCategories, setExpandedCategories] = useState<{[key: string]: boolean}>({
    'general': true,
    'products': false,
    'orders': false,
    'shipping': false,
    'payment': false,
    'returns': false
  });

  const [expandedQuestions, setExpandedQuestions] = useState<{[key: string]: boolean}>({});

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const toggleQuestion = (questionId: string) => {
    setExpandedQuestions(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  const faqCategories: FAQCategory[] = [
    {
      title: 'Thông tin chung',
      icon: 'fa-circle-info',
      items: [
        {
          question: 'Đông Y Pharmacy là gì?',
          answer: 'Đông Y Pharmacy là nhà thuốc chuyên cung cấp các sản phẩm thuốc đông y chất lượng cao, được kiểm chứng từ các dược liệu thiên nhiên. Chúng tôi cam kết mang đến những sản phẩm an toàn, hiệu quả và có nguồn gốc rõ ràng.'
        },
        {
          question: 'Làm thế nào để liên hệ với Đông Y Pharmacy?',
          answer: 'Bạn có thể liên hệ với chúng tôi qua số điện thoại: 0123 456 789, email: info@dongypharmacy.com hoặc trực tiếp tại cửa hàng: 123 Đường Nguyễn Trãi, Quận 1, TP.HCM. Ngoài ra, bạn cũng có thể sử dụng trang Liên hệ trên website của chúng tôi.'
        },
        {
          question: 'Thời gian làm việc của Đông Y Pharmacy?',
          answer: 'Chúng tôi làm việc từ 8:00 - 20:00 tất cả các ngày trong tuần, kể cả ngày lễ.'
        }
      ]
    },
    {
      title: 'Sản phẩm',
      icon: 'fa-leaf',
      items: [
        {
          question: 'Các sản phẩm của Đông Y Pharmacy có được kiểm nghiệm không?',
          answer: 'Tất cả sản phẩm của Đông Y Pharmacy đều được kiểm nghiệm nghiêm ngặt và có giấy chứng nhận chất lượng từ các cơ quan chức năng. Chúng tôi cam kết cung cấp sản phẩm đạt tiêu chuẩn an toàn và chất lượng cao.'
        },
        {
          question: 'Làm thế nào để biết sản phẩm nào phù hợp với tôi?',
          answer: 'Bạn có thể tham khảo thông tin chi tiết về công dụng, thành phần và đối tượng sử dụng trên trang sản phẩm. Nếu cần tư vấn cụ thể, vui lòng liên hệ với chúng tôi qua hotline hoặc email để được dược sĩ tư vấn chi tiết.'
        },
        {
          question: 'Sản phẩm của Đông Y Pharmacy có tác dụng phụ không?',
          answer: 'Các sản phẩm của chúng tôi được chiết xuất từ thảo dược tự nhiên và đã qua kiểm nghiệm nên thường ít gây tác dụng phụ. Tuy nhiên, mỗi người có thể có phản ứng khác nhau, vì vậy hãy đọc kỹ hướng dẫn sử dụng và tham khảo ý kiến chuyên gia nếu bạn có bất kỳ lo ngại nào.'
        }
      ]
    },
    {
      title: 'Đặt hàng',
      icon: 'fa-cart-shopping',
      items: [
        {
          question: 'Làm thế nào để đặt hàng trên website?',
          answer: 'Để đặt hàng, bạn chỉ cần chọn sản phẩm, thêm vào giỏ hàng, sau đó tiến hành thanh toán. Bạn có thể đặt hàng với tư cách khách hoặc đăng nhập vào tài khoản của mình để theo dõi đơn hàng dễ dàng hơn.'
        },
        {
          question: 'Tôi có thể thay đổi hoặc hủy đơn hàng sau khi đã đặt không?',
          answer: 'Bạn có thể thay đổi hoặc hủy đơn hàng trong vòng 2 giờ sau khi đặt hàng bằng cách liên hệ với chúng tôi qua hotline. Sau thời gian này, đơn hàng sẽ được xử lý và không thể thay đổi.'
        },
        {
          question: 'Tôi có thể đặt hàng qua điện thoại không?',
          answer: 'Có, bạn có thể đặt hàng qua điện thoại bằng cách gọi đến số hotline: 0123 456 789. Nhân viên của chúng tôi sẽ hỗ trợ bạn trong quá trình đặt hàng.'
        }
      ]
    },
    {
      title: 'Vận chuyển',
      icon: 'fa-truck',
      items: [
        {
          question: 'Thời gian giao hàng là bao lâu?',
          answer: 'Thời gian giao hàng thông thường là 2-3 ngày đối với khu vực nội thành và 3-5 ngày đối với khu vực ngoại thành. Thời gian có thể thay đổi tùy thuộc vào địa điểm và điều kiện giao thông.'
        },
        {
          question: 'Phí vận chuyển là bao nhiêu?',
          answer: 'Phí vận chuyển phụ thuộc vào khu vực giao hàng và giá trị đơn hàng. Đơn hàng trên 500.000đ sẽ được miễn phí vận chuyển trong nội thành. Chi tiết phí vận chuyển sẽ được hiển thị khi bạn thanh toán.'
        },
        {
          question: 'Làm thế nào để theo dõi đơn hàng của tôi?',
          answer: 'Bạn có thể theo dõi đơn hàng bằng cách đăng nhập vào tài khoản và kiểm tra trong mục "Đơn hàng của tôi". Ngoài ra, chúng tôi cũng sẽ gửi email và tin nhắn cập nhật trạng thái đơn hàng cho bạn.'
        }
      ]
    },
    {
      title: 'Thanh toán',
      icon: 'fa-credit-card',
      items: [
        {
          question: 'Có những phương thức thanh toán nào?',
          answer: 'Chúng tôi chấp nhận nhiều phương thức thanh toán bao gồm: thanh toán khi nhận hàng (COD), chuyển khoản ngân hàng, thẻ tín dụng/ghi nợ và các ví điện tử như MoMo, ZaloPay.'
        },
        {
          question: 'Thanh toán online có an toàn không?',
          answer: 'Hệ thống thanh toán của chúng tôi được bảo mật theo tiêu chuẩn quốc tế. Thông tin thanh toán của bạn sẽ được mã hóa và bảo vệ an toàn.'
        },
        {
          question: 'Tôi có thể nhận hóa đơn VAT không?',
          answer: 'Có, bạn có thể yêu cầu xuất hóa đơn VAT khi đặt hàng bằng cách điền thông tin xuất hóa đơn trong quá trình thanh toán hoặc liên hệ với chúng tôi sau khi đặt hàng.'
        }
      ]
    },
    {
      title: 'Đổi trả & Hoàn tiền',
      icon: 'fa-rotate',
      items: [
        {
          question: 'Chính sách đổi trả của Đông Y Pharmacy là gì?',
          answer: 'Chúng tôi chấp nhận đổi trả trong vòng 7 ngày kể từ ngày nhận hàng nếu sản phẩm bị lỗi, hư hỏng do vận chuyển hoặc không đúng với mô tả. Sản phẩm đổi trả phải còn nguyên vẹn, chưa sử dụng và còn đầy đủ bao bì.'
        },
        {
          question: 'Làm thế nào để yêu cầu đổi trả sản phẩm?',
          answer: 'Để yêu cầu đổi trả, bạn cần liên hệ với chúng tôi qua hotline hoặc email để được hướng dẫn. Sau khi được xác nhận, bạn có thể gửi sản phẩm về địa chỉ của chúng tôi hoặc chúng tôi sẽ cử nhân viên đến nhận lại sản phẩm.'
        },
        {
          question: 'Thời gian hoàn tiền là bao lâu?',
          answer: 'Sau khi yêu cầu hoàn tiền được chấp nhận, thời gian hoàn tiền thông thường là 3-5 ngày làm việc đối với thanh toán bằng thẻ tín dụng/ghi nợ và 5-7 ngày làm việc đối với chuyển khoản ngân hàng.'
        }
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Câu hỏi thường gặp (FAQ)</h1>
      
      <div className="bg-white rounded-lg shadow overflow-hidden mb-8">
        <div className="p-6">
          <p className="text-gray-700 mb-4">
            Chào mừng bạn đến với trang Câu hỏi thường gặp của Đông Y Pharmacy. Tại đây, bạn có thể tìm thấy câu trả lời cho những thắc mắc phổ biến về sản phẩm, đặt hàng, vận chuyển và các vấn đề khác.
          </p>
          <p className="text-gray-700">
            Nếu bạn không tìm thấy câu trả lời cho câu hỏi của mình, vui lòng liên hệ với chúng tôi qua <Link href="/lien-he" className="text-green-600 hover:underline">trang Liên hệ</Link> hoặc gọi đến hotline: <span className="font-medium">0123 456 789</span>.
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {faqCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="bg-white rounded-lg shadow overflow-hidden">
            <button
              className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              onClick={() => toggleCategory(Object.keys(expandedCategories)[categoryIndex])}
            >
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <i className={`fas ${category.icon} text-green-600`}></i>
                </div>
                <h2 className="text-xl font-bold">{category.title}</h2>
              </div>
              <i className={`fas ${expandedCategories[Object.keys(expandedCategories)[categoryIndex]] ? 'fa-chevron-up' : 'fa-chevron-down'} text-green-600`}></i>
            </button>
            
            {expandedCategories[Object.keys(expandedCategories)[categoryIndex]] && (
              <div className="px-6 pb-6 space-y-4">
                {category.items.map((item, itemIndex) => {
                  const questionId = `${categoryIndex}-${itemIndex}`;
                  return (
                    <div key={itemIndex} className="border rounded-lg overflow-hidden">
                      <button
                        className="w-full flex items-center justify-between p-4 text-left focus:outline-none hover:bg-gray-50"
                        onClick={() => toggleQuestion(questionId)}
                      >
                        <h3 className="font-medium">{item.question}</h3>
                        <i className={`fas ${expandedQuestions[questionId] ? 'fa-minus' : 'fa-plus'} text-green-600`}></i>
                      </button>
                      
                      {expandedQuestions[questionId] && (
                        <div className="p-4 bg-gray-50 border-t">
                          <p className="text-gray-700">{item.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;