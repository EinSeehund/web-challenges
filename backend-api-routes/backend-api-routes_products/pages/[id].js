import { useRouter } from "next/router";
import useSWR from "swr";

export default function DetailPage() {
    const router = useRouter();
    const { id } = router.query;
    const fetcher = (...args) =>
        fetch(...args).then((response) => response.json());
    const { data = [] } = useSWR(`api/products/${id}`, fetcher);

    return (
        <>
            <h1>Details</h1>
            <h2>{data.name}</h2>
            <p>{data.description}</p>
            <p>
                {data.price} {data.currency}
            </p>
            <p>Category: {data.description}</p>
        </>
    );
}
