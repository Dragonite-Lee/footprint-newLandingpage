import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>footprint story</title>
        <meta name="description" content="footprint story - 프리미엄 취업/커리어 스토리 연재 서비스" />
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
        <meta property="og:description" content="footprint story - 프리미엄 취업/커리어 스토리 연재 서비스" />
        {/* 트위터 open graph 설정 */}
        <meta name="twitter:title" content="footprint story" /> 
        <meta name="twitter:description" content="footprint story - 프리미엄 취업/커리어 스토리 연재 서비스" /> 
        <meta name="twitter:image" content="https://footprintstory.kr/images/image.png" /> 
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
