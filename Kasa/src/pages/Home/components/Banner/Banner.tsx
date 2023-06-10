import banner from '../../../../assets/images/banner.png';
import style from './banner.module.css';


export function Banner() {
    return (
        <div className={style.banner}>
            <img className={style.banner_img} src={banner} alt="eau rocheuse" />

            <div className={style.overlay}>
                <h2 className={style.title}>Chez vous, partout et ailleurs</h2>
            </div>
        </div>
    );
}