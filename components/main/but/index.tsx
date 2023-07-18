import styles from './but.module.css'

function But() {
  
  return (
    <div className={styles.container}>
        <div className={styles.text}>
        하지만, 나에 대해 나보다 <br />
        더 잘 아는 사람이 세상 어디에 있을까요?
        </div>
    </div>
  )
}

export default But;