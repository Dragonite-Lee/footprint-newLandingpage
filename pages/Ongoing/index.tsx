'use client'

import styles from './ongoing.module.css'
import Subscribe from '../../components/ongoing/subscribe'
import bg1_pc from '../../public/bg_pc/ongoing1.webp'
import bg2_pc from '../../public/bg_pc/ongoing2.webp'
import bg3_pc from '../../public/bg_pc/ongoing3.webp'
import bg4_pc from '../../public/bg_pc/ongoing4.webp'
import bg5_pc from '../../public/bg_pc/ongoing5.webp'
import bg1_tablet from '../../public/bg_tablet/ongoing1.webp'
import bg2_tablet from '../../public/bg_tablet/ongoing2.webp'
import bg3_tablet from '../../public/bg_tablet/ongoing3.webp'
import bg4_tablet from '../../public/bg_tablet/ongoing4.webp'
import bg5_tablet from '../../public/bg_tablet/ongoing5.webp'
import bg1_mobile from '../../public/bg_mobile/ongoing1.webp'
import bg2_mobile from '../../public/bg_mobile/ongoing2.webp'
import bg3_mobile from '../../public/bg_mobile/ongoing3.webp'
import bg4_mobile from '../../public/bg_mobile/ongoing4.webp'
import bg5_mobile from '../../public/bg_mobile/ongoing5.webp'

import Image from 'next/image'
import Head from 'next/head'
import { setTimeout } from 'timers'

function Ongoing() {

    if (typeof window !== 'undefined') {
        window.onload = function() {
          setTimeout(function() {
            scrollTo(0,0);
          }, 100);
        }
    }

    return (
        <>
            <Head>
                <title>footprint story</title>
                <meta name='viewport' content="width=device-width, initial-scale=1" />
                <meta http-equiv="Expires" content="Mon, 06 Jan 1990 00:00:01 GMT" />
                <meta http-equiv="Expires" content="-1" />
                <meta http-equiv="Pragma" content="no-cache" />
                <meta http-equiv="Cache-Control" content="no-cache" />
                <meta name="description" content="footprint story - 다양한 분야에 종사하고 있는 선배들의 커리어 성장기와 삶을 이야기에 담아 연재하는 서비스" />
                <link rel="icon" href='/image/footPrint_favIcon.png' />
                <meta name='robots' content='all' />
                <meta name='keywords' content='현직자, 직업인, 스토리, 커리어, 취업, 진로, 꿈, 직장' />
                {/* open graph 설정 */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="footprint story" />
                <meta property="og:url" content="https://footprintstory.kr/" />
                <meta property="og:image" content="https://footprintstory.kr/images/image.png" />
                <meta property="og:image:width" content="800" />
                <meta property="og:image:height" content="800" />
                <meta property="og:site_name" content="footprint story" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:image:alt" content="footprint story" />
                <meta property="og:description" content="footprint story - 다양한 분야에 종사하고 있는 선배들의 커리어 성장기와 삶을 이야기에 담아 연재하는 서비스" />
                {/* 트위터 open graph 설정 */}
                <meta name="twitter:title" content="footprint story" /> 
                <meta name="twitter:description" content="footprint story - 다양한 분야에 종사하고 있는 선배들의 커리어 성장기와 삶을 이야기에 담아 연재하는 서비스" /> 
                <meta name="twitter:image" content="https://footprintstory.kr/images/image.png" /> 
            </Head>
            <div className={styles.container}>
                <Image src={bg1_pc} alt='bg_ongoing_pc' className={styles.bg1_pc} />
                <Image src={bg2_pc} alt='bg_ongoing_pc' className={styles.bg2_pc} />
                <Image src={bg3_pc} alt='bg_ongoing_pc' className={styles.bg3_pc} />
                <Image src={bg4_pc} alt='bg_ongoing_pc' className={styles.bg4_pc} />
                <Image src={bg5_pc} alt='bg_ongoing_pc' className={styles.bg5_pc} />
                <Image src={bg1_tablet} alt='bg_ongoing_tablet' className={styles.bg1_tablet} />
                <Image src={bg2_tablet} alt='bg_ongoing_tablet' className={styles.bg2_tablet} />
                <Image src={bg3_tablet} alt='bg_ongoing_tablet' className={styles.bg3_tablet} />
                <Image src={bg4_tablet} alt='bg_ongoing_tablet' className={styles.bg4_tablet} />
                <Image src={bg5_tablet} alt='bg_ongoing_tablet' className={styles.bg5_tablet} />
                <Image src={bg1_mobile} alt='bg_ongoing_mobile' className={styles.bg1_mobile} />
                <Image src={bg2_mobile} alt='bg_ongoing_mobile' className={styles.bg2_mobile} />
                <Image src={bg3_mobile} alt='bg_ongoing_mobile' className={styles.bg3_mobile} />
                <Image src={bg4_mobile} alt='bg_ongoing_mobile' className={styles.bg4_mobile} />
                <Image src={bg5_mobile} alt='bg_ongoing_mobile' className={styles.bg5_mobile} />
                <Subscribe />
            </div>
        </>
        
    )
}

export default Ongoing;