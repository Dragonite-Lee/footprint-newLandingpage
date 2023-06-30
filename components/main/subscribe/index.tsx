'use client'

import styles from './subscribe.module.css'
import mainlogo from '../../../public/main/title_logo.png'
import agree_no from '../../../public/main/agree_no.png'
import agree_yes from '../../../public/main/agree_yes.png'

import Image from 'next/image';
import { useState } from 'react'

function Subscribe() {

  const [agreePrivate, setAgreePrivate] = useState<boolean>(false);
  const [agreeAdver, setAgreeAdver] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');

  const agreePrivateHandler = () => {
    setAgreePrivate(!agreePrivate)
  }
  const agreeAdverHandler = () => {
    setAgreeAdver(!agreeAdver)
  }
  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }
  const nicknameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value)
  }

  return (
    <div className={styles.container}>
      <div className={styles.subscribe_box}>
        <input type="email" placeholder="이메일 주소" className={styles.input} value={email} onChange={emailHandler} />
        <input type="text" placeholder="닉네임" className={styles.input} value={nickname} onChange={nicknameHandler} />
        <div className={styles.agree} >
            {
                agreePrivate 
                ? <Image src={agree_yes} alt='agree' className={styles.agree_check} onClick={() => agreePrivateHandler()} />
                : <Image src={agree_no} alt='agree' className={styles.agree_check} onClick={() => agreePrivateHandler()} />
            }
            <div className={styles.agree_text}>
                <span className='font_extrabold'>개인정보 수집</span> 및 <span className='font_extrabold'>이용</span>에 동의합니다.
            </div>
        </div>
        <div className={styles.agree} >
            {
                agreeAdver 
                ? <Image src={agree_yes} alt='agree' className={styles.agree_check} onClick={() => agreeAdverHandler()} />
                : <Image src={agree_no} alt='agree' className={styles.agree_check} onClick={() => agreeAdverHandler()} />
            }
            <div className={styles.agree_text}>
                <span className='font_extrabold'>광고성 정보 수신</span>에 동의합니다.
            </div>
        </div>
        <div className={styles.button_box}>
            <button className={styles.btn}>
                뉴스레터 구독하기
            </button>
            <div className={styles.button_text}>
                <span className='font_bold'>월 4900원 / 첫달 무료이용</span><br/>
                반복결제, 언제든지 취소 가능
            </div>
        </div>
      </div>
      <div className={styles.logo_box}>
        <Image src={mainlogo} alt="footprint logo"  className={styles.logo_img} />
      </div>
    </div>
  )
}

export default Subscribe;