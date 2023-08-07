import styles from './introduce.module.css'
import chevron_right from '../../../public/main/chevron-right.png'

import Link from 'next/link';
import Image from 'next/image';

interface IntroduecProps {
  top_text: string
  bot_text_pc: string
  bot_text_tablet: string
  bot_text_mobile: string
}
function Introduce({top_text, bot_text_pc, bot_text_tablet, bot_text_mobile}: IntroduecProps) {
  
  return (
    <div className={styles.container}>
      <Link href="/Ongoing">
        <div className={styles.link_box}>
          <div className={styles.top_text}>{top_text}</div>
          <Image src={chevron_right} alt="화살표" className={styles.chevron} />
        </div>
      </Link>
        <div className={styles.bot_text_pc}>
          {bot_text_pc}
        </div>
        <div className={styles.bot_text_tablet}>
          {bot_text_tablet}
        </div>
        <div className={styles.bot_text_mobile}>
          {bot_text_mobile}
        </div>
    </div>
  )
}

export default Introduce;