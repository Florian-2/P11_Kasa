import { Housing } from '../../../../interfaces';
import { HousingCard } from './Card/HousingCard';
import style from './list-card.module.css';


export function CardListHousing({ listHousing }: { listHousing: Housing[] }) {
    return (
        <section>
            <ul className={style.card_list}>
                {
                    listHousing.map((housing) => (
                        <li key={housing.id}>
                            <HousingCard  housing={housing}/>
                        </li>
                    ))
                }
            </ul>
        </section>
    );
}