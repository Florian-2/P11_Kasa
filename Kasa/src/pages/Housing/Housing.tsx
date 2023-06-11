import { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom'
import { Loading } from '../../components/Loading/Loading';
import { Housing as InterfaceHousing } from '../../interfaces';


export default function Housing() {
    const { housing } = useLoaderData() as { housing: InterfaceHousing };

    return (
        <Suspense fallback={<Loading/>}>
            <Await resolve={housing}>
                {(data: InterfaceHousing) => <h2>{data.title} - {data.id}</h2>}
            </Await>
        </Suspense>
    );
}