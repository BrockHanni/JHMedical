import React, { useState, useEffect } from "react";
import { QUERY_PRODUCTS } from "../utils/query";
import { useQuery } from '@apollo/client';

export default function Products() {
    const [productTypes, setProductTypes] = useState([]);
    const [selectedType, setSelectedType] = useState(null);

    const { loading, data } = useQuery(QUERY_PRODUCTS);

    useEffect(() => {
        if (data) {
            // The data object is available when the query is successful
            const products = data; // Access the 'products' field from the data
            console.log(products);
            // Now you can do something with the products data
        }
    }, [data]);

    if (loading) {
        return <p>Loading...</p>;
    }

    // You can render your components here once the loading is complete and no error occurred
    return (
        <div>
            <p>Data</p>
        </div>
    );
}