import styles from './gray.module.css'
import gray_mobile from '../../../public/main/gray_mobile.png'

import Image from 'next/image';

function Gray() {
  
  return (
    <div className={styles.container}>
        <div className={styles.q_text}>
            꿈을 향해 끊임없이 달릴 수 있는 <br />
            무한한 에너지를 만들어 내고 싶다면
        </div>
        <div className={styles.a_text}>
        질문의 방향이 다른 사람이 아닌 <br/>
        자신에게 향해야 하는 것, 아닐까요?
        </div>
        <Image src={gray_mobile} alt="gray_mobile" className={styles.gray_mobile} />
    </div>
  )
}

export default Gray;