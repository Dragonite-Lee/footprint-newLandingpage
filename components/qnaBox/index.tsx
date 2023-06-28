'use client'

import styles from './qna.module.css'
import qna_index_down from '../../public/qna/qna_index_img_down.png'
import qna_index_up from '../../public/qna/qna_index_img_up.png'
import chevron_down from '../../public/qna/qna_chevron_down.png'
import chevron_up from '../../public/qna/qna_chevron_up.png'

import { useState } from 'react'
import Image from 'next/image';

interface QnaBoxProps {
    title: string
    content: string
}
 
function QnaBox({
    title,
    content
}: QnaBoxProps) {

  const [qnaToggle, setQnaToggle] = useState(false);

  const qnaToggleHandler = () => {
    setQnaToggle(!qnaToggle)
  };
  console.log(qnaToggle)
  return (
    <div className={styles.qna_box}>
        <div className={styles.qna_title_box} onClick={qnaToggleHandler}>
            <div className={styles.qna_box_left}>
                <div>
                    {
                        qnaToggle 
                        ? <Image src={qna_index_up} alt="qna_index" className={styles.qna_index} />
                        : <Image src={qna_index_down} alt="qna_index" className={styles.qna_index} />
                    }
                </div>
                <div className={styles.qna_title}>
                    {title}
                </div>
            </div>
            <div className={styles.qna_box_right}>
                {
                    qnaToggle
                    ? <Image src={chevron_up} alt="chevron_down" className={styles.chevron} />
                    : <Image src={chevron_down} alt="chevron_down" className={styles.chevron} />
                }
            </div>
        </div>
        {
            qnaToggle && 
            (
                <div className={styles.qna_content_box}>
                    {content}
                </div>
            )
        }
    </div>
      
  )
}

export default QnaBox;