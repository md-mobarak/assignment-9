import React from 'react';
import './Card.css'

const Card = ({ card }) => {
    const { name, img, rating, review } = card
    return (
        <div className='rating-card'>
            <p>{name}</p>
            <img src={img} width="100px" height="80px" alt="" />
            <p>Rating:{rating}</p>
            <p title={review}><small>Review:{review.slice(0, 100) + '...'}</small></p>
        </div>
    );
};

export default Card;