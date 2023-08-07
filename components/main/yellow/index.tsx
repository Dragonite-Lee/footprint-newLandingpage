'use client'

import styles from './yellow.module.css'
import yellow_main_text from '../../../public/main/yellow_main_text.png'
import yellow_sub_text from '../../../public/main/yellow_sub_text.png'

import { useRef, useEffect } from 'react';
import Image from 'next/image';

function Yellow() {
  
    const yellowRef = useRef<HTMLDivElement>(null)

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
        if (yellowRef.current) {
          var posFromTop = yellowRef.current.getBoundingClientRect().top;
          if (winH > posFromTop + 100) {
            yellowRef.current.style.opacity = '1';
            yellowRef.current.style.transform = 'translateY(0px)'
            yellowRef.current.style.transition = '1.4s';
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
    <div className={styles.container} ref={yellowRef}>
        <div className={styles.open_question}>&quot;</div>
        <div>
            <div className={styles.main_text}>
            우리는 보통, <br/>
            꿈에 대한 확신을 얻기 위해서 <br/>
            다른 사람에게 질문을 해요.
            </div>
            
            
            <div className={styles.first_question}>
                지금 제 선택이 올바를까요?
            </div>
            <div className={styles.second_question}>
                제 나이에 도전해도 괜찮을까요?
            </div>
            <div className={styles.third_question}>
                제가 과연 할 수 있을까요?
            </div>
        </div>
        <div className={styles.close_question}>&quot;</div>
    </div>
  )
}

export default Yellow;