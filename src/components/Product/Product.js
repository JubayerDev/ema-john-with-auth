import React from 'react';
import './Product.css';

const Product = (props) => {
    const { img, name, seller, price, ratings } = props.product;
    const { handleAddToCart } = props;
    return (
        <div className='product'>
            <img src={img} alt="productImg" />
            <div className="product-info">
                <p className="product-name">{name}</p>
                <p className="product-price">Price: ${price}</p>
                <p className='seller'><small>Manufacturer: {seller}</small></p>
                <p className='ratings'><small>Rating: {ratings} star</small></p>
            </div>
            <button className="product-btn" onClick={()=>handleAddToCart(props.product)}>
                <p>Add to cart</p>
            </button>
        </div>
    );
};

export default Product;