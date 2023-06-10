import { NavLink } from 'react-router-dom';
import { Housing } from '../../../../../interfaces';
import style from './card-housing.module.css';


export function HousingCard({ housing }: { housing: Housing }) {
    return (
        <NavLink to={`/housing/${housing.id}`}>
            <figure className={style.housing_card}>
                <img src={housing.cover} alt="miniature voiture" className={style.thumbnail}/>

                <figcaption className={style.box_content}>
                    <p className={style.title}>{ housing.title }</p>
                </figcaption>
            </figure>
        </NavLink>
    );
}