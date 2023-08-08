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

            <h1>Products</h1>
            <section>
                <h1>Product Links</h1>
                {/* dropdown menus */}
                <div>
                    <button>Chairs</button>
                </div>
                <div>
                    <button>Tables</button>
                </div>
                <div>
                    <button>Stands</button>
                </div>
            </section>

        </div>
    );
}