import React, { useState, useEffect } from "react";
import {QUERY_PRODUCTS} from "../utils/query.js";

export default function Products() {
    const [productTypes, setProductTypes] = useState([]);
    const [selectedType, setSelectedType] = useState(null);

    useEffect(() => {
        // Function to fetch the product data from productSeeds.json
        const fetchProductData = async () => {
            try {
                const response = await fetch(QUERY_PRODUCTS);
                if (!response.ok) {
                    throw new Error("Failed to fetch product data");
                }
                const data = await response.json();
                setProductTypes(data.productTypes);
            } catch (error) {
                console.error(error);
            }
        };

        fetchProductData();
    }, []);

    const handleTypeClick = (typeId) => {
        setSelectedType(typeId === selectedType ? null : typeId);
    };

    return (
        <div>
            <h1>Products</h1>
            <section>
                <div style={{ display: "flex" }}>
                    {/* Sidebar with product types */}
                    <div style={{ flex: 1 }}>
                        <h2>Product Types</h2>
                        <ul>
                            {productTypes.map((type) => (
                                <li
                                    key={type.id}
                                    onClick={() => handleTypeClick(type.id)}
                                    style={{ cursor: "pointer" }}
                                >
                                    {type.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Items of the selected type */}
                    <div style={{ flex: 3 }}>
                        {selectedType !== null && (
                            <div>
                                <h2>{productTypes.find((type) => type.id === selectedType).name}</h2>
                                <ul>
                                    {productTypes
                                        .find((type) => type.id === selectedType)
                                        .items.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}
