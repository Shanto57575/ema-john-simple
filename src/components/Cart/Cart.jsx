import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {

    let total = 0;
    let totalShipping = 0;
    for (const product of cart) {
        total += product.price;
        totalShipping += product.shipping;
    }

    const vat = total * 7 / 100;
    const grandTotal = total + totalShipping + vat;
    return (
        <div className='cart'>
            <h3>Ordered summary</h3>
            <h3>Selected items : {cart.length}</h3>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${totalShipping}</p>
            <p>Vat : ${vat.toFixed(2)}</p>
            <p>Grand Total: ${grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;