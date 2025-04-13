import { FC } from 'react';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import BenefitsSection from '@/components/home/BenefitsSection';
import ProductCategories from '@/components/home/ProductCategories';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import ContactSection from '@/components/home/ContactSection';

const Home: FC = () => {
  return (
    <>
      <div className="relative z-10">
        <main>
          <HeroSection />
          <AboutSection />
          <BenefitsSection />
          <ProductCategories />
          <FeaturedProducts />
          <TestimonialsSection />
          {/* <OrderSection /> */}
          <ContactSection />
        </main>
      </div>
    </>
  );
};

export default Home;
