import styles from './title.module.css'
import title_img from '../../../public/main/title.png'

import Image from 'next/image';

function Title() {
  
  return (
    <div className={styles.title_full_container}>
      <Image src={title_img} alt="titleimg" className={styles.title_full_img} />
    </div>
  )
}

export default Title;