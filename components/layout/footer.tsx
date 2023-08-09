'use client'

import styles from './layout.module.css'
import facebook from '../../public/layout/facebook.png'
import instagram from '../../public/layout/instagram.png'
import footer_left from '../../public/layout/footer_left.png'
import footer_right_bussiness from '../../public/layout/footer_right_bussiness.png'
import footer_right_contact from '../../public/layout/footer_right_contact.png'
import footer_left_img_tablet from '../../public/layout/footer_left_img_tablet.png'
import footer_right_bussiness_tablet from '../../public/layout/footer_right_bussiness_tablet.png'
import footer_right_contact_tablet from '../../public/layout/footer_right_contact_tablet.png'
import instagram_tablet from '../../public/layout/instagram_tablet.png'
import facebook_tablet from '../../public/layout/facebook_tablet.png'
import footer_back from '../../public/layout/footer_back.png'
import footer_front from '../../public/layout/footer_front.png'
import footer_mobile_intro from '../../public/layout/footer_mobile_intro.png'
import footer_mobile_bussiness from '../../public/layout/footer_mobile_bussiness.png'
import mobile_instagram from '../../public/layout/mobile_instagram.png'
import mobile_facebook from '../../public/layout/mobile_facebook.png'

import Image from 'next/image';
import { useState, useRef } from 'react'
 
function Footer() {

  const [footerHome, setFooterHome] = useState<boolean>(false);
  const [footerIntro, setFooterIntro] = useState<boolean>(false);
  const [footerOngoing, setFooterOngoing] = useState<boolean>(false);

  const footer_main = useRef<HTMLDivElement>(null);
  const footer_home = useRef<HTMLDivElement>(null);
  const footer_intro = useRef<HTMLDivElement>(null);
  const footer_ongoing = useRef<HTMLDivElement>(null);

  const footerMobileStateHandler = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target == footer_home.current && footer_main.current) {
      setFooterHome(true);
      footer_main.current.style.display = "none";
    } else if (e.target == footer_intro.current && footer_main.current) {
      setFooterIntro(true);
      footer_main.current.style.display = "none";
    } else if (e.target == footer_ongoing.current && footer_main.current) {
      setFooterOngoing(true);
      footer_main.current.style.display = "none";
    };
  }

  const footerMobileStateBackHandler = () => {
    if (footer_main.current) {
      setFooterHome(false);
      setFooterIntro(false);
      setFooterOngoing(false);
      footer_main.current.style.display = "flex";
    }
  }

  return (
    <>
      <footer className={styles.footer_web}>
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
      <footer className={styles.footer_tablet}>
        <div>
          <Image src={footer_left_img_tablet} className={styles.footer_left_img} alt='footer_left이미지' />
        </div>
        <div className={styles.footer_right}>
          <div className={styles.footer_right_contact}>
            <Image src={footer_right_contact_tablet} className={styles.footer_right_contact_img} alt='footer_right_contact이미지' />
            <Image src={instagram_tablet} className={styles.instagram} alt='instagram이미지' onClick={() => {window.open('https://www.instagram.com/footprint_story/')}} />
            <Image src={facebook_tablet} className={styles.facebook} alt='facebook이미지' onClick={() => {window.open('https://www.facebook.com/footprintcareers?mibextid=ZbWKwL')}} />
          </div>
          <div className={styles.footer_right_bussiness_mobile}>
            <Image src={footer_right_bussiness_tablet} className={styles.footer_right_bussiness_img} alt='footer_right_bussiness이미지' />
          </div>
        </div>
      </footer>
      <footer className={styles.footer_mobile}>
        <div className={styles.footer_main_content} ref={footer_main}>
          <div onClick={(e) => footerMobileStateHandler(e)} className={styles.footer_top}>
            <div className={styles.main_text} ref={footer_home}>
              풋프린트
            </div>
            <Image src={footer_front} className={styles.footer_front} alt='footer_back' />
          </div>
          <div onClick={(e) => footerMobileStateHandler(e)} className={styles.footer_top}>
            <div className={styles.main_text} ref={footer_intro}>
              Contact us
            </div>
            <Image src={footer_front} className={styles.footer_front} alt='footer_back' />
          </div>
          <div onClick={(e) => footerMobileStateHandler(e)} className={styles.footer_top}>
            <div className={styles.main_text} ref={footer_ongoing}>
              협력사
            </div>
            <Image src={footer_front} className={styles.footer_front} alt='footer_back' />
          </div>
        </div>
        {
          footerHome && (
            <div className={styles.sub_back}>
              <div className={styles.sub_back_title} onClick={footerMobileStateBackHandler}>
                <Image src={footer_back} className={styles.footer_back} alt='footer_back' />
                <div className={styles.sub_title}>풋프린트</div>
              </div>
              <Image src={footer_mobile_intro} className={styles.footer_mobile_intro} alt='footer_mobile_intro' />
            </div>
          )
        }
        {
          footerIntro && (
            <div className={styles.sub_back}>
              <div className={styles.sub_back_title} onClick={footerMobileStateBackHandler}>
                <Image src={footer_back} className={styles.footer_back} alt='footer_back' />
                <div className={styles.sub_title}>Contact us</div>
              </div>
              <Image src={mobile_instagram} className={styles.mobile_instagram} alt='mobile_instagram' onClick={() => {window.open('https://www.instagram.com/footprint_story/')}} />
              <Image src={mobile_facebook} className={styles.mobile_facebook} alt='mobile_facebook' onClick={() => {window.open('https://www.facebook.com/footprintcareers?mibextid=ZbWKwL')}} />
            </div>
          )
        }
        {
          footerOngoing && (
            <div className={styles.sub_back}>
              <div className={styles.sub_back_title} onClick={footerMobileStateBackHandler}>
                <Image src={footer_back} className={styles.footer_back} alt='footer_back' />
                <div className={styles.sub_title}>협력사</div>
              </div>
              <Image src={footer_mobile_bussiness} className={styles.footer_mobile_bussiness} alt='footer_mobile_bussiness' />
            </div>
          )
        }
      </footer>
    </>
  )
}

export default Footer;