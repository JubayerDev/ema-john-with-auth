import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    const { handleAddToCart, product } = props;
    const { img, name, seller, price, ratings } = product;
    return (
        <div className='product'>
            <img src={img} alt="productImg" />
            <div className="product-info">
                <p className="product-name">{name}</p>
                <p className="product-price">Price: ${price}</p>
                <p className='seller'><small>Manufacturer: {seller}</small></p>
                <p className='ratings'><small>Rating: {ratings} star</small></p>
            </div>
            <button className="product-btn" onClick={()=>handleAddToCart(product)}>
                <p>Add to cart</p>
                <FontAwesomeIcon icon={ faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;