import styles from './together.module.css'

function Together() {
  
  return (
    <div className={styles.container}>
        <div className={styles.q_text}>
            가까이에 있지만 쉽게 만나볼 수 없는 선배들이<br/>
            직업을 선택하고 달성해 지금의 커리어를 걸어간 과정을
        </div>
        <div className={styles.a_text}>
            생생한 스토리로 전달해, 여러분의 꿈을 향한 여정에 확신을 <br/>
            더해주는 동반자로서 함께할게요.
        </div>
    </div>
  )
}

export default Together;