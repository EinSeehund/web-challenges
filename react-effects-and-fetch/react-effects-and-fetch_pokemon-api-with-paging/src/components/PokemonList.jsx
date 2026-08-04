import { useEffect, useState } from "react";

export default function PokemonList() {
    const [pokemon, setPokemon] = useState([]);
    const [fetchUrl, setFetchUrl] = useState(
        "https://pokeapi.co/api/v2/pokemon?offset=0",
    );
    const [nextPageUrl, setNextPageUrl] = useState("");
    const [prevPageUrl, setPrevPageUrl] = useState("");

    useEffect(() => {
        async function loadPokemon(url) {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setPokemon(data.results);
                setNextPageUrl(data.next);
                setPrevPageUrl(data.previous);
            } catch (error) {
                console.log(error);
            }
        }

        loadPokemon(fetchUrl);
    }, [fetchUrl]);

    return (
        <main>
            <button
                type="button"
                onClick={() => {
                    setFetchUrl(prevPageUrl);
                }}
            >
                Previous Page
            </button>
            <button
                type="button"
                onClick={() => {
                    setFetchUrl(nextPageUrl);
                }}
            >
                Next Page
            </button>
            <ul>
                {pokemon.map(({ name }) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
        </main>
    );
}
