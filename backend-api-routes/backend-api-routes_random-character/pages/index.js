import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

export default function HomePage() {
    const { data = [] } = useSWR("/api/random-character", fetcher);
    return (
        <>
            <h1>
                {data.firstName} {data.lastName}
            </h1>
            <h2>{data.gender}</h2>
            <h2>{data.birthDay}</h2>
        </>
    );
}
