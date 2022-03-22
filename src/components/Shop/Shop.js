import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    
    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        console.log(cart);
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)}
            </div>
            <div className="cart-container">
                <h5 className='order-summary'>Order Summary</h5>
                <p>Selected Items: {cart.length}</p>
                <p id="total-price">Total Price:</p>
                <p>Total Shipping Charge:</p>
                <p>Tax:</p>
                <h6>Grand Total:</h6>
                <button className='clear-cart-btn'>Clear Cart</button>
                <button className='review-btn'><small>Review Order</small></button>
            </div>
        </div>
    );
};

export default Shop;