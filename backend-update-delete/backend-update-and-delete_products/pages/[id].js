import useSWR from "swr";
import styled from "styled-components";
import { useRouter } from "next/router";
import StyledLink from "@/components/Link";
import { useState } from "react";
import ProductForm from "@/components/ProductForm";

export default function Product() {
    const [isEditing, setIsEditing] = useState(false);
    const router = useRouter();
    const { id } = router.query;

    const { data, isLoading, mutate } = useSWR(`/api/products/${id}`);

    async function handleEditProduct(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const productData = Object.fromEntries(formData);

        const response = await fetch(`api/products/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(productData),
        });
        mutate();
        event.target.reset();
    }

    async function handleDeleteProduct() {
        const response = await fetch(`api/products/${id}`, {
            method: "DELETE",
        });

        if (response.ok) {
            router.push("/");
        } else {
            console.log(response.status);
        }
    }

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    if (!data) {
        return;
    }

    return (
        <ProductCard>
            <h2>{data.name}</h2>
            <p>Description: {data.description}</p>
            <p>
                Price: {data.price} {data.currency}
            </p>
            <button
                type="button"
                onClick={() => {
                    setIsEditing(!isEditing);
                }}
            >
                {isEditing ? "CANCEL" : "EDIT"}
            </button>
            <button type="button" onClick={() => handleDeleteProduct(id)}>
                DELETE
            </button>
            {isEditing && (
                <ProductForm onSubmit={handleEditProduct} isEditing={true} data={data} />
            )}
            <StyledLink href="/">Back to all</StyledLink>
        </ProductCard>
    );
}

const ProductCard = styled.article`
    padding: 0.5rem 1rem;
    box-shadow: 0px 1px 5px -2px var(--color-granite);
`;
