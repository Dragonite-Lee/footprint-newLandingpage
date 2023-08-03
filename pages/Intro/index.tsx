import styles from './intro.module.css'
import bg_intro_pc from '../../public/bg/bg_intro_pc.png'

import Image from 'next/image';

function Intro() {
    return (
        <div className={styles.container}>
           <Image src={bg_intro_pc} alt='bg_intro_pc' className={styles.bg_intro_pc} />
        </div>
    )
}

export default Intro;