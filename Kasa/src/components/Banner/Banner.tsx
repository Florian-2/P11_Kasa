import style from './banner.module.css';


export function Banner({ title, img, alt }: { title?: string, img: string, alt?: string }) {
    return (
        <div className={style.banner}>
            <img className={style.banner_img} src={img} alt={alt} />

            {
                title && (
                    <div className={style.overlay}>
                        <h2 className={style.title}>{ title }</h2>
                    </div>
                )
            }
        </div>
    );
}