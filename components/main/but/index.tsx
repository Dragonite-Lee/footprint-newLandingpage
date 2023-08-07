'use client'

import styles from './but.module.css'
import but_text from '../../../public/main/but_text.png'

import { useRef, useEffect } from 'react';
import Image from 'next/image';

function But() {
  const butRef = useRef<HTMLDivElement>(null);


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
          if (winH > posFromTop + 100) {
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
    <div className={styles.container} ref={butRef}>
        <div className={styles.text} >
        하지만, 나에 대해 나보다 <br />
        더 잘 아는 사람이 세상 어디에 있을까요?
        </div>
        <Image src={but_text} alt='but_text' className={styles.but_text}/>
    </div>
  )
}

export default But;