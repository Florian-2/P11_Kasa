import style from './tag.module.css';


export function Tag({ content }: { content: string }) {
    return (
        <div className={style.tag}>
            <p className={style.content}>{content}</p>
        </div>
    );
}