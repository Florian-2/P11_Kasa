import { LoaderFunctionArgs, defer } from "react-router-dom";
import { Housing } from "../../interfaces";

export async function getAllHousingLoader() {
    const res = await fetch("/logements.json");

    if (res.ok) {
        return defer({
            housing: new Promise<Housing[]>((resolve) => setTimeout(() => resolve(res.json()), 200))
        })
    }

    throw new Error("Une erreur est survenus lors du chargements des ressources.");
}

export async function getOneHousingByIdLoader({ params }: LoaderFunctionArgs) {
    const res = await fetch("/logements.json");

    if (res.ok) {
        const data: Housing[] = await res.json();
        const housing = data.filter((h) => h.id === params.id)[0];

        return defer({
            housing
        })
    }

    throw new Error("Une erreur est survenus lors du chargements des ressources.");
}