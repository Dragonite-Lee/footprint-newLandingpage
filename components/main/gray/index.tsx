'use client'

import styles from './gray.module.css'

import { useRef, useEffect } from 'react';

function Gray() {
  
  const grayRef = useRef<HTMLDivElement>(null)

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
        if (grayRef.current) {
          var posFromTop = grayRef.current.getBoundingClientRect().top;
          if (winH > posFromTop + 100) {
            grayRef.current.style.opacity = '1';
            grayRef.current.style.transform = 'translateY(0px)'
            grayRef.current.style.transition = '1.4s';
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
        <div ref={grayRef} className={styles.interativeBox}>
          <div className={styles.q_text}>
              꿈을 향해 끊임없이 달릴 수 있는 <br />
              무한한 에너지를 만들어 내고 싶다면
          </div>
          <div className={styles.a_text}>
          질문의 방향이 다른 사람이 아닌 <br/>
          자신에게 향해야 하는 것, 아닐까요?
          </div>
        </div>
    </div>
  )
}

export default Gray;