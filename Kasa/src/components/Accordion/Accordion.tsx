import { useState } from "react";
import { Accordion as TypeAccordion} from "../../interfaces";

import style from './accordion.module.css';
import { IconAngle } from "../Icons/IconAngle";


export function Accordion({ data }: { data: TypeAccordion }) {
    const [isActive, setIsActive] = useState<boolean>(false);
    const [classItem, setClassItem] = useState<string>(style.item);

    const handleClickItem = () => {
        const active = !isActive;
        setIsActive(active);

        if (active) {
            setClassItem(`${style.item} ${style.active}`);
        }
        else {
            setClassItem(style.item);
        }
    }

    return (
        <div className={classItem}>
            <div className={style.header}>
                <p className={style.title}>{data.title}</p>

                <button onClick={handleClickItem} className={style.btn}>
                    <IconAngle className={style.icon}/>
                </button>
            </div>

            <div className={style.content}>
                {
                    Array.isArray(data.description) ? (
                        <ul className={style.list}>
                            { data.description.map((item, i) => <li key={i} className={style.item}>{item}</li>) }
                        </ul>
                    ) : <p className={style.description}>{data.description}</p>
                }
            </div>
        </div>
    );
}