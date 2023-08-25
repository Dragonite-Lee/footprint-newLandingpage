'use client'

import styles from './intro.module.css'
import bg_pc_intro1 from '../../public/bg_pc/intro1_pc.png'
import bg_pc_intro2 from '../../public/bg_pc/intro2_pc.png'
import bg_pc_intro3 from '../../public/bg_pc/intro3_pc.png'
import bg_pc_intro4 from '../../public/bg_pc/intro4_pc.png'
import bg_tablet_intro1 from '../../public/bg_tablet/intro1_tablet.png'
import bg_tablet_intro2 from '../../public/bg_tablet/intro2_tablet.png'
import bg_tablet_intro3 from '../../public/bg_tablet/intro3_tablet.png'
import bg_tablet_intro4 from '../../public/bg_tablet/intro4_tablet.png'
import bg_mobile_intro1 from '../../public/bg_mobile/intro1.png'
import bg_mobile_intro2 from '../../public/bg_mobile/intro2.png'
import bg_mobile_intro3 from '../../public/bg_mobile/intro3.png'
import bg_mobile_intro4 from '../../public/bg_mobile/intro4.png'

import Image from 'next/image';
import Head from 'next/head';
import { setTimeout, clearTimeout } from 'timers'

function Intro() {

  function timer() {
    scrollTo(0,0);
  };
  if (typeof window !== 'undefined') {
    window.onload = function() {
      let onloadTimer = setTimeout(timer, 100);
      clearTimeout(onloadTimer);
    }
  };

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
              <link rel="icon" href='https://server.footprintstory.kr/images/favicon.png' />
              <meta name='robots' content='all' />
              <meta name='keywords' content='현직자, 직업인, 스토리, 커리어, 취업, 진로, 꿈, 직장' />
              {/* open graph 설정 */}
              <meta property="og:type" content="website" />
              <meta property="og:title" content="footprint story" />
              <meta property="og:url" content="https://server.footprintstory.kr/" />
              <meta property="og:image" content="https://server.footprintstory.kr/images/shareLogo.png" />
              <meta property="og:image:width" content="800" />
              <meta property="og:image:height" content="800" />
              <meta property="og:site_name" content="footprint story" />
              <meta property="og:locale" content="en_US" />
              <meta property="og:image:alt" content="footprint story" />
              <meta property="og:description" content="footprint story - 다양한 분야에 종사하고 있는 선배들의 커리어 성장기와 삶을 이야기에 담아 연재하는 서비스" />
              {/* 트위터 open graph 설정 */}
              <meta name="twitter:title" content="footprint story" /> 
              <meta name="twitter:description" content="footprint story - 다양한 분야에 종사하고 있는 선배들의 커리어 성장기와 삶을 이야기에 담아 연재하는 서비스" /> 
              <meta name="twitter:image" content="https://server.footprintstory.kr/images/shareLogo.png" /> 
            </Head>
            <div className={styles.container}>
                <Image src={bg_pc_intro1} alt='bg_intro_pc' className={styles.bg1_pc} width={1920} height={1925}/>
                <Image src={bg_pc_intro2} alt='bg_intro_pc' className={styles.bg2_pc} width={1920} height={1925}/>
                <Image src={bg_pc_intro3} alt='bg_intro_pc' className={styles.bg3_pc} width={1920} height={1925}/>
                <Image src={bg_pc_intro4} alt='bg_intro_pc' className={styles.bg4_pc} width={1920} height={1925}/>
                <Image src={bg_tablet_intro1} alt='bg_intro_tablet' className={styles.bg1_tablet} width={768} height={913}/>
                <Image src={bg_tablet_intro2} alt='bg_intro_tablet' className={styles.bg2_tablet} width={768} height={913}/>
                <Image src={bg_tablet_intro3} alt='bg_intro_tablet' className={styles.bg3_tablet} width={768} height={913}/>
                <Image src={bg_tablet_intro4} alt='bg_intro_tablet' className={styles.bg4_tablet} width={768} height={913}/>
                <Image src={bg_mobile_intro1} alt='bg_intro_mobile' className={styles.bg1_mobile}  width={360} height={1083}/>
                <Image src={bg_mobile_intro2} alt='bg_intro_mobile' className={styles.bg2_mobile}  width={360} height={1083}/>
                <Image src={bg_mobile_intro3} alt='bg_intro_mobile' className={styles.bg3_mobile}  width={360} height={1083}/>
                <Image src={bg_mobile_intro4} alt='bg_intro_mobile' className={styles.bg4_mobile}  width={360} height={1084}/>
            </div>
        </>
    )
}

export default Intro;