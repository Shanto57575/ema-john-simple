import React from 'react';
import './Product.css'
const Product = (props) => {
    console.log(props);
    const { img, name, price, seller, ratings } = props.product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='productName'>{name}</h6>
                <p className='priceTag'>price : ${price}</p>
                <p>Manufacturer : {seller}</p>
                <p>rating : {ratings} stars</p>
            </div>
            <button className='cart-btn'>Add to cart</button>
        </div>
    );
};

export default Product;