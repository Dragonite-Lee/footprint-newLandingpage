import styles from './qna.module.css'

import Link from 'next/link';
import Image from 'next/image';

interface QnaBoxProps {
    title: string
    content: string
}
 
function QnaBox({
    title,
    content
}: QnaBoxProps) {

  return (
      <div className={styles.qna_box}>
        <div className={styles.qna_box_left}>
            <div>
                이미지
            </div>
            <div className={styles.qna_title}>
                {title}
            </div>
        </div>
        <div className={styles.qna_box_right}>

        </div>
      </div>
  )
}

export default QnaBox;