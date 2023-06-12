import { aboutData } from '../../components/data/about';
import { Banner } from '../../components/Banner/Banner';
import bannerImg from '../../assets/images/montagne.png';
import Accordion from '../../components/Accordion/Accordion';

import style from './about.module.css';


export default function About() {
    return (
        <>
            <Banner img={bannerImg} />
            <Accordion items={aboutData}/>
        </>
    );
}