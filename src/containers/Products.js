import React from 'react';
import Product from "../components/Product";
import "../styles/Product.css"

const Products = () => {
    return (
        <div className="container products">
            <div className="col5">
                <Product/>
            </div>
            <div className="col5">
                <Product/>
            </div>
            <div className="col5">
                <Product/>
            </div>
            <div className="col5">
                <Product/>
            </div>
            <div className="col5">
                <Product/>
            </div>
            <div className="col5">
                <Product/>
            </div>
            <div className="col5">
                <Product/>
            </div>
            <div className="col5">
                <Product/>
            </div>
        </div>
    );
};

export default Products;