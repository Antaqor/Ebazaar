import React from 'react';
import heart from '../assets/heart.svg'
const Product = () => {
    return (
        <div className="product">
      <a>
<div className="container-product">
    <div class="bar">
        <img src="https://ebazaar.mn/media/product/7562601352377944649220942257202205111219444341197245498954529766870850.png" alt=""/>
        <img className="save-product" src={heart} alt=""/>
        <h1>Granola Bite (Coconut Banana) / Гранола Байт (Кокос Гадил жимс)  125гр/10ш</h1>
        <div className="product-price">
            <div><h1>12,750₮</h1></div>
            <img className="addtocart" src="https://ebazaar.mn/icon/product/cart.svg" alt=""/></div>
    </div>
</div>
      </a>
            <div className="container-product-quantity">
<div className="product-quantity">
<div className="adder">
<span>
<span></span>
    <input type="text" id="550230" value="1"/>
    <span>+</span>
</span>
    <img src="https://ebazaar.mn/icon/product/cart_active.svg"/>
</div>
</div>
            </div>
        </div>
    );
};

export default Product;