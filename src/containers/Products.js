import React from 'react';
import Product from "../components/Product";
import "../styles/Product.css"
import all from "../assets/all.svg";

const Products = () => {
    return (
        <div className="container products">
                <div className="col1">
                    <h1 className="component-header">
                        Ёндоотой бөөн бөөн бараа
                        <span className="showall">Бүгдийг үзэх<img src={all} alt=""/></span>
                    </h1>
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
            <div className="col5">
                <Product/>
            </div>
        </div>
    );
};

export default Products;