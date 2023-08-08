'use client'

import styles from './layout.module.css'
import navbarLogo from '../../public/layout/navbar_logo.png'
import h_menu from '../../public/layout/h_menu.png'
import c_menu from '../../public/layout/c_menu.png'

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from 'react';
import { setTimeout } from 'timers'
 
function Header() {

  let url: string = usePathname();
  const menu_black = useRef<HTMLDivElement>(null);
  const menu_white = useRef<HTMLDivElement>(null);
  const menu_wrap = useRef<HTMLDivElement>(null);
  const [menuCurrent, setMenuCurrent] = useState<boolean>(false);

  const openModal = () => {
    if(menu_black.current && menu_white.current && menu_wrap.current) {
      menu_black.current.style.background = 'rgba(0,0,0,0.3)';
      menu_black.current.style.transition = 'background 1s ease';
      menu_black.current.style.zIndex = '7';
      menu_white.current.style.transform = 'translateX(0%)';
      menu_white.current.style.transition = 'transform 1s ease';
    };
    setTimeout(() => {
      setMenuCurrent(true);
    }, 300);
  }

  const closeModal = () => {
    if(menu_black.current && menu_white.current && menu_wrap.current) {
      menu_black.current.style.background = 'rgba(0,0,0,0)';
      menu_black.current.style.transition = 'background 1s ease';
      menu_white.current.style.zIndex = '7';
      menu_white.current.style.transform = 'translateX(200%)';
      menu_white.current.style.transition = 'transform 1s ease';
    };
    setTimeout(() => {
      if(menu_black.current && menu_wrap.current) {
        menu_black.current.style.zIndex = '4'; 
        menu_wrap.current.style.zIndex = '8';
      }
      setMenuCurrent(false);
    }, 300);
  }

  const closeBlackModal = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target === menu_black.current) {
      if(menu_black.current && menu_white.current && menu_wrap.current) {
        menu_black.current.style.background = 'rgba(0,0,0,0)';
        menu_black.current.style.transition = 'background 1s ease';
        menu_white.current.style.zIndex = '8';
        menu_white.current.style.transform = 'translateX(200%)';
        menu_white.current.style.transition = 'transform 1s ease';
      }
      setTimeout(() => {
        if(menu_black.current && menu_wrap.current) {
          menu_black.current.style.zIndex = '4'; 
          menu_wrap.current.style.zIndex = '8';
        }
        setMenuCurrent(false);
      }, 300);
    }
  }
  
  useEffect(()=>{
    const setScreenSize = () => {
      let vh = window.innerHeight * 0.01;
    
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    setScreenSize();
  },[])
  return (
    <>
      <header className={styles.navbar}>
        <Link href="/" className={styles.navbar_left}>
          <Image src={navbarLogo} className={styles.navbar_logo} alt='navbar_logo이미지' />
        </Link>
        <div className={styles.navbar_right}>
          <Link href="/Intro">
            <div className={url === "/Intro" ? styles.navbar_intro_active : styles.navbar_intro}>
              <span className='font_bold'>footprint</span> 소개
            </div>
          </Link>
          <Link href="/Ongoing">
            <div className={url === "/Ongoing" ? styles.navbar_ongoing_active : styles.navbar_ongoing}>
              연재 중인 스토리
            </div>
          </Link>
        </div>
      </header>
      <header>
        <div className={styles.menu_black_tab} ref={menu_black} onClick={(e) => closeBlackModal(e)}>
          <div className={styles.menu_white_tab} ref={menu_white}>
            <Link href="/">
              <div className={`${styles.menu_title} ${styles.top_index}`} onClick={closeModal}>
                <span className='font_bold'>footprint</span>
              </div>
            </Link>
            <Link href="/Intro">
              <div className={styles.menu_title} onClick={closeModal}>
                <span className='font_bold'>브랜드</span> 소개
              </div>
            </Link>
            <Link href="/Ongoing">
              <div className={styles.menu_title} onClick={closeModal}>
                연재 중인 스토리
              </div>
            </Link>
          </div>
        </div>
        <div className={styles.header_wrap} ref={menu_wrap}>
          {
            menuCurrent
            ? <Image src={c_menu} className={styles.c_menu} alt='c_menu' onClick={closeModal}/>
            : <Image src={h_menu} className={styles.h_menu} alt='h_menu' onClick={openModal}/>
          }
        </div>
      </header>
    </>
  )
}

export default Header;