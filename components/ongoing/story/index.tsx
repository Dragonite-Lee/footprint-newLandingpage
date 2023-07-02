import styles from './story.module.css'
import yellow_top_left from '../../../public/ongoing/z_2_yellow.png'
import yellow_top_right from '../../../public/ongoing/z_1.png'
import yellow_mid_left from '../../../public/ongoing/z_0_left.png'
import yellow_mid_right from '../../../public/ongoing/z_0_right.png'
import blue_bot from '../../../public/ongoing/z_2_blue.png'

import Image from 'next/image';

function Story() {
  
  return (
    <div className={styles.container}>
        <div className={styles.main_text}>
            <Image src={yellow_top_left} alt="story"  className={styles.yellow_top_left}/>
            <Image src={yellow_top_right} alt="story"  className={styles.yellow_top_right}/>
            <Image src={yellow_mid_left} alt="story"  className={styles.yellow_mid_left}/>
            <Image src={yellow_mid_right} alt="story"  className={styles.yellow_mid_right}/>
            <Image src={blue_bot} alt="story"  className={styles.blue_bot}/>
        </div>
    </div>
  )
}

export default Story;