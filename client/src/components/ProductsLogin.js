import React, { useState, useEffect } from "react";
import { QUERY_PRODUCTS } from "../utils/query";
import { useQuery } from '@apollo/client';

export default function Products() {
    const { loading, data } = useQuery(QUERY_PRODUCTS);
    const products = data; 
    useEffect(() => {
        if (data) {
        }
    }, [data]);

    if (loading) {
        return <p>Loading...</p>;
    }

    // You can render your components here once the loading is complete and no error occurred
    return (
        <div>
            <div>
                <h1>Chairs</h1>
                <div>
                    <p>{products.products[0].name}</p>
                    <img src={products.products[0].image}></img>
                    <p>{products.products[0].description}</p>
                    <p>${products.products[0].price}</p>
                    <a href={products.products[0].link}>See details</a>
                </div>
            </div>
            <div>
                <h1>Stands</h1>
                <div>
                    <p>{products.products[1].name}</p>
                    <img src={products.products[1].image}></img>
                    <p>{products.products[1].description}</p>
                    <p>${products.products[1].price}</p>
                    <a href={products.products[1].link}>See details</a>
                </div>
            </div>
            <div>
                <h1>Slit Lamps</h1>
                <div>
                    <p>{products.products[2].name}</p>
                    <img src={products.products[2].image}></img>
                    <p>{products.products[2].description}</p>
                    <p>${products.products[2].price}</p>
                    <a href={products.products[2].link}>See details</a>
                </div>
            </div>
            <div>
                <h1>Phoropters</h1>
                <div>
                    <p>{products.products[3].name}</p>
                    <img src={products.products[3].image}></img>
                    <p>{products.products[3].description}</p>
                    <p>${products.products[3].price}</p>
                    <a href={products.products[3].link}>See details</a>
                </div>
            </div>
            <div>
                <h1>Tonometers</h1>
                <div>
                    <p>{products.products[4].name}</p>
                    <img src={products.products[4].image}></img>
                    <p>{products.products[4].description}</p>
                    <p>${products.products[4].price}</p>
                    <a href={products.products[4].link}>See details</a>
                </div>
            </div>
            <div>
                <h1>Lensmeters</h1>
                <div>
                    <p>{products.products[5].name}</p>
                    <img src={products.products[5].image}></img>
                    <p>{products.products[5].description}</p>
                    <p>${products.products[5].price}</p>
                    <a href={products.products[5].link}>See details</a>
                </div>
            </div>
            <div>
                <h1>Furniture</h1>
                <div>
                    <p>{products.products[6].name}</p>
                    <img src={products.products[6].image}></img>
                    <p>{products.products[6].description}</p>
                    <p>${products.products[6].price}</p>
                    <a href={products.products[6].link}>See details</a>
                </div>
            </div>
        </div>
    );
}
