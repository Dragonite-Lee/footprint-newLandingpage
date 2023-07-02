'use client'

import styles from './timer.module.css'

function Timer() {
  
  let currentTime = Date.now();
  console.log(currentTime)
  return (
    <div className={styles.container}>
      <div className={styles.timer}>
        <div className={styles.time}>
            <div className={styles.time_number}>1</div>
        </div>
        <div className={styles.unit}>일</div>
        <div className={styles.time}>
            <div className={styles.time_number}>1</div>
        </div>
        <div className={styles.unit}>시</div>
        <div className={styles.time}>
            <div className={styles.time_number}>1</div>
        </div>
        <div className={styles.unit}>분</div>
        <div className={styles.time}>
            <div className={styles.time_number}>1</div>
        </div>
        <div className={styles.unit}>초</div>
      </div>
      <div className={styles.text_box}>
        <div className={styles.text_box_top}>
        <span className='font_extrabold'>시간이 지나면 하늬님의 스토리를 볼 수 없어요</span>
        </div>
        <div className={styles.text_box_bottom}>
        <span className='font_extrabold'>“2023 . 05 . 12 ~ 06 . 30”</span> 기간에만 구독 가능한, <br/>
        <span className='font_extrabold'>하늬님의 스토리를 8주 동안 <br/>
        매주 수요일, 금요일 아침 뉴스레터로 만나보세요!</span>
        </div>
      </div>
    </div>
  )
}

export default Timer;