import React, { useState, useEffect } from "react";
import { QUERY_PRODUCTS } from "../utils/query.js";

export default function Products() {

    return (
        <div>
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