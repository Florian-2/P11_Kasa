import { useRouteError, isRouteErrorResponse, NavLink } from "react-router-dom"

import style from './error-page.module.css';


export default function ErrorPage() {
    const error = useRouteError();
    let errorMessage = "";

    if (isRouteErrorResponse(error)) {
        errorMessage = error.error?.message || error.statusText;
    }
    else if (error instanceof Error) {
        errorMessage = error.message;
    }
    else {
        errorMessage = "Une erreur est survenue.";
    }

    return (
        <div className={style.container_error}>
            <h2 className={style.message}>{ errorMessage }</h2>
            <NavLink to="/" replace className={style.link}>Retourner sur la page d’accueil</NavLink>
        </div>
    );
}