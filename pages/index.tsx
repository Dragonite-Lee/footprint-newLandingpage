'use client'

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef, useState } from "react";

import Logo from '../component/logo'
import QuestionFirst from '../component/question/first'
import styles from '../styles/Home.module.css'

const PageNumber = [
  { pageNum : 1 },
  { pageNum : 2 },
];

const Home: NextPage = () => {
  const [windowObj, setWindowObj] = useState<Window>();
  const [currentPageNum, setCurrentPageNum] = useState<number>(1);
  const totalNum = PageNumber.length;
  const pageRefs = useRef<HTMLDivElement[]>([]); 

  useEffect(() => {
    if (window !== undefined) {
      setWindowObj(window);
    }
  }, [])

  const handleScrollPageChange = () => {
    let scroll = windowObj?.scrollY!;
    // console.log(scroll)
    // console.log(pageRefs.current[2].offsetTop)
    // console.log(windowObj!.outerHeight / 3)
    // console.log(pageRefs.current[2].offsetHeight)
    for (let i = 1; i <= totalNum; i++) {
      if (scroll > pageRefs.current[i].offsetTop - windowObj!.outerHeight / 3 &&
        scroll < pageRefs.current[i].offsetTop - windowObj!.outerHeight / 3 + pageRefs.current[i].offsetHeight
      ) {
        pageRefs.current[i].scrollTo({
          top: windowObj!.innerHeight * i,
          left: 0,
          behavior: 'smooth'
        })
        break;
      }
    }
  };
  // 버튼 클릭
  const handlePointClick = (pageNum: number) => {
    windowObj?.scrollTo({
      top: pageRefs.current[pageNum].offsetTop,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    windowObj?.addEventListener("scroll", handleScrollPageChange);
    return () => {
      windowObj?.removeEventListener("scroll", handleScrollPageChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [windowObj]);

  return (
    <div>
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

      <div>
        <Logo 
          pageNum={PageNumber[0].pageNum}
          window={windowObj!}
          pageRefs={pageRefs}
        />
        <QuestionFirst 
          pageNum={PageNumber[1].pageNum}
          window={windowObj!}
          pageRefs={pageRefs}
        />
      </div>
    
    </div>
  )
}

export default Home
