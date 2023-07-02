import styles from './ongoing.module.css'
import Story from '../../components/ongoing/story';
import Timer from '../../components/ongoing/timer';
import Subscribe from '../../components/ongoing/subscribe';

function Ongoing() {
    return (
        <div className={styles.container}>
            <Story />
            <Timer />
            <Subscribe />
        </div>
    )
}

export default Ongoing;