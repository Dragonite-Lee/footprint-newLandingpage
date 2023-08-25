'use client'

import styles from './together.module.css'
import curious_text from '../../../public/main/curious_text.png'
import scrollAnimation from '../../../hook/scrollAnimation';

import { useRef } from 'react';
import Image from 'next/image';

function Together() {
  
  const togetherRef = useRef<HTMLDivElement>(null);

  scrollAnimation(togetherRef);

  return (
    <div className={styles.container}>
        <div ref={togetherRef} className={styles.interativeBox}>
          <div className={styles.q_text}>
              가까이에 있지만 쉽게 만나볼 수 없는 선배들이<br/>
              커리어 성장 과정과 그 안에서의 삶을
          </div>
          <Image src={curious_text} alt='curious_text' className={styles.curious_text} />
          <div className={styles.a_text}>
              생생한 스토리로 전달해, 여러분의 꿈을 향한 여정에 확신을<br/>
               더해주는 동반자로서 함께할게요.
          </div>
          <div className={styles.a_text_small}>
              생생한 스토리로 전달해, 여러분의 <br/>
              꿈을 향한 여정에 확신을<br/>
              더해주는 동반자로서 함께할게요.
          </div>
        </div>
    </div>
  )
}

export default Together;