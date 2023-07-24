'use client'

import styles from './subscribe.module.css'
import mainlogo from '../../../public/main/title_logo.png'
import agree_no from '../../../public/main/agree_no.png'
import agree_yes from '../../../public/main/agree_yes.png'
import privateImg from '../../../public/ongoing/private.png'
import adverImg from '../../../public/ongoing/adver.png'
import btn_text_img from '../../../public/ongoing/btn_text.png'
import btn_inner_img from '../../../public/ongoing/btn_inner_text.png'
import modal_text from '../../../public/ongoing/modal_text.png'
import modal_kakao from '../../../public/ongoing/modal_kakao.png'
import modal_twitter from '../../../public/ongoing/modal_twitter.png'
import modal_facebook from '../../../public/ongoing/modal_facebook.png'
import modal_linkcopy from '../../../public/ongoing/modal_linkcopy.png'
import modal_close from '../../../public/ongoing/modal_close.png'

import Image from 'next/image'
import { usePathname } from "next/navigation"
import { FacebookShareButton, TwitterShareButton} from 'next-share'
import axios from 'axios'
import { useEffect, useState } from 'react'

interface SendData {
  email: string;
  privateAgree: boolean
  adverAgree: boolean
}

function Subscribe() {

  const [agreePrivate, setAgreePrivate] = useState<boolean>(false);
  const [agreeAdver, setAgreeAdver] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [emailValid, setEmailValid] = useState<boolean>(false);
  const [completeModal, setCompleteModal] = useState<boolean>(false);
  let url: string = usePathname();

  const sendData: SendData = {
    "email" : email,
    "privateAgree" : agreePrivate,
    "adverAgree" : agreeAdver
  }

  axios.defaults.withCredentials = true; // withCredentials 전역 설정

  const agreePrivateHandler = () => {
    setAgreePrivate(!agreePrivate)
  }
  const agreeAdverHandler = () => {
    setAgreeAdver(!agreeAdver)
  }
  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const closeCompleteModal = () => {
    setCompleteModal(false);
  }

  // kakao 공유하기 함수
    const handleKakaoButton = () => {
        window.Kakao.Share.sendScrap({
            requestUrl: url,
        });
    };

    // 클립보드 복사 alert
    const copyURL = () => {
      let currentUrl = window.document.location.href;
      let t = document.createElement("textarea");
      document.body.appendChild(t);
      t.value = currentUrl;
      t.select();
      document.execCommand("copy");
      document.body.removeChild(t);
    
      alert("링크가 복사되었습니다.");
    };

  // *이메일과 수신동의 백단에 보내주고 카운트다운 시작
  const emailOkCountDown = async () => {
    if(emailValid === false) {
        alert('이메일 형식을 확인해주세요');
    } else if (agreePrivate === false) {
      alert('뉴스레터 발송을 위한 최소한의 개인정보를 수집하며, 동의하지 않을 경우 구독 서비스를 이용할 수 없습니다.')
    } else if (agreeAdver === false) {
      alert('뉴스레터에서 광고성 정보만 따로 보내는 것이 어렵기 때문에, 동의하지 않을 경우 서비스 이용이 제한될 수 있습니다.')
    } else {
        //api전송 email, agree
        await axios.post(`https://footprintstory.kr/api/members`,JSON.stringify(sendData),{
            headers: {
                "Content-Type": `application/json`,
            }
        })
        .then(async function(res) {
            await setCompleteModal(true);
            console.log(res);
        })
        .catch((err) => {
            alert('구독에 실패했어요!! \n다시 입력해주세요.');
            console.log(err);
        })
    }
}

  useEffect(() => {
    const regexEmail = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if(regexEmail.test(email)) {
        setEmailValid(true);
    } else {
        setEmailValid(false);
    }
    console.log(emailValid);
  },[email]);

  useEffect(()=>{
    const setScreenSize = () => {
      let vh = window.innerHeight * 0.01;
    
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    setScreenSize();
  },[])

  return (
    <>
    <div className={styles.container}>
      <div className={styles.subscribe_box}>
        <input type="email" placeholder="이메일 주소" className={styles.input} value={email} onChange={emailHandler} />
        <div className={styles.agree} >
            {
                agreePrivate 
                ? <Image src={agree_yes} alt='agree' className={styles.agree_check} onClick={() => agreePrivateHandler()} />
                : <Image src={agree_no} alt='agree' className={styles.agree_check} onClick={() => agreePrivateHandler()} />
            }
            <div className={styles.agree_text}>
                <span className='font_extrabold'>개인정보 수집</span> 및 <span className='font_extrabold'>이용</span>에 동의합니다.
            </div>
            <Image src={privateImg} alt='privateImg' className={styles.privateImg} />
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
            <Image src={adverImg} alt='adverImg' className={styles.adverImg} />
        </div>
        <div className={styles.button_box}>
            <button className={styles.btn} onClick={emailOkCountDown}>
                뉴스레터 구독하기
            </button>
            <button className={styles.btn_mobile}>
              <Image src={btn_inner_img} alt='btn_inner_img' className={styles.btn_inner_img} />
            </button>
            <div className={styles.button_text}>
                <span className='font_bold'>2달간의 스토리 제공 9800원<br/>
                / 프롤로그 무료 이용 가능</span>
            </div>
            <Image src={btn_text_img} alt='btn_text_img' className={styles.btn_text_img} />
        </div>
      </div>
      <div className={styles.logo_box}>
        <Image src={mainlogo} alt="footprint logo"  className={styles.logo_img} />
      </div>
    </div>
    {
      completeModal && 
        (
          <div className={styles.BlackModalContainer}>
            <div className={styles.modalContainer}>
            <div className={styles.modal_top}>
              <Image src={modal_text} alt='modal_text' className={styles.modal_text} />
            </div>
            <div className={styles.modal_bot}>
              <div>
              <Image src={modal_kakao} alt='modal_kakao' className={styles.modal_kakao} onClick={handleKakaoButton}/>
              </div>
              <TwitterShareButton url={url} className={styles.modal_twitter_btn}>
                <Image src={modal_twitter} alt='modal_twitter' className={styles.modal_twitter} />
              </TwitterShareButton>
              <FacebookShareButton url={url} className={styles.modal_facebook_btn}>
                <Image src={modal_facebook} alt='modal_facebook' className={styles.modal_facebook} />
              </FacebookShareButton>
              <div>
              <Image src={modal_linkcopy} alt='modal_linkcopy' className={styles.modal_linkcopy} onClick={copyURL} />
              </div>
              <div>
              <Image src={modal_close} alt='modal_close' className={styles.modal_close} onClick={closeCompleteModal}/>
              </div>
            </div>
          </div>
          </div>
        )
    }
    </>
  )
}

export default Subscribe;