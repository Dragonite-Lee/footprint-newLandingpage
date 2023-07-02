import styles from './intro.module.css'
import Footprint from '../../components/intro/footprint';
import MainIntro from '../../components/intro/mainintro';
import SubIntro from '../../components/intro/subintro';
import Inner from '../../components/intro/inner';

function Intro() {
    return (
        <div className={styles.container}>
            <Footprint />
            <MainIntro />
            <SubIntro />
            <Inner />
        </div>
    )
}

export default Intro;