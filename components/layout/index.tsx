import styles from './layout.module.css'
import navbarLogo from '../../public/layout/navbar_logo.png'
import Header from './header';
import Footer from './footer';

import Link from 'next/link';
import Image from 'next/image';
 
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