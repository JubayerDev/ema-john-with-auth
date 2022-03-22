import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    
    let total = 0;
    let shipping = 0;
    for (const product of cart) {
        total = total + product.price;
        shipping = shipping + product.shipping;
    }

    const tax = (total * 0.1).toFixed(2);
    const grandTotal = total + shipping + parseFloat(tax);

    return (
        <div className='cart'>
            <h5>Order Summary</h5>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${ total}</p>
            <p>Total Shipping Charge: ${ shipping}</p>
            <p>Tax: ${ tax}</p>
            <h6>Grand Total: ${ grandTotal.toFixed(2)}</h6>
            {/* <button>Clear Cart</button>
            <button><small>Review Order</small></button> */}
        </div>
    );
};

export default Cart;