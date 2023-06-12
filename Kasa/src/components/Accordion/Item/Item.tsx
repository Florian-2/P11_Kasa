import { useState } from "react";
import { Accordion } from "../../../interfaces";

import style from './item.module.css';


export function Item({ data }: { data: Accordion }) {
    const [isActive, setIsActive] = useState<boolean>(false);

    const handleClickItem = () => {
        console.log('click');
        setIsActive(!isActive);
    }

    let classItem = style.item;
    if (isActive) {
        classItem += ` ${style.active}`;
    }

    return (
        <div className={classItem}>
            <div className={style.header}>
                <p className={style.title}>{data.title}</p>

                <button onClick={handleClickItem} className={style.btn}>
                    <img src="/src/assets/angle-down.svg" alt="chevron vers le bas" className={style.icon}/>
                </button>
            </div>

            <div className={style.content}>
                {/* Vérifier si "description" est un tableau ou une simple string */}
                <p className={style.description}>{data.description}</p>
            </div>
        </div>
    );
}