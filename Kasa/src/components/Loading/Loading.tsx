import style from './loading.module.css';

export function Loading() {
    return (
        <div className={style.loader}>
            <div className={style.lds_ring}>
                <div className={style.item}></div>
                <div className={style.item}></div>
                <div className={style.item}></div>
                <div className={style.item}></div>
            </div>
        </div>
    );
}