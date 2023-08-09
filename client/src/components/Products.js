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
        <div className="ProductPage">
            <p className="productType">Chairs</p>
            <div className="product-card">
                <div className="card-content">
                    <p className="productName">{products.products[0].name}</p>
                    <img src={products.products[0].image} alt={products.products[0].name}></img>
                    <p>{products.products[0].description}</p>
                    <a href={products.products[0].link}>See details</a>
                </div>
            </div>
            <p className="productType">Stands</p>
            <div className="product-card">
                <div className="card-content">
                    <p>{products.products[1].name}</p>
                    <img src={products.products[1].image}></img>
                    <p>{products.products[1].description}</p>
                    <a href={products.products[1].link}>See details</a>
                </div>
            </div>
            <p className="productType">Slit Lamps</p>
            <div className="product-card">
                <div className="card-content">
                    <p>{products.products[2].name}</p>
                    <img src={products.products[2].image}></img>
                    <p>{products.products[2].description}</p>
                    <a href={products.products[2].link}>See details</a>
                </div>
            </div>
            <p className="productType">Phoropters</p>
            <div className="product-card">
                <div className="card-content">
                    <p>{products.products[3].name}</p>
                    <img src={products.products[3].image}></img>
                    <p>{products.products[3].description}</p>
                    <a href={products.products[3].link}>See details</a>
                </div>
            </div>
            <p className="productType">Tonometers</p>
            <div className="product-card">
                <div className="card-content">
                    <p>{products.products[4].name}</p>
                    <img src={products.products[4].image}></img>
                    <p>{products.products[4].description}</p>
                    <a href={products.products[4].link}>See details</a>
                </div>
            </div>
            <p className="productType">Lensmeters</p>
            <div className="product-card">
                <div className="card-content">
                    <p>{products.products[5].name}</p>
                    <img src={products.products[5].image}></img>
                    <p>{products.products[5].description}</p>
                    <a href={products.products[5].link}>See details</a>
                </div>
            </div>
            <p className="productType">Miscellaneous</p>
            <div className="product-card">
                <div className="card-content">
                    <p>{products.products[6].name}</p>
                    <img src={products.products[6].image}></img>
                    <p>{products.products[6].description}</p>
                    <a href={products.products[6].link}>See details</a>
                </div>
            </div>
        </div>
    );
}
