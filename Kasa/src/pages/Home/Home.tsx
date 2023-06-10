import { useEffect } from "react";
import { useNavigation } from "react-router-dom";

export function Home() {
    const navigation = useNavigation();

    useEffect(() => console.log(navigation), [navigation])

    return (
        <>
            <h2>Home</h2>
            {navigation.state === "loading" ? <p>Chargement</p> : null}
        </>
    )
}