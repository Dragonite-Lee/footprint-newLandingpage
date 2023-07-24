import styles from './ongoing.module.css'
import Subscribe from '../../components/ongoing/subscribe';

function Ongoing() {
    return (
        <div className={styles.container}>
            <Subscribe />
        </div>
    )
}

export default Ongoing;