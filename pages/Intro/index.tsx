'use client'

import styles from './intro.module.css'

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
                <Image src='/bg_pc/intro1.png' alt='bg_intro_pc' className={styles.bg1_pc} width={1920} height={1925}/>
                <Image src='/bg_pc/intro2.png' alt='bg_intro_pc' className={styles.bg2_pc} width={1920} height={1925}/>
                <Image src='/bg_pc/intro3.png' alt='bg_intro_pc' className={styles.bg3_pc} width={1920} height={1925}/>
                <Image src='/bg_pc/intro4.png' alt='bg_intro_pc' className={styles.bg4_pc} width={1920} height={1925}/>
                <Image src='/bg_tablet/intro1.png' alt='bg_intro_tablet' className={styles.bg1_tablet} width={768} height={913}/>
                <Image src='/bg_tablet/intro2.png' alt='bg_intro_tablet' className={styles.bg2_tablet} width={768} height={913}/>
                <Image src='/bg_tablet/intro3.png' alt='bg_intro_tablet' className={styles.bg3_tablet} width={768} height={913}/>
                <Image src='/bg_tablet/intro4.png' alt='bg_intro_tablet' className={styles.bg4_tablet} width={768} height={913}/>
                <Image src='/bg_mobile/intro1.png' alt='bg_intro_mobile' className={styles.bg1_mobile}  width={360} height={1083}/>
                <Image src='/bg_mobile/intro2.png' alt='bg_intro_mobile' className={styles.bg2_mobile}  width={360} height={1083}/>
                <Image src='/bg_mobile/intro3.png' alt='bg_intro_mobile' className={styles.bg3_mobile}  width={360} height={1083}/>
                <Image src='/bg_mobile/intro4.png' alt='bg_intro_mobile' className={styles.bg4_mobile}  width={360} height={1084}/>
            </div>
        </>
    )
}

export default Intro;