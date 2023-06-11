import { NavLink } from 'react-router-dom';
import style from './not-found-page.module.css';


export default function NotFoundPage() {
    return (
        <div className={style.container_notFound}>
            <h2 className={style.title}>404</h2>
            <p className={style.message}>Oups! La page que vous demandez n'existe pas.</p>

            <NavLink to='/' className={style.link}>Retourner sur la page d’accueil</NavLink>
        </div>
    );
}