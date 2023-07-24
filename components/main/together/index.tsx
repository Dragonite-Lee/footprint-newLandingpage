import styles from './together.module.css'
import together_mobile from '../../../public/main/together_mobile.png'

import Image from 'next/image';
function Together() {
  
  return (
    <div className={styles.container}>
        <div className={styles.q_text}>
            가까이에 있지만 쉽게 만나볼 수 없는 선배들이<br/>
            커리어 성장 과정과 그 안에서의 삶을
        </div>
        <div className={styles.a_text}>
            생생한 스토리로 전달해, 여러분의 꿈을 향한 여정에<br/>
            확신을 더해주는 동반자로서 함께할게요.
        </div>
        <Image src={together_mobile} alt="together_mobile" className={styles.together_mobile} />
    </div>
  )
}

export default Together;