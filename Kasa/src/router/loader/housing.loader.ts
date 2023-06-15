import { LoaderFunctionArgs, defer, redirect } from "react-router-dom";
import { Housing } from "../../interfaces";


export async function getAllHousingLoader() {
    const res = await fetch("/logements.json");

    if (!res.ok) {
        throw new Error("Une erreur est survenue lors du chargement des ressources.");
    }

    return defer({
        // housing: res.json()
        housing: new Promise<Housing[]>((resolve) => setTimeout(() => resolve(res.json()), 1000))
    })
}

export async function getOneHousingByIdLoader({ params }: LoaderFunctionArgs) {
    const res = await fetch("/logements.json");

    if (!res.ok) {
        throw new Error("Une erreur est survenue lors du chargement de la ressource.");
    }

    const data: Housing[] = await res.json();
    const housing = data.filter((h) => h.id === params.id)[0];

    if (!housing) {
        return redirect("*");
    }

    return defer({
        // housing: res.json()
        housing: new Promise<Housing>((resolve) => setTimeout(() => resolve(housing), 1000))
    })
}