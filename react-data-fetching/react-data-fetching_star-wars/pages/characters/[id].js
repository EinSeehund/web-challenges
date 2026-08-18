import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr";
import { useRouter } from "next/router";

const fetcher = async (url) => {
    const res = await fetch(url);

    // If the status code is not in the range 200-299,
    // we still try to parse and throw it.
    if (!res.ok) {
        const error = new Error("An error occurred while fetching the data.");
        // Attach extra info to the error object.
        error.info = await res.json();
        error.status = res.status;
        throw error;
    }

    return res.json();
};

export default function Character() {
    const router = useRouter();
    const { id } = router.query;

    const {
        data: character,
        error,
        isLoading,
    } = useSWR(`https://swapi.py4e.com/api/people/${id}`, fetcher);

    if (error) return <div>failed to load</div>;
    if (isLoading) return <div>loading...</div>;

    return (
        <Layout>
            <Card
                id={id}
                name={character.name}
                height={character.height}
                eyeColor={character.eye_color}
                birthYear={character.hair_color}
            />
        </Layout>
    );
}
