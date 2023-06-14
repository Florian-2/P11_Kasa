import { IconStar } from "../../../../components/Icons/IconStar";

import style from './rating.module.css';


export function Rating({ rating }: { rating: number }) {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
        stars.push(<IconStar key={i} isActive={i <= rating}/>);
    }

    return (
        <div className={style.stars}>
            {stars}
        </div>
    );
}