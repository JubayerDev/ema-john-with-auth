import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <h5 className='order-summary'>Order Summary</h5>
            <p>Selected Items: {cart.length}</p>
            <p id="total-price">Total Price:</p>
            <p>Total Shipping Charge:</p>
            <p>Tax:</p>
            <h6>Grand Total:</h6>
            <button className='clear-cart-btn'>Clear Cart</button>
            <button className='review-btn'><small>Review Order</small></button>
        </div>
    );
};

export default Cart;