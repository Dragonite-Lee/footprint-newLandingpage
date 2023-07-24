import styles from './together.module.css'
import together_mobile from '../../../public/main/together_mobile.png'

import Image from 'next/image';
import { useRef, useEffect } from 'react';

function Together() {
  
  const togetherRef = useRef<HTMLDivElement>(null)

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
        if (togetherRef.current) {
          var posFromTop = togetherRef.current.getBoundingClientRect().top;
          if (winH > posFromTop) {
            togetherRef.current.style.opacity = '1';
            togetherRef.current.style.transform = 'translateY(0px)'
            togetherRef.current.style.transition = '1.4s';
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
        <div ref={togetherRef} className={styles.interativeBox}>
          <div className={styles.q_text}>
              가까이에 있지만 쉽게 만나볼 수 없는 선배들이<br/>
              커리어 성장 과정과 그 안에서의 삶을
          </div>
          <div className={styles.a_text}>
              생생한 스토리로 전달해, 여러분의 꿈을 향한 여정에<br/>
              확신을 더해주는 동반자로서 함께할게요.
          </div>
        </div>
        <Image src={together_mobile} alt="together_mobile" className={styles.together_mobile} />
    </div>
  )
}

export default Together;