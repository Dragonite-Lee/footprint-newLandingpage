'use client'

import styles from './but.module.css'
import but_mobile from '../../../public/main/but_mobile.png'

import Image from 'next/image';
import { useRef, useEffect } from 'react';

function But() {
  const butRef = useRef<HTMLDivElement>(null)

  const animation = () => {
    let winH: number;
   
    const initModule = () => {
      winH = window.innerHeight;
      addEventHandlers();
    }
   
    const addEventHandlers = () => {
      window.addEventListener("scroll", checkPosition);
      window.addEventListener("load", checkPosition);
      window.addEventListener("resize", initModule);
    };
   
    const checkPosition = () => {
        if (butRef.current) {
          var posFromTop = butRef.current.getBoundingClientRect().top;
          if (winH > posFromTop + 500) {
            butRef.current.style.opacity = '1';
            butRef.current.style.transform = 'translateY(0px)'
            butRef.current.style.transition = '1.4s';
          }
        }
    }
   
    return {
      init: initModule
    }
  }
  useEffect(() => {
    animation().init();
  },[])
  
  return (
    <div className={styles.container}>
        <div className={styles.text} ref={butRef}>
        하지만, 나에 대해 나보다 <br />
        더 잘 아는 사람이 세상 어디에 있을까요?
        </div>
        <Image src={but_mobile} alt="but_mobile" className={styles.but_mobile} />
    </div>
  )
}

export default But;