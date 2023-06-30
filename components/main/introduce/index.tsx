import styles from './introduce.module.css'

import Image from 'next/image';

function Introduce() {
  
  return (
    <div className={styles.container}>
      <button className={styles.btn}>연재 일정 자세히 알아보기</button>
    </div>
  )
}

export default Introduce;