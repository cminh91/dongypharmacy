import { FC } from 'react';

interface BenefitItemProps {
  icon: string;
  title: string;
  description: string;
}

const BenefitItem: FC<BenefitItemProps> = ({ icon, title, description }) => {
  return (
    <div className="benefit-item">
      <i className={`fas ${icon}`}></i>
      <div>
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const BenefitsSection: FC = () => {
  const benefits: BenefitItemProps[] = [
    {
      icon: 'fa-leaf',
      title: '100% Thảo Dược Tự Nhiên',
      description: 'Các sản phẩm được bào chế từ thảo dược tự nhiên, không hóa chất độc hại, an toàn cho sức khỏe.'
    },
    {
      icon: 'fa-heartbeat',
      title: 'Tác Động Toàn Diện',
      description: 'Y học cổ truyền điều trị toàn diện, cân bằng ngũ tạng, không chỉ trị triệu chứng mà còn tác động đến gốc rễ của bệnh.'
    },
    {
      icon: 'fa-history',
      title: 'Di Sản Hàng Nghìn Năm',
      description: 'Được kế thừa và phát triển qua hàng nghìn năm, đã được kiểm chứng hiệu quả qua nhiều thế hệ.'
    },
    {
      icon: 'fa-shield-alt',
      title: 'Phòng Bệnh Hơn Chữa Bệnh',
      description: 'Đông y chú trọng vào việc tăng cường sức khỏe, nâng cao đề kháng để phòng ngừa bệnh tật.'
    },
    {
      icon: 'fa-balance-scale',
      title: 'Cân Bằng Âm Dương',
      description: 'Giúp cân bằng âm dương trong cơ thể, tạo nên trạng thái khỏe mạnh và hài hòa.'
    },
    {
      icon: 'fa-hourglass-half',
      title: 'Chống Lão Hóa',
      description: 'Nhiều thảo dược có tác dụng chống oxy hóa, giúp làm chậm quá trình lão hóa và kéo dài tuổi thọ.'
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Lợi Ích Của Y Học Cổ Truyền</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Đông y không chỉ điều trị triệu chứng mà còn cân bằng cơ thể, tăng cường sức đề kháng và phòng ngừa bệnh tật.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitItem key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;