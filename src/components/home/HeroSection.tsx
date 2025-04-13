"use client";

import { FC, useState, useEffect } from 'react';
import heroData from '../../data/herosction.json';
import Image from 'next/image';
 

interface HeroItem {
  id: string;
  name: string;
  image: string;
  description: string;
}

const HeroSection: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === heroData.length - 1 ? 0 : prevIndex + 1
        );
        setIsVisible(true);
      }, 300); // thời gian fade out
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const item: HeroItem = heroData[currentIndex];

  return (
    <section className="relative py-16 md:py-24">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className={`md:w-1/2 mb-10 md:mb-0 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {item.name}
          </h1>
          <p className="text-red-600 text-lg font-bold mb-8">
            {item.description}
          </p>
          <p className="text-blue-600 text-lg mb-8">
          <strong>LƯU Ý:</strong> Sản phẩm được sản xuất từ các loại dược liệu thiên 
nhiên đạt chuẩn.
          </p>
          <div className="flex space-x-4 mb-6">
            <a href="#products" className="btn-primary">Khám phá sản phẩm</a>
            <a href="#contact" className="btn-secondary">Tư vấn miễn phí</a>
          </div>
        </div>
        <div className={`md:w-1/2 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="relative">
            <Image
              src={item.image}
              alt={item.name}
              className="rounded-lg shadow-xl w-full"
              width={600}
              height={400}
              style={{ height: "auto" }}
            />
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;