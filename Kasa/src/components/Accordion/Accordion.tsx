import { useEffect, useRef, useState } from "react";
import { Accordion as TypeAccordion} from "../../interfaces";

import style from './accordion.module.css';
import { IconAngle } from "../Icons/IconAngle";


export function Accordion({ data }: { data: TypeAccordion }) {
    const [isActive, setIsActive] = useState(false);

    const [heightContent, setHeightContent] = useState<number>(0);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const resizeObserver = new ResizeObserver((entries) => {
            const child = entries[0].target.childNodes[0] as HTMLElement;
            setHeightContent(child.scrollHeight);
        });

        const content = contentRef.current;
        if (content) {
            setHeightContent(content.scrollHeight);
            resizeObserver.observe(content);
        }

        return () => resizeObserver.disconnect();
    }, [])

    const handleClickToggle = () => setIsActive(!isActive);

    return (
        <div className={[style.accordion, isActive ? style.active : null].join(' ')}>
            <div className={style.header}>
                <span className={style.title}>{data.title}</span>

                <button onClick={handleClickToggle} className={style.btn}>
                    <IconAngle className={style.icon}/>
                </button>
            </div>

            <div
                ref={contentRef}
                className={style.content}
                style={{ height: isActive ? heightContent : "0px" }}
            >
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