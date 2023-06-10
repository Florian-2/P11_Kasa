import { Housing } from '../../../../interfaces';
import { HousingCard } from './Card/HousingCard';
import style from './list-card.module.css';


export function CardListHousing({ listHousing }: { listHousing: Housing[] }) {
    return (
        <div className={style.container_card}>
            {
                listHousing.map((housing) => (
                    <HousingCard key={housing.id} housing={housing}/>
                )) 
            }
        </div>
    );
}