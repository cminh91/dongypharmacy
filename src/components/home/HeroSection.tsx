import Link from 'next/link';
import Image from 'next/image';
import { FC } from 'react';

const HeroSection: FC = () => {
  return (
    <section className="relative py-16 md:py-24">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Thuốc Đông Y <br /> Chất Lượng Cao</h1>
          <p className="text-gray-600 text-lg mb-8">Kết hợp tinh hoa y học cổ truyền với nghiên cứu khoa học hiện đại, mang đến giải pháp sức khỏe toàn diện từ thiên nhiên.</p>
          <div className="flex space-x-4">
            <Link href="#products" className="btn-primary">Khám phá sản phẩm</Link>
            <Link href="#contact" className="btn-secondary">Tư vấn miễn phí</Link>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="relative">
            <Image 
              src="/images/hepasaky.png" 
              alt="Thuốc đông y chất lượng cao" 
              className="rounded-lg shadow-xl w-full"
              width={600}
              height={400}
            />
            <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-lg shadow-lg max-w-xs">
              <div className="flex items-center mb-2">
                <i className="fas fa-certificate text-yellow-500 mr-2"></i>
                <span className="font-bold">Đảm bảo chất lượng</span>
              </div>
              <p className="text-sm text-gray-600">Nguyên liệu 100% tự nhiên, được kiểm định nghiêm ngặt.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;