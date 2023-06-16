import styles from './logo.module.css'

interface PageNumberInterface {
    pageNum : number;
    window: Window;
    pageRefs: React.MutableRefObject<HTMLDivElement[]>;
};

const Logo = (props: PageNumberInterface) => {
    return (
        <div className={styles.container} ref={(element) => {
            props.pageRefs.current[props.pageNum] = element!;
          }} >
            {props.pageNum}
        </div>
    )
}

export default Logo;