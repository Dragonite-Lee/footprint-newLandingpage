import styles from './qna.module.css'
import QnaBox from '../../qnaBox';

function Qna() {
  
  return (
    <div className={styles.container}>
        <div className={styles.qna_bar}></div>
        <div className={styles.qna_text}>
            Q<span className={styles.qna_text_small}>&</span>A
        </div>
        <div className={styles.qna_box}>
            <QnaBox title='Q1. 뉴스 레터는 무료인가요?' content='뉴스레터를 구독한 시점부터 한 달간 무료로 구독하실 수 있습니다. 구독 시점에서 연재 중이었던 저자 스토리의 ‘선택의 과정’을 한 달 동안 매주 수요일, 금요일 오전 8시에 전달받을 수 있습니다.'/>
            <QnaBox title='Q2. 뉴스 레터의 요금은 얼마인가요?' content='월 구독료 4,900원으로 연재 중인 저자의 모든 스토리를 만나보실 수 있습니다. 한 저자의 스토리에 담긴 모든 에피소드를 매주 수요일, 금요일 오전 8시에 여러분의 메일로 전달해드릴게요.'/>
            <QnaBox title='Q3. 스토리 연재 주기는요?' content='뉴스레터는 한 저자의 스토리 내에 있는 모든 섹션(선택의 과정, 노력의 깊이, 도전의 순간, 직업인으로서의 삶)을 각각 4주동안 순차적으로 연재하여 저자 한 명의 이야기를 완결짓습니다. 스토리 내에 있는 섹션의 개수에 따라 스토리의 전체 연재 기간이 달라집니다.'/>
            <QnaBox title='Q4. 구독을 했는데 뉴스레터가 오지 않아요.' content='뉴스레터는 스팸메일함, 혹은 프로모션함으로 자동 분류될 수도 있습니다. 스팸메일함에서 footprint story를 찾았다면 해당 메일 주소(contact@footprintstory.kr)를 주소록에 친구 추가해주세요.'/>
            <QnaBox title='Q5. 지난 저자의 스토리는 읽을 수 있나요?' content='독자들은 뉴스레터로 발행된 지난 스토리를 볼 수 없습니다. 뉴스레터로 발행되었던 지난 저자들의 스토리는 추후 메인 서비스가 출시되면 구매할 수 있는 상품으로서 업로드 될 예정이니, 메인 서비스가 출시될 때까지 조금만 기다려 주세요!'/>
        </div>
    </div>
  )
}

export default Qna;