
import type { NextPage } from 'next'
import Head from 'next/head'

import styles from '../styles/Home.module.css'
import Title from '../components/main/title';
import Introduce from '../components/main/introduce';
import Timer from '../components/main/timer';
import Subscribe from '../components/main/subscribe';
import Yellow from '../components/main/yellow';
import But from '../components/main/but';
import Gray from '../components/main/gray';
import Curious from '../components/main/curious';
import Together from '../components/main/together';
import Qna from '../components/main/qna';

const Home: NextPage = () => {
  

  return (
    <div>
      <Head>
        <title>footprint story</title>
        <meta name="description" content="footprint story - 다양한 분야에 종사하고 있는 선배들의 커리어 성장기와 삶을 이야기에 담아 연재하는 서비스" />
        <link rel="icon" href="/metaOg/footprint_favIcon.png" />
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
          <Title />
          <Introduce />
          <Timer />
          <Subscribe />
          <Yellow />
          <But />
          <Gray />
          <Curious />
          <Together />
          <Qna />
      </div>
    
    </div>
  )
}

export default Home
