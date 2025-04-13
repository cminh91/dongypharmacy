import { FC } from 'react';
import Image from 'next/image';
interface TestimonialProps {
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
}

const TestimonialCard: FC<TestimonialProps> = ({ name, role, image, content, rating }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center mb-4">
        <Image src={image} alt={name} className="w-12 h-12 rounded-full object-cover mr-4" width={48} height={48} />
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-gray-600 text-sm">{role}</p>
        </div>
      </div>
      <div className="flex text-yellow-400 mb-3">
        {[...Array(5)].map((_, i) => (
          <i key={i} className={`fas fa-star ${i < rating ? '' : 'text-gray-300'}`}></i>
        ))}
      </div>
      <p className="text-gray-600">{content}</p>
    </div>
  );
};

const TestimonialsSection: FC = () => {
  const testimonials: TestimonialProps[] = [
    {
      name: 'Nguyễn Văn A',
      role: 'Khách hàng',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      content: 'Tôi đã sử dụng sản phẩm của Đông Y Pharmacy được 6 tháng và thấy sức khỏe cải thiện rõ rệt. Các sản phẩm rất an toàn và hiệu quả.',
      rating: 5
    },
    {
      name: 'Trần Thị B',
      role: 'Khách hàng',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      content: 'Đội ngũ tư vấn rất nhiệt tình và chuyên nghiệp. Họ giúp tôi chọn được những sản phẩm phù hợp với tình trạng sức khỏe của mình.',
      rating: 4.5
    },
    {
      name: 'Lê Văn C',
      role: 'Khách hàng',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      content: 'Chất lượng sản phẩm rất tốt, đóng gói cẩn thận. Tôi sẽ tiếp tục ủng hộ Đông Y Pharmacy trong tương lai.',
      rating: 5
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Khách Hàng Nói Gì</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Những trải nghiệm thực tế từ khách hàng đã sử dụng sản phẩm của chúng tôi.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;