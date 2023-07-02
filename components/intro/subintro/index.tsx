import styles from './subintro.module.css'

function SubIntro() {
  
  return (
    <div className={styles.container}>
        <div className={styles.main_text}>
            여러분은 footprint를 통해 <br />
            <span className={styles.yellow_box}>다양한 공감</span>과 <span className={styles.yellow_box}>인사이트</span>를 얻어, <br />
            나의 꿈에 대한 <span className={styles.yellow_box}>주체적인 기준</span>과 <br />
            <span className={styles.yellow_box}>확신</span>을 만들어 갈 수 있습니다.
        </div>
    </div>
  )
}

export default SubIntro;