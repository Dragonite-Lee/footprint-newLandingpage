import styles from './layout.module.css'
import navbarLogo from '../../public/layout/navbar_logo.png'

import Link from 'next/link';
import Image from 'next/image';
 
type AppLayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: AppLayoutProps) {

  return (
    <div>
      <div className={styles.navbar}>
        <Link href="/" className={styles.navbar_left}>
          <Image src={navbarLogo} className={styles.navbar_logo} alt='navbar_logo이미지' />
        </Link>
        <div className={styles.navbar_right}>
          <Link href="/Intro">
            <div className={styles.navbar_intro}>
              <span className='font_bold'>Footprint</span> 소개
            </div>
          </Link>
          <Link href="/Ongoing">
            <div className={styles.navbar_ongoing}>
              연재 중인 스토리
            </div>
          </Link>
        </div>
      </div>
      <main>{children}</main>
    </div>
  )
}

export default Layout;