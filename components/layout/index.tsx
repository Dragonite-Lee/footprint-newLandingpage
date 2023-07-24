import styles from './layout.module.css'
import navbarLogo from '../../public/layout/navbar_logo.png'
import Header from './header';
import Footer from './footer';

import { useEffect } from 'react';
 
type AppLayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: AppLayoutProps) {

  

  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout;