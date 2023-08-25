'use client'

import styles from './but.module.css'
import but_text from '../../../public/main/but_text.png'
import scrollAnimation from '../../../hook/scrollAnimation';

import { useRef } from 'react';
import Image from 'next/image';

function But() {
  const butRef = useRef<HTMLDivElement>(null);

  scrollAnimation(butRef);
  
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