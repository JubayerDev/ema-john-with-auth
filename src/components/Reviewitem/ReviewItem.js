import React from 'react';
import './ReviewItem.css';

const ReviewItem = ({product}) => {
    const { name, price, shipping, quantity } = product;
    return (
        <div>
            <h2>Review</h2>
        </div>
    );
};

export default ReviewItem;