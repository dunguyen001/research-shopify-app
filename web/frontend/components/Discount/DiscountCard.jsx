import { Button } from "@shopify/polaris"
import { useState } from "react"
import { useAuthenticatedFetch } from "../../hooks";

export function DiscountCard() {
    const [number, setNumber] = useState(0);
    const fetch = useAuthenticatedFetch();

    const fetchProducts = async () => {
        await fetch("/api/product-filters")
        setNumber(number + 1)
    }
    return (
        <div>
            Hello World
            <div>{number}</div>
            <Button onClick={() => fetchProducts()}>Increase Number</Button>
        </div>
    )
}