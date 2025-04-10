import Image from 'next/image';
import { FC } from 'react';

const AboutSection: FC = () => {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
            <h2 className="text-3xl font-bold mb-6">Về CÔNG TY TNHH THƯƠNG MẠI KND</h2>
            <p className="text-gray-600 mb-4">CÔNG TY TNHH THƯƠNG MẠI KND được thành lập vào năm 2010, là đơn vị chuyên nghiên cứu, sản xuất và phân phối các sản phẩm thuốc đông y chất lượng cao.</p>
            <p className="text-gray-600 mb-4">Chúng tôi kết hợp tinh hoa y học cổ truyền với công nghệ hiện đại để tạo ra những sản phẩm thuốc đông y hiệu quả, an toàn và phù hợp với nhu cầu sức khỏe của người tiêu dùng hiện đại.</p>
            <p className="text-gray-600 mb-6">Với đội ngũ chuyên gia y học cổ truyền giàu kinh nghiệm và hệ thống sản xuất đạt chuẩn GMP, chúng tôi cam kết mang đến những sản phẩm thuốc đông y chất lượng cao nhất.</p>
            <div className="flex space-x-4 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">12+</div>
                <div className="text-gray-600">Năm kinh nghiệm</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-gray-600">Sản phẩm</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">10K+</div>
                <div className="text-gray-600">Khách hàng</div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <Image 
                src="/images/hepasaky.png" 
                alt="Bác sĩ đông y" 
                className="rounded-lg shadow-lg"
                width={300}
                height={200}
              />
              <Image 
                src="/images/lypasaky.png" 
                alt="Sản xuất thuốc đông y" 
                className="rounded-lg shadow-lg mt-8"
                width={300}
                height={200}
              />
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;