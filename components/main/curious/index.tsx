'use client'

import styles from './curious.module.css'
import curious_mobile from '../../../public/main/curious_mobile.png'

import Image from 'next/image';
import { useRef, useEffect } from 'react';

function Curious() {
  
  const curiousRef = useRef<HTMLDivElement>(null)

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
        if (curiousRef.current) {
          var posFromTop = curiousRef.current.getBoundingClientRect().top;
          if (winH > posFromTop + 500) {
            curiousRef.current.style.opacity = '1';
            curiousRef.current.style.transform = 'translateY(0px)'
            curiousRef.current.style.transition = '1.4s';
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
        <div ref={curiousRef} className={styles.interativeBox}>
          <div className={styles.q_text}>
              무한한 에너지를 가진 사람들은 스스로 어떤 질문을 던져<br/>
              ‘두려움에서 확신’으로 바꿀 대답을 만들어 갔을지,
          </div>
          <div className={styles.a_text}>
              그 과정이 궁금하지 않나요?
          </div>
        </div>
        <Image src={curious_mobile} alt="curious_mobile" className={styles.curious_mobile} />
    </div>
  )
}

export default Curious;