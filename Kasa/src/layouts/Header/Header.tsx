import { NavLink } from 'react-router-dom';

import style from './header.module.css';
import logo from '../../assets/logo_kasa.svg';


export function Header() {
    return (
        <header className={style.header}>
            <NavLink to="/">
                <img src={logo} alt="logo kasa" className={style.logo}/>
            </NavLink>

            <nav className={style.navigation}>
                <NavLink to="/" className={style.link}>Accueil</NavLink>
                <NavLink to="/about" className={style.link}>A propos</NavLink>
            </nav>
        </header>
    );
}