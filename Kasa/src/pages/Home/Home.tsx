import { Suspense, useEffect } from "react";
import { Await, useLoaderData } from "react-router-dom";
import { Housing } from "../../interfaces";
import { Banner } from "./components/Banner/Banner";
import { CardListHousing } from "./components/Cards/CardListHousing";
import { Loading } from "../../components/Loading/Loading";

import style from './home.module.css';


export default function Home() {
    const { housing } = useLoaderData() as { housing: Housing[]; }

    useEffect(() => console.log('render'))

    return (
        <div className={style.container}>
            <Banner/>

            <Suspense fallback={<Loading/>}>
                <Await resolve={housing}>
                    {(data: Housing[]) => <CardListHousing listHousing={data} />}
                </Await>
            </Suspense>
        </div>
    );
}