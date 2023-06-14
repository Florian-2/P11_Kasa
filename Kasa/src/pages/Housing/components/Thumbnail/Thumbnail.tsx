import style from './thumbnail.module.css';


export function Thumbnail({ identity }: { identity: { name: string; picture: string; } }) {
    const name = identity.name.split(' ');

    return (
        <div className={style.container_thumbnail}>
            <div className={style.container_name}>
                { name.map((word, i) => <span key={i} className={style.name}>{word}</span>) }
            </div>
            <img src={identity.picture} alt="thumbnail" className={style.thumbnail} />
        </div>
    );
}