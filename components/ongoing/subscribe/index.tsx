'use client'

import styles from './subscribe.module.css'
import mainlogo from '../../../public/main/title_logo.png'
import agree_no from '../../../public/main/agree_no.png'
import agree_yes from '../../../public/main/agree_yes.png'
import modal_kakao from '../../../public/ongoing/modal_kakao.png'
import modal_twitter from '../../../public/ongoing/modal_twitter.png'
import modal_facebook from '../../../public/ongoing/modal_facebook.png'
import modal_linkcopy from '../../../public/ongoing/modal_linkcopy.png'
import useInterval from '../../../hook/useInterval'

import Image from 'next/image'
import { FacebookShareButton, TwitterShareButton} from 'next-share'
import axios from 'axios'
import { useEffect, useState } from 'react'

interface SendData {
  email: string
}

interface SendAuthData {
  authenticCode: string
}

function Subscribe() {

  const [agreePrivate, setAgreePrivate] = useState<boolean>(false);
  const [agreeAdver, setAgreeAdver] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [auth, setAuth] = useState<string>('');
  const [emailValid, setEmailValid] = useState<boolean>(false);
  const [completeModal, setCompleteModal] = useState<boolean>(false);
  //이메일 보내는 로직 state
  const [emailState, setEmailState] = useState<boolean>(true); 
    //true  이메일 적는 란 false 인증번호 입력 란
  const [authState, setAuthState] = useState<boolean>(true);
  const [authNot, setAuthNot] = useState<boolean>(false);
    //위에서 부터 입력해주신 메일 / 인증번호 틀림 
  const [getUSer, setGetUser] = useState<boolean>(false);
    //등록된 회원
  const [timePlay, setTimePlay] = useState<boolean>(false);
  const [timeState, setTimeState] = useState<boolean>(false);
  const [authTime, setAuthTime] = useState<number>(0);
    //타이머관련
  // *인증시간을 직접적으로 나타내는 부분
  const authTimeMin = parseInt(String(authTime / 60));
  const authTimeSec = String(authTime % 60).length === 1 ? '0' + (authTime % 60) : authTime % 60;

  const sendData: SendData = {
    "email" : email
  }

  const sendAuthData: SendAuthData = {
    "authenticCode" : auth
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
  const authHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(e.target.value)
  }

  const closeCompleteModal = () => {
    setCompleteModal(false);
  }

  // kakao 공유하기 함수
    const handleKakaoButton = () => {
        window.Kakao.Share.sendScrap({
            requestUrl: 'https://footprintstory.kr',
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
    } else if (emailValid === true && agreePrivate === true && agreeAdver === true) {
      
       
      //api전송 email, agree
        await axios.post(`https://footprintstory.kr/api/members`,JSON.stringify(sendData),{
            headers: {
                "Content-Type": `application/json`,
            }
        })
        .then(async function(res) {
            await setGetUser(res.data.sent);
            if (res.data.sent == true) {
              alert("등록된 회원입니다.!");
        
            } else if (res.data.sent == false) {
              //시간 재생 및 이메일 전송 됐단 문구띄움
              setEmailState(false);
              setTimeState(true);
              setAuthTime(180);
              setTimePlay(true);
            }
        })
        .catch((err) => {
            alert('이메일 전송에 실패했어요!! \n다시 입력해주세요.');

            
        })
      }
  }

  const authNumberIsSuccess = async () => {
    await axios.post(`https://footprintstory.kr/api/members/code`,JSON.stringify(sendAuthData),{
        headers: {
            "Content-Type": `application/json`,
        }
    })
    .then(function(res) {
        if (res.data.joined === true) {//백엔드에서 ok응답
          setCompleteModal(true);
          setTimeState(false);
          setEmailState(true);
          setAuthNot(false);
          setAuthState(true);
          setTimePlay(false);
          setGetUser(true);
          setEmail('');
          setAuth('');
        } else if (res.data.joined === false) {
          setAuthState(false);
          setAuthNot(true);
        }
    })
    .catch((err) => {
        console.log(err)
    })
};

  const resendHandler = () => {
    setTimeState(false);
    setEmailState(true);
    setAuthNot(false);
    setTimePlay(false);
    setAuthTime(0);
    setAuth('');
    setAuthState(true);
  }
  // *인증시간을 시작하며, 인증시간 종료 후 alert띄우고 새로고침
  useInterval(() => {
    if (timePlay) {
      setAuthTime((authTime) => authTime - 1);
      if (authTime === 1) {
        setTimePlay(false);
        setTimeState(false);
        alert('인증시간이 종료되었습니다. 재전송 후 인증바랍니다.'); 
        window.location.reload();
      }
    };
  }, 1000);

  useEffect(() => {
    const regexEmail = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if(regexEmail.test(email)) {
        setEmailValid(true);
    } else {
        setEmailValid(false);
    }
    // console.log(emailValid);
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
      {
        emailState
        ? (
          <div className={styles.subscribe_box}>
            <input type="email" placeholder="이메일 주소" className={styles.input} value={email} onChange={emailHandler} />
            <div className={styles.agree} onClick={() => agreePrivateHandler()} >
                {
                    agreePrivate 
                    ? <Image src={agree_yes} alt='agree' className={styles.agree_check} />
                    : <Image src={agree_no} alt='agree' className={styles.agree_check} />
                }
                <div className={styles.agree_text}>
                    <span className='font_extrabold'>개인정보 수집</span> 및 <span className='font_extrabold'>이용</span>에 동의합니다.
                </div>
            </div>
            <div className={styles.agree} onClick={() => agreeAdverHandler()}>
                {
                    agreeAdver 
                    ? <Image src={agree_yes} alt='agree' className={styles.agree_check} />
                    : <Image src={agree_no} alt='agree' className={styles.agree_check} />
                }
                <div className={styles.agree_text}>
                    <span className='font_extrabold'>광고성 정보 수신</span>에 동의합니다.
                </div>
            </div>
            <div className={styles.button_box}>
                <button className={styles.btn} onClick={emailOkCountDown}>
                    뉴스레터 구독하기
                </button>
                <div className={styles.button_text}>
                    프롤로그 메일 무료 이용,<br/>
                    두 달간 전달되는 스토리 9,800원
                </div>
            </div>
          </div>
        )
        : (
          <div className={styles.auth_box}>
            <input type="text" placeholder="인증번호" className={styles.input} value={auth} onChange={authHandler} />
            {
              timeState && (
                <div className={styles.auth_timer}>{authTimeMin} : {authTimeSec}</div>
              )
            }
            {
              authState && (
                <div className={styles.auth_text} >
                  잠시만 기다려주세요. 메일 전송 중입니다.
                </div>
              )
            }
            {
              authNot && (
                <div className={styles.auth_text} >
                  <span className={styles.bold}>인증번호가 일치하지 않습니다. 다시 입력해주세요.</span>
                </div>
              )
            }
            <div className={styles.button_box}>
                <button className={styles.btn} onClick={authNumberIsSuccess}>
                    인증번호 확인
                </button>
                  <div className={styles.auth_button_text} onClick={resendHandler}>
                    재전송하기
                  </div>
            </div>
          </div>
        )
      }
      
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
                구독 신청되었어요! <br />
                이제부터 매주 수요일 금요일 오전 8시에 <br />
                메일로 레터를 보내드릴께요!
              </div>
              <div className={styles.modal_bot}>
                <div>
                  <Image src={modal_kakao} alt='modal_kakao' className={styles.modal_kakao} onClick={handleKakaoButton}/>
                </div>
                <TwitterShareButton url={`https://footprintstory.kr`} className={styles.modal_twitter_btn}>
                  <Image src={modal_twitter} alt='modal_twitter' className={styles.modal_twitter} />
                </TwitterShareButton>
                <FacebookShareButton url={`https://footprintstory.kr`} className={styles.modal_facebook_btn}>
                  <Image src={modal_facebook} alt='modal_facebook' className={styles.modal_facebook} />
                </FacebookShareButton>
                <div>
                <Image src={modal_linkcopy} alt='modal_linkcopy' className={styles.modal_linkcopy} onClick={copyURL} />
                </div>
                <div className={styles.modal_close} onClick={closeCompleteModal}>
                  닫기
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