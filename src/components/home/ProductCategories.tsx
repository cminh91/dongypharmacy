import Link from 'next/link';
import Image from 'next/image';
import { FC } from 'react';

interface CategoryProps {
  id: string;
  name: string;
  image: string;
  description: string;
}

const CategoryCard: FC<CategoryProps> = ({ id, name, image, description }) => {
  return (
    <div className="category-card flex flex-col items-center">
      <Image 
        src={image} 
        alt={name} 
        className="w-auto h-[400px] mx-auto object-contain"
        width={400}
        height={320}
      />
      <div className="overlay">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text--200 mb-4 text-red-500 font-bold">{description}</p>
        <Link href={`/category/${id}`} className="text-white flex items-center">
          Xem danh mục
          <i className="fas fa-arrow-right ml-2"></i>
        </Link>
      </div>
    </div>
  );
};

const ProductCategories: FC = () => {
  const categories: CategoryProps[] = [
    {
      id: 'thuoc-bo',
      name: 'HEPASAKY',
      image: '/images/hepasaky.png',
      description: 'HỖ TRỢ GIẢI ĐỘC GAN'
    },
    {
      id: 'duoc-lieu',
      name: 'LYPASAKY',
      image: '/images/lypasaky.png',
      description: 'HỖ TRỢ GIẢM MỠ MÁU VÀ TĂNG SỨC BỀN THÀNH MẠCH'
    },
  
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Danh Mục Sản Phẩm</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Khám phá các dòng sản phẩm đa dạng phục vụ nhu cầu chăm sóc sức khỏe của bạn.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {categories.slice(0, 3).map(category => (
            <CategoryCard key={category.id} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
