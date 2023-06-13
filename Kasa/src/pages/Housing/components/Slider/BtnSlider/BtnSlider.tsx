import { MouseEventHandler } from "react";
import { IconAngle } from "../../../../../components/Icons/IconAngle";

import style from './btn-slider.module.css';


type BtnSliderProps = { direction: "prev" | "next", action: MouseEventHandler<HTMLButtonElement> };

export function BtnSlider({ direction, action }: BtnSliderProps) {
    return (
        <button onClick={action} className={style.btn}>
            {
                direction === "prev" ? <IconAngle className={style.icon_left} /> : <IconAngle className={style.icon_right} />
            }
        </button>
    );
}