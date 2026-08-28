import useSWR from "swr";
import Link from "next/link";

export default function HomePage() {
    const fetcher = (...args) =>
        fetch(...args).then((response) => response.json());
    const { data } = useSWR("api/products", fetcher);
    return (
        <div>
            <h1>Welcome to Next.js API Routes!</h1>
            <ul>
                {data?.map((animal) => (
                    <li key={animal.id}>
                        <h2>
                            <Link href={`/${animal.id}`}>{animal.name}</Link>
                        </h2>
                        <p>{animal.description}</p>
                        <p>
                            {animal.price} {animal.currency}
                        </p>
                        <p>Category: {animal.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
