import styles from './ongoing.module.css'
import Subscribe from '../../components/ongoing/subscribe'
import bg_ongoing_pc from '../../public/bg/bg_ongoing_pc.png'
import bg_ongoing_tablet from '../../public/bg/bg_ongoing_tablet.png'
import bg_ongoing_mobile from '../../public/bg/bg_ongoing_mobile.png'

import Image from 'next/image'

function Ongoing() {
    return (
        <div className={styles.container}>
            <Image src={bg_ongoing_pc} alt='bg_ongoing_pc' className={styles.bg_ongoing_pc} />
            <Image src={bg_ongoing_tablet} alt='bg_ongoing_tablet' className={styles.bg_ongoing_tablet} />
            <Image src={bg_ongoing_mobile} alt='bg_ongoing_mobile' className={styles.bg_ongoing_mobile} />
            <Subscribe />
        </div>
    )
}

export default Ongoing;