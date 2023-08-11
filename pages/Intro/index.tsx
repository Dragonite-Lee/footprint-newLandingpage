'use client'

import styles from './intro.module.css'
import bg_intro_pc from '../../public/bg/bg_intro_pc.webp'
import bg_intro_tablet from '../../public/bg/bg_intro_tablet.webp'
import bg_intro_mobile from '../../public/bg/bg_intro_mobile.webp'

import Image from 'next/image';
import Head from 'next/head';
import { setTimeout } from 'timers'

function Intro() {

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
                <meta name="description" content="footprint story - 다양한 분야에 종사하고 있는 선배들의 커리어 성장기와 삶을 이야기에 담아 연재하는 서비스" />
                <link rel="icon" href="public/image/footPrint_favIcon.png" />
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
                <Image src={bg_intro_pc} alt='bg_intro_pc' className={styles.bg_intro_pc} />
                <Image src={bg_intro_tablet} alt='bg_intro_tablet' className={styles.bg_intro_tablet} />
                <Image src={bg_intro_mobile} alt='bg_intro_mobile' className={styles.bg_intro_mobile} />
            </div>
        </>
    )
}

export default Intro;