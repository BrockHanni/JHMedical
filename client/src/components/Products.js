import React, { useState, useEffect } from "react";
import { QUERY_PRODUCTS } from "../utils/query";
import { useQuery } from '@apollo/client';

export default function Products() {
    const [productTypes, setProductTypes] = useState([]);
    const [selectedType, setSelectedType] = useState(null);

    const { loading, data } = useQuery(QUERY_PRODUCTS);

    const types = data?.type || [];

    if (!loading) {
        console.log(data)
    }

};