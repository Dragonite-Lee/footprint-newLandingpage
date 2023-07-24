import styles from './yellow.module.css'
import yellow_mobile from '../../../public/main/yellow_mobile.png'

import Image from 'next/image';

function Yellow() {
  
  return (
    <div className={styles.container}>
        <div className={styles.open_question}>&quot;</div>
        <div>
            <div className={styles.main_text}>
            우리는 보통, <br/>
            꿈에 대한 확신을 얻기 위해서 <br/>
            다른 사람에게 질문을 해요.
            </div>
            
            <div className={styles.first_question}>
                지금 제 선택이 올바를까요?
            </div>
            <div className={styles.second_question}>
                제 나이에 도전해도 괜찮을까요?
            </div>
            <div className={styles.third_question}>
                제가 과연 할 수 있을까요?
            </div>
        </div>
        <div className={styles.close_question}>&quot;</div>
        <Image src={yellow_mobile} alt="yellow_mobile" className={styles.yellow_mobile} />
    </div>
  )
}

export default Yellow;