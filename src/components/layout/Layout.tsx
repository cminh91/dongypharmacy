import { FC } from 'react';
import Header from './Header';
import  Footer  from './Footer';
import { LayoutProps } from '@/types/layout';
import layoutData from '@/data/layout.json';

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header {...layoutData.header} />
      <main>{children}</main>
      <Footer {...layoutData.footer} />
    </>
  );
};

export default Layout;