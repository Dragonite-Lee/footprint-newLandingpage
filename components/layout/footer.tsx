import styles from './layout.module.css'
import facebook from '../../public/layout/facebook.png'
import instagram from '../../public/layout/instagram.png'
import footer_left from '../../public/layout/footer_left.png'
import footer_right_bussiness from '../../public/layout/footer_right_bussiness.png'
import footer_right_bussiness_mobile from '../../public/layout/footer_right_bussiness_mobile.png'
import footer_right_contact from '../../public/layout/footer_right_contact.png'

import Image from 'next/image';
 
function Footer() {

  return (
    <>
      <footer className={styles.footer}>
        <div>
            <Image src={footer_left} className={styles.footer_left_img} alt='footer_left이미지' />
        </div>
        <div className={styles.footer_right}>
            <div className={styles.footer_right_contact}>
              <Image src={footer_right_contact} className={styles.footer_right_contact_img} alt='footer_right_contact이미지' />
              <Image src={instagram} className={styles.instagram} alt='instagram이미지' onClick={() => {window.open('https://www.instagram.com/footprint_story/')}} />
              <Image src={facebook} className={styles.facebook} alt='facebook이미지' onClick={() => {window.open('https://www.facebook.com/footprintcareers?mibextid=ZbWKwL')}} />
            </div>
            <div className={styles.footer_right_bussiness}>
              <Image src={footer_right_bussiness} className={styles.footer_right_bussiness_img} alt='footer_right_bussiness이미지' />
            </div>
        </div>
      </footer>
      <footer className={styles.footer_mobile}>
        <div>
          <Image src={footer_left} className={styles.footer_left_img} alt='footer_left이미지' />
        </div>
        <div className={styles.footer_right}>
          <div className={styles.footer_right_contact}>
            <Image src={footer_right_contact} className={styles.footer_right_contact_img} alt='footer_right_contact이미지' />
            <Image src={instagram} className={styles.instagram} alt='instagram이미지' onClick={() => {window.open('https://www.instagram.com/footprint_story/')}} />
            <Image src={facebook} className={styles.facebook} alt='facebook이미지' onClick={() => {window.open('https://www.facebook.com/footprintcareers?mibextid=ZbWKwL')}} />
          </div>
          <div className={styles.footer_right_bussiness_mobile}>
            <Image src={footer_right_bussiness_mobile} className={styles.footer_right_bussiness_mobile} alt='footer_right_bussiness이미지' />
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;