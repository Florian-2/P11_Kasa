import { aboutData } from '../../data/about';
import { Banner } from '../../components/Banner/Banner';
import bannerImg from '../../assets/images/montagne.png';
import { Accordion } from '../../components/Accordion/Accordion';

import style from './about.module.css';


export default function About() {
    return (
        <>
            <Banner img={bannerImg} alt='Montagne'/>

            <section className={style.accordion}>
                {aboutData.map((item, i) => <Accordion key={i} data={item}/>)}
            </section>
        </>
    );
}