'use client'

import styles from './qna.module.css'
import chevron_down from '../../../public/qna/qna_chevron_down.png'
import chevron_up from '../../../public/qna/qna_chevron_up.png'

import { useState, useRef, RefObject } from 'react'
import Image from 'next/image';

function Qna() {
  
  const [qnaToggle1, setQnaToggle1] = useState(false);
  const [qnaToggle2, setQnaToggle2] = useState(false);
  const [qnaToggle3, setQnaToggle3] = useState(false);
  const [qnaToggle4, setQnaToggle4] = useState(false);
  const qnaContent1_pc = useRef<HTMLDivElement>(null);
  const qnaContent1_tablet = useRef<HTMLDivElement>(null);
  const qnaContent1_mobile = useRef<HTMLDivElement>(null);
  const qnaContent2_pc = useRef<HTMLDivElement>(null);
  const qnaContent2_tablet = useRef<HTMLDivElement>(null);
  const qnaContent2_mobile = useRef<HTMLDivElement>(null);
  const qnaContent3_pc = useRef<HTMLDivElement>(null);
  const qnaContent3_tablet = useRef<HTMLDivElement>(null);
  const qnaContent3_mobile = useRef<HTMLDivElement>(null);
  const qnaContent4_pc = useRef<HTMLDivElement>(null);
  const qnaContent4_tablet = useRef<HTMLDivElement>(null);
  const qnaContent4_mobile = useRef<HTMLDivElement>(null);

  const qnaToggleHandler1 = () => {
    setQnaToggle1(!qnaToggle1);
    if (window) {
      if (window.innerWidth >= 1080) {
        if (qnaContent1_pc.current) {
          slideToggle(qnaContent1_pc, 300);
        }
      } else if (window.innerWidth >= 588) {
        if (qnaContent1_tablet.current) {
          slideToggle(qnaContent1_tablet, 300);
        }
      } else {
        if (qnaContent1_mobile.current) {
          slideToggle(qnaContent1_mobile, 300);
        }
      }
    }
  };
  const qnaToggleHandler2 = () => {
    setQnaToggle2(!qnaToggle2)
    if (window) {
      if (window.innerWidth >= 1080) {
        if (qnaContent2_pc.current) {
          slideToggle(qnaContent2_pc, 300);
        }
      } else if (window.innerWidth >= 588) {
        if (qnaContent2_tablet.current) {
          slideToggle(qnaContent2_tablet, 300);
        }
      } else {
        if (qnaContent2_mobile.current) {
          slideToggle(qnaContent2_mobile, 300);
        }
      }
    }
  };
  const qnaToggleHandler3 = () => {
    setQnaToggle3(!qnaToggle3)
    if (window) {
      if (window.innerWidth >= 1080) {
        if (qnaContent3_pc.current) {
          slideToggle(qnaContent3_pc, 300);
        }
      } else if (window.innerWidth >= 588) {
        if (qnaContent3_tablet.current) {
          slideToggle(qnaContent3_tablet, 300);
        }
      } else {
        if (qnaContent3_mobile.current) {
          slideToggle(qnaContent3_mobile, 300);
        }
      }
    }
  };
  const qnaToggleHandler4 = () => {
    setQnaToggle4(!qnaToggle4)
    if (window) {
      if (window.innerWidth >= 1080) {
        if (qnaContent4_pc.current) {
          slideToggle(qnaContent4_pc, 300);
        }
      } else if (window.innerWidth >= 588) {
        if (qnaContent4_tablet.current) {
          slideToggle(qnaContent4_tablet, 300);
        }
      } else {
        if (qnaContent4_mobile.current) {
          slideToggle(qnaContent4_mobile, 300);
        }
      }
    }
  };

  let slideUp = (target: RefObject<HTMLDivElement>, duration=300) => {
    if (target.current) {
      target.current.style.transitionProperty = 'height, margin, padding';
      target.current.style.transitionDuration = duration + 'ms';
      target.current.style.boxSizing = 'border-box';
      target.current.style.height = target.current.offsetHeight + 'px';
      target.current.offsetHeight;
      target.current.style.overflow = 'hidden';
      target.current.style.height = '0';
      target.current.style.paddingTop = '0';
      target.current.style.paddingBottom = '0';
      target.current.style.marginTop = '0';
      target.current.style.marginBottom = '0';
    };
    window.setTimeout( () => {
      if (target.current) {
        target.current.style.display = 'none';
        target.current.style.removeProperty('height');
        target.current.style.removeProperty('padding-top');
        target.current.style.removeProperty('padding-bottom');
        target.current.style.removeProperty('margin-top');
        target.current.style.removeProperty('margin-bottom');
        target.current.style.removeProperty('overflow');
        target.current.style.removeProperty('transition-duration');
        target.current.style.removeProperty('transition-property');
      }
    }, 100);
    

  }

  let slideDown = (target: RefObject<HTMLDivElement>, duration=300) => {
    if (target.current) {
      target.current.style.removeProperty('display');
    let display = window.getComputedStyle(target.current).display;

    if (display === 'none')
      display = 'block';
      // target.current.style.display = 'none';
    target.current.style.display = display;
    let height = target.current.offsetHeight;
    target.current.style.overflow = 'hidden';
    target.current.style.height = '0';
    target.current.style.paddingTop = '0';
    target.current.style.paddingBottom = '0';
    target.current.style.marginTop = '0';
    target.current.style.marginBottom = '0';
    target.current.offsetHeight;
    target.current.style.boxSizing = 'border-box';
    target.current.style.transitionProperty = "height, margin, padding";
    target.current.style.transitionDuration = duration + 'ms';
    target.current.style.height = height + 'px';
    target.current.style.removeProperty('padding-top');
    target.current.style.removeProperty('padding-bottom');
    target.current.style.removeProperty('margin-top');
    target.current.style.removeProperty('margin-bottom');
    }
    window.setTimeout( () => {
      if (target.current) {
        target.current.style.removeProperty('height');
        target.current.style.removeProperty('overflow');
        target.current.style.removeProperty('transition-duration');
        target.current.style.removeProperty('transition-property');
      }
    }, 100);
  }
   let slideToggle = (target: RefObject<HTMLDivElement>, duration = 300) => {
    if (target.current) {
      if (window.getComputedStyle(target.current).display === 'none') {
        return slideDown(target, duration);
      } else {
        return slideUp(target, duration);
      }
    }
  }
  
  return (
    <div className={styles.container}>
        <div className={styles.qna_bar}></div>
        <div className={styles.qna_text}>
            Q<span className={styles.qna_text_small}>&</span>A
        </div>
        <div className={styles.qna_box}>
            <div className={styles.qna_small_box}>
              <div className={styles.qna_title_box} onClick={qnaToggleHandler1}>
                  <div className={styles.qna_box_left}>
                      <div className={styles.qna_title}>
                        Q1. 뉴스레터를 구독하기 위한 요금은 얼마인가요?
                      </div>
                  </div>
                  <div className={styles.qna_box_right}>
                      {
                          qnaToggle1
                          ? <Image src={chevron_up} alt="chevron_down" className={styles.chevron} />
                          : <Image src={chevron_down} alt="chevron_down" className={styles.chevron} />
                      }
                  </div>
              </div>
                  <div className={styles.qna_content_box_pc}  ref={qnaContent1_pc} >
                    <span className={styles.bold}>한 저자의 스토리는 9,800 원</span>에 구독 가능하며 <span className={styles.bold}>두 달간 연재</span>됩니다. <br />
                    한 저자의 스토리에 담긴 모든 에피소드를 <span className={styles.bold}>매주 수요일, 금요일 오전 8시</span>에 여러분의 메일로 전달해드릴게요.
                  </div>
                  <div className={styles.qna_content_box_tablet} ref={qnaContent1_tablet} >
                    <span className={styles.bold}>한 저자의 스토리는 9,800 원</span>에 구독 가능하며 <span className={styles.bold}>두 달간 연재</span>됩니다. <br />
                    한 저자의 스토리에 담긴 모든 에피소드를 <span className={styles.bold}>매주 수요일, 금요일 오전 8시</span>에 <br />
                    여러분의 메일로 전달해드릴게요.
                  </div>
                  <div className={styles.qna_content_box_mobile} ref={qnaContent1_mobile}>
                    <span className={styles.bold}>한 저자의 스토리는 9,800 원</span>에 구독 가능하며  
                    <span className={styles.bold}> 두 달간 연재</span>됩니다. 
                    한 저자의 스토리에 담긴 모든 에피소드를 
                    <span className={styles.bold}> 매주 수요일, 금요일 오전 8시</span>에
                    여러분의 메일로 전달해드릴게요.
                  </div>
            </div>
            <div className={styles.qna_small_box}>
              <div className={styles.qna_title_box} onClick={qnaToggleHandler2}>
                  <div className={styles.qna_box_left}>
                      <div className={styles.qna_title}>
                        Q2. 한 저자의 뉴스레터의 분량은 얼마인가요?
                      </div>
                  </div>
                  <div className={styles.qna_box_right}>
                      {
                          qnaToggle2
                          ? <Image src={chevron_up} alt="chevron_down" className={styles.chevron} />
                          : <Image src={chevron_down} alt="chevron_down" className={styles.chevron} />
                      }
                  </div>
              </div>
                <div className={styles.qna_content_box_pc} ref={qnaContent2_pc} >
                  저자의 스토리는 약 <span className={styles.bold}>16 개의 에피소드</span>로 구성되어 있으며, 각 에피소드는 <span className={styles.bold}>종이책 분량으로 13 - 20p 분량</span>입니다.
                </div>
                <div className={styles.qna_content_box_tablet} ref={qnaContent2_tablet} >
                  저자의 스토리는 약 <span className={styles.bold}>16 개의 에피소드</span>로 구성되어 있으며, <br />
                  각 에피소드는 <span className={styles.bold}>종이책 분량으로 13 - 20p 분량</span>입니다.
                </div>
                <div className={styles.qna_content_box_mobile} ref={qnaContent2_mobile} >
                  저자의 스토리는 약 <span className={styles.bold}>16 개의 에피소드</span>로 구성되어 
                  있으며,<br /> 각 에피소드는 <span className={styles.bold}>종이책 분량으로 13 - 20p 분량</span>입니다.
                </div>
            </div>
            <div className={styles.qna_small_box}>
              <div className={styles.qna_title_box} onClick={qnaToggleHandler3}>
                  <div className={styles.qna_box_left}>
                      <div className={styles.qna_title}>
                        Q3. 구독을 했는데 뉴스레터가 오지 않아요.
                      </div>
                  </div>
                  <div className={styles.qna_box_right}>
                      {
                          qnaToggle3
                          ? <Image src={chevron_up} alt="chevron_down" className={styles.chevron} />
                          : <Image src={chevron_down} alt="chevron_down" className={styles.chevron} />
                      }
                  </div>
              </div>
                <div className={styles.qna_content_box_pc} ref={qnaContent3_pc} >
                뉴스레터는 스팸메일함, 혹은 프로모션함으로 자동 분류될 수도 있습니다. 스팸메일함에서 footprint story를 찾았다면 <br />
                <span className={styles.bold}>해당 메일 주소(contact@footprintstory.kr)를 주소록에 친구 추가</span>해주세요.
                </div>
                <div className={styles.qna_content_box_tablet} ref={qnaContent3_tablet} >
                뉴스레터는 스팸메일함, 혹은 프로모션함으로 자동 분류될 수도 있습니다. <br />
                스팸메일함에서 footprint story를 찾았다면 <br />
                <span className={styles.bold}>해당 메일 주소(contact@footprintstory.kr)를 </span>
                <span className={styles.bold}>주소록에 친구 추가해주세요.</span>
                </div>
                <div className={styles.qna_content_box_mobile} ref={qnaContent3_mobile} >
                뉴스레터는 스팸메일함, 혹은 프로모션함으로 
                자동 분류될 수도 있습니다. 스팸메일함에서 
                footprint story를 찾았다면 <span className={styles.bold}> 해당 메일 주소(contact@footprintstory.kr)를</span><span className={styles.bold}> 주소록에 친구 추가해주세요.</span>
                </div>
            </div>
            <div className={styles.qna_small_box}>
              <div className={styles.qna_title_box} onClick={qnaToggleHandler4}>
                  <div className={styles.qna_box_left}>
                      <div className={styles.qna_title}>
                        Q4. 지나간 저자들의 스토리는 어디에서 읽을 수 있나요?
                      </div>
                  </div>
                  <div className={styles.qna_box_right}>
                      {
                          qnaToggle4
                          ? <Image src={chevron_up} alt="chevron_down" className={styles.chevron} />
                          : <Image src={chevron_down} alt="chevron_down" className={styles.chevron} />
                      }
                  </div>
              </div>
                <div className={styles.qna_content_box_pc} ref={qnaContent4_pc} >
                  저희는 현재 아카이브를 따로 제공하고 있지 않습니다.<br />
                  그래서 여러분께 발행된 저자 분들의 스토리는 <span className={styles.bold}>메일 보관함에 따로 저장해 주셔야 합니다.</span><br />
                  뉴스레터로 발행되었던 지난 저자들의 스토리는 추후 메인 서비스가 출시되면 구매할 수 있는<br />
                  <span className={styles.bold}>전자책으로 업로드 될 예정이니, </span>메인 서비스가 출시될 때까지 조금만 기다려 주세요!
                </div>
                <div className={styles.qna_content_box_tablet} ref={qnaContent4_tablet} >
                  저희는 현재 아카이브를 따로 제공하고 있지 않습니다.<br />
                  그래서 여러분께 발행된 저자 분들의 스토리는 <span className={styles.bold}>메일 보관함에 따로 저장해 주셔야 합니다.</span><br />
                  뉴스레터로 발행되었던 지난 저자들의 스토리는 추후 메인 서비스가 출시되면 <br />
                  구매할 수 있는 <span className={styles.bold}>전자책으로 업로드 될 예정이니,</span> 메인 서비스가 출시될 때까지<br />
                  조금만 기다려 주세요!
                </div>
                <div className={styles.qna_content_box_mobile} ref={qnaContent4_mobile} >
                  저희는 현재 아카이브를 따로 제공하고 있지 않습니다. 그래서 여러분께 발행된 저자 분들의 스토리는 <span className={styles.bold}> 메일 보관함에 따로 저장해 주셔야 합니다. </span>뉴스레터로 발행되었던 지난 저자들의 스토리는
                  추후 메인 서비스가 출시되면 구매할 수 있는 <span className={styles.bold}>전자책으로</span> <span className={styles.bold}>업로드
                  될 예정이니, </span>메인 서비스가 출시될 때까지 조금만 기다려 주세요! 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Qna;