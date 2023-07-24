import styles from './introduce.module.css'
import chevron_right from '../../../public/main/chevron-right.png'
import bot_text_mobile from '../../../public/main/bot_text_mobile.png'

import Link from 'next/link';
import Image from 'next/image';

interface IntroduecProps {
  top_text: string
  bot_text: string
}
function Introduce({top_text, bot_text}: IntroduecProps) {
  
  return (
    <div className={styles.container}>
      <Link href="/Ongoing">
        <div className={styles.link_box}>
          <div className={styles.top_text}>{top_text}</div>
          <Image src={chevron_right} alt="화살표" className={styles.chevron} />
        </div>
        <div className={styles.bot_text}>
          {bot_text}
        </div>
        <Image src={bot_text_mobile} alt="bot_text_mobile" className={styles.bot_text_mobile} />
      </Link>
    </div>
  )
}

export default Introduce;