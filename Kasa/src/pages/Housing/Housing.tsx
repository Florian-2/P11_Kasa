import { useParams } from 'react-router-dom'

export function Housing() {
    const params = useParams();

    return <h2 style={{ fontSize: "3rem" }}>Détails logement id {params.id}</h2>
}