import styles from './curious.module.css'
import curious_mobile from '../../../public/main/curious_mobile.png'

import Image from 'next/image';

function Curious() {
  
  return (
    <div className={styles.container}>
        <div className={styles.q_text}>
            무한한 에너지를 가진 사람들은 스스로 어떤 질문을 던져<br/>
            ‘두려움에서 확신’으로 바꿀 대답을 만들어 갔을지,
        </div>
        <div className={styles.a_text}>
            그 과정이 궁금하지 않나요?
        </div>
        <Image src={curious_mobile} alt="curious_mobile" className={styles.curious_mobile} />
    </div>
  )
}

export default Curious;