import styles from './intro.module.css'
import bg_intro_pc from '../../public/bg/bg_intro_pc.png'
import bg_intro_tablet from '../../public/bg/bg_intro_tablet.png'
import bg_intro_mobile from '../../public/bg/bg_intro_mobile.png'

import Image from 'next/image';

function Intro() {
    return (
        <div className={styles.container}>
           <Image src={bg_intro_pc} alt='bg_intro_pc' className={styles.bg_intro_pc} />
           <Image src={bg_intro_tablet} alt='bg_intro_tablet' className={styles.bg_intro_tablet} />
           <Image src={bg_intro_mobile} alt='bg_intro_mobile' className={styles.bg_intro_mobile} />
        </div>
    )
}

export default Intro;