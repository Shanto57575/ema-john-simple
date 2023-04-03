import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = (props) => {

    const { img, name, price, seller, ratings } = props.product;

    const handleAddToCart = props.handleAddToCart;

    return (
        <div className='product'>
            <img src={img} alt="loading!!!" />
            <div className='product-info'>
                <h6 className='productName'>{name}</h6>
                <p className='priceTag'>price : ${price}</p>
                <p>Manufacturer : {seller}</p>
                <p>rating : {ratings} stars</p>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='cart-btn'>Add to cart <FontAwesomeIcon icon={faCartShopping} /></button>
        </div>
    );
};

export default Product;

