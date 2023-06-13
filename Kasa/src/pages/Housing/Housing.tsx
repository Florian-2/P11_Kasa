import { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom'
import { Loading } from '../../components/Loading/Loading';
import { Housing as TypeHousing } from '../../interfaces';
import { Slider } from './components/Slider/Slider';


export default function Housing() {
    const { housing } = useLoaderData() as { housing: TypeHousing };

    return (
        <Suspense fallback={<Loading/>}>
            <Await resolve={housing}>
                {(data: TypeHousing) => (
                    <>
                        <h2>{data.title}</h2>

                        <Slider title={data.title} images={data.pictures} />
                    </>
                )}
            </Await>
        </Suspense>
    );
}