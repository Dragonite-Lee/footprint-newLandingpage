import styles from './questionFirst.module.css'

interface PageNumberInterface {
    pageNum : number;
    window: Window;
    pageRefs: React.MutableRefObject<HTMLDivElement[]>;
};


const QuestionFirst = (props: PageNumberInterface) => {
    return (
        <div className={styles.container} ref={(element) => {
            props.pageRefs.current[props.pageNum] = element!;
          }}>
            {props.pageNum}
        </div>
    )
}

export default QuestionFirst;