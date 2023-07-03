'use client'

import styles from './introduce.module.css'

import Link from 'next/link';

function Introduce() {
  
  return (
    <div className={styles.container}>
      <Link href="/Ongoing">
        <button className={styles.btn}>연재 일정 자세히 알아보기</button>
      </Link>
    </div>
  )
}

export default Introduce;