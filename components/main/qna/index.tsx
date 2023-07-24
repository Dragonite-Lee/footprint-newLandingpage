'use client'

import styles from './qna.module.css'
import qna from '../../../public/main/qna.png'
import q1 from '../../../public/main/q1.png'
import q2 from '../../../public/main/q2.png'
import q3 from '../../../public/main/q3.png'
import q4 from '../../../public/main/q4.png'
import a1 from '../../../public/main/a1.png'
import a2 from '../../../public/main/a2.png'
import a3 from '../../../public/main/a3.png'
import a4 from '../../../public/main/a4.png'
import qna_index_down from '../../../public/qna/qna_index_img_down.png'
import qna_index_up from '../../../public/qna/qna_index_img_up.png'
import chevron_down from '../../../public/qna/qna_chevron_down.png'
import chevron_up from '../../../public/qna/qna_chevron_up.png'

import { useState } from 'react'
import Image from 'next/image';

function Qna() {
  
  const [qnaToggle1, setQnaToggle1] = useState(false);
  const [qnaToggle2, setQnaToggle2] = useState(false);
  const [qnaToggle3, setQnaToggle3] = useState(false);
  const [qnaToggle4, setQnaToggle4] = useState(false);

  const qnaToggleHandler1 = () => {
    setQnaToggle1(!qnaToggle1)
  };
  const qnaToggleHandler2 = () => {
    setQnaToggle2(!qnaToggle2)
  };
  const qnaToggleHandler3 = () => {
    setQnaToggle3(!qnaToggle3)
  };
  const qnaToggleHandler4 = () => {
    setQnaToggle4(!qnaToggle4)
  };

  return (
    <div className={styles.container}>
        <div className={styles.qna_bar}></div>
        <div className={styles.qna_text}>
            Q<span className={styles.qna_text_small}>&</span>A
        </div>
        <Image src={qna} alt="qna제목" className={styles.qna_img_text} />
        <div className={styles.qna_box}>
            <div className={styles.qna_small_box}>
              <div className={styles.qna_title_box} onClick={qnaToggleHandler1}>
                  <div className={styles.qna_box_left}>
                      <div>
                          {
                              qnaToggle1
                              ? <Image src={qna_index_up} alt="qna_index" className={styles.qna_index} />
                              : <Image src={qna_index_down} alt="qna_index" className={styles.qna_index} />
                          }
                      </div>
                      <div className={styles.qna_title}>
                        Q1. 뉴스레터를 구독하기 위한 요금은 얼마인가요?
                      </div>
                      <Image src={q1} alt="qna_img_title" className={styles.qna_img_title1} />
                  </div>
                  <div className={styles.qna_box_right}>
                      {
                          qnaToggle1
                          ? <Image src={chevron_up} alt="chevron_down" className={styles.chevron} />
                          : <Image src={chevron_down} alt="chevron_down" className={styles.chevron} />
                      }
                  </div>
              </div>
              {
                  qnaToggle1 && 
                  (
                      <>
                          <div className={styles.qna_content_box}>
                            한 저자의 스토리는 9,800 원에 구독 가능하며 두 달간 연재됩니다. 한 저자의 스토리에 담긴 모든 에피소드를 매주 수요일, 금요일 오전 8시에 여러분의 메일로 전달해드릴게요.
                          </div>
                          <Image src={a1} alt="qna_content" className={styles.qna_content_padding} />
                      </>
                  )
              }
            </div>
            <div className={styles.qna_small_box}>
              <div className={styles.qna_title_box} onClick={qnaToggleHandler2}>
                  <div className={styles.qna_box_left}>
                      <div>
                          {
                              qnaToggle2 
                              ? <Image src={qna_index_up} alt="qna_index" className={styles.qna_index} />
                              : <Image src={qna_index_down} alt="qna_index" className={styles.qna_index} />
                          }
                      </div>
                      <div className={styles.qna_title}>
                        Q2. 한 저자의 뉴스레터의 분량은 얼마인가요?'
                      </div>
                      <Image src={q2} alt="qna_img_title" className={styles.qna_img_title2} />
                  </div>
                  <div className={styles.qna_box_right}>
                      {
                          qnaToggle2
                          ? <Image src={chevron_up} alt="chevron_down" className={styles.chevron} />
                          : <Image src={chevron_down} alt="chevron_down" className={styles.chevron} />
                      }
                  </div>
              </div>
              {
                  qnaToggle2 && 
                  (
                      <>
                          <div className={styles.qna_content_box}>
                            저자의 스토리는 약 16 개의 에피소드로 구성되어 있으며, 각 에피소드는 종이책 분량으로 13 - 20p 분량입니다.
                          </div>
                          <Image src={a2} alt="qna_content" className={styles.qna_content_padding} />
                      </>
                  )
              }
            </div>
            <div className={styles.qna_small_box}>
              <div className={styles.qna_title_box} onClick={qnaToggleHandler3}>
                  <div className={styles.qna_box_left}>
                      <div>
                          {
                              qnaToggle3 
                              ? <Image src={qna_index_up} alt="qna_index" className={styles.qna_index} />
                              : <Image src={qna_index_down} alt="qna_index" className={styles.qna_index} />
                          }
                      </div>
                      <div className={styles.qna_title}>
                        Q3. 구독을 했는데 뉴스레터가 오지 않아요.
                      </div>
                      <Image src={q3} alt="qna_img_title" className={styles.qna_img_title3} />
                  </div>
                  <div className={styles.qna_box_right}>
                      {
                          qnaToggle3
                          ? <Image src={chevron_up} alt="chevron_down" className={styles.chevron} />
                          : <Image src={chevron_down} alt="chevron_down" className={styles.chevron} />
                      }
                  </div>
              </div>
              {
                  qnaToggle3 && 
                  (
                      <>
                          <div className={styles.qna_content_box}>
                          뉴스레터는 스팸메일함, 혹은 프로모션함으로 자동 분류될 수도 있습니다. 스팸메일함에서 footprint story를 찾았다면 해당 메일 주소(contact@footprintstory.kr)를 주소록에 친구 추가해주세요.
                          </div>
                          <Image src={a3} alt="qna_content" className={styles.qna_content} />
                      </>
                  )
              }
            </div>
            <div className={styles.qna_small_box}>
              <div className={styles.qna_title_box} onClick={qnaToggleHandler4}>
                  <div className={styles.qna_box_left}>
                      <div>
                          {
                              qnaToggle4 
                              ? <Image src={qna_index_up} alt="qna_index" className={styles.qna_index} />
                              : <Image src={qna_index_down} alt="qna_index" className={styles.qna_index} />
                          }
                      </div>
                      <div className={styles.qna_title}>
                        Q4. 지나간 저자들의 스토리는 어디에서 읽을 수 있나요?
                      </div>
                      <Image src={q4} alt="qna_img_title" className={styles.qna_img_title4} />
                  </div>
                  <div className={styles.qna_box_right}>
                      {
                          qnaToggle4
                          ? <Image src={chevron_up} alt="chevron_down" className={styles.chevron} />
                          : <Image src={chevron_down} alt="chevron_down" className={styles.chevron} />
                      }
                  </div>
              </div>
              {
                  qnaToggle4 && 
                  (
                      <>
                          <div className={styles.qna_content_box}>
                            저희는 현재 아카이브를 따로 제공하고 있지 않습니다. 그래서 여러분께 발행된 저자 분들의 스토리는 메일 보관함에 따로 저장해 주셔야 합니다. 그리고 뉴스레터로 발행되었던 지난 저자들의 스토리는 추후 메인 서비스가 출시되면 구매할 수 있는 전자책으로 업로드 될 예정이니, 메인 서비스가 출시될 때까지 조금만 기다려 주세요!
                          </div>
                          <Image src={a4} alt="qna_content" className={styles.qna_content} />
                      </>
                  )
              }
            </div>
        </div>
    </div>
  )
}

export default Qna;