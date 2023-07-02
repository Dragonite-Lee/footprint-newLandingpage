import styles from './mainintro.module.css'

function MainIntro() {
  
  return (
    <div className={styles.container}>
        <div className={styles.main_text}>
            가까이에 있지만 쉽게 만나볼 수 없는 선배들이 <br />
            지금의 꿈을 찾고 달성하기까지 거쳐간 <br />
            선택, 노력, 도전, 그리고 삶의 여정을 취재합니다.
        </div>
        <div className={styles.line}></div>
        <div className={styles.sub_text}>
            ‘내가 겪는 불안은 저 멀리서 꿈을 펼쳐가고 있는 선배들은 해 보지도 않았겠지...’, <br />
            ‘내가 하고 있는 노력은 정말 아무것도 아닌 걸까....?’, <br />
            ‘내가 이 직업으로 먹고 살 수 있긴 할까....?’, <br />
            꿈에 대한 “확신"이 없어 앞으로 나아가길 주저하고 있다면, 
            <br /><br />
            나보다 한발 앞서 커리어 여정을 시작한 선배들의 경험과 그 안에서 느낀 감정까지 <br />
            생생하고 깊이감 있게 취재해 여러분께 스토리로 전달합니다. <br />
        </div>
    </div>
  )
}

export default MainIntro;