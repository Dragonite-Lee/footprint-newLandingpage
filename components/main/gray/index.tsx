import styles from './gray.module.css'

function Gray() {
  
  return (
    <div className={styles.container}>
        <div className={styles.q_text}>
            꿈을 향해 끊임없이 달릴 수 있는 무한한 에너지를 만들어 내고 싶다면
        </div>
        <div className={styles.a_text}>
        질문의 방향이 다른 사람이 아닌 <br/>
        자신에게 향해야 하는 것, 아닐까요?
        </div>
    </div>
  )
}

export default Gray;