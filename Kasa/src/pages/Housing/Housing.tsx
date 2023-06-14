import { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom'

import { Loading } from '../../components/Loading/Loading';
import { Housing as TypeHousing } from '../../interfaces';
import { Slider } from './components/Slider/Slider';
import { Thumbnail } from './components/Thumbnail/Thumbnail';
import { Tag } from './components/Tag/Tag';
import { Accordion } from '../../components/Accordion/Accordion';
import { Rating } from './components/Rating/Rating';

import style from './housing.module.css';


export default function Housing() {
    const { housing } = useLoaderData() as { housing: TypeHousing };

    return (
        <Suspense fallback={<Loading/>}>
            <Await resolve={housing}>
                {(data: TypeHousing) => (
                    <>
                        <Slider title={data.title} images={data.pictures} />

                        <section className={style.container_detail}>
                            <div className={style.presentation}>
                                <h2 className={style.title}>{data.title}</h2>
                                <p className={style.location}>{data.location}</p>
                            </div>

                            <div className={style.thumbnail}>
                                <Thumbnail identity={data.host} />
                            </div>

                            <div className={style.tags}>
                                { data.tags.map((tag, i) => <Tag key={i} content={tag} />) }
                            </div>

                            <div className={style.rating}>
                                <Rating rating={Number(data.rating)} />
                            </div>

                            <div className={style.container_accordion}>
                                <Accordion data={{ title: "Description", description: data.description }} />

                                <Accordion data={{ title: "Équipements", description: data.equipments }} />
                            </div>
                        </section>
                    </>
                )}
            </Await>
        </Suspense>
    );
}