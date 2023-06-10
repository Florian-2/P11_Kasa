import logo from '../../../assets/logo_kasa_white.svg';
import style from './footer.module.css';


export function Footer() {
    return (
        <footer className={style.footer}>
            <img src={logo} alt="logo Kasa" className={style.logo} />
            <p className={style.copyright}>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}