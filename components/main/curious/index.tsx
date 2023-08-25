'use client'

import styles from './curious.module.css'
import scrollAnimation from '../../../hook/scrollAnimation';

import { useRef } from 'react';

function Curious() {
  
  const curiousRef = useRef<HTMLDivElement>(null);

  scrollAnimation(curiousRef);

  return (
    <div className={styles.container}>
        <div ref={curiousRef} className={styles.interativeBox}>
          <div className={styles.q_text}>
              무한한 에너지를 가진 사람들은 스스로 어떤 질문을 던져<br/>
              ‘두려움에서 확신’으로 바꿀 대답을 만들어 갔을지,
          </div>
          <div className={styles.q_text_small}>
              무한한 에너지를 가진 사람들은 <br/>
              스스로 어떤 질문을 던져<br/>
              ‘두려움에서 확신’으로 바꿀 대답을 만들어 갔을지,
          </div>
          <div className={styles.a_text}>
              그 과정이 궁금하지 않나요?
          </div>
        </div>
    </div>
  )
}

export default Curious;