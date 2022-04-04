import React from 'react';
import './Card.css'

const Card = ({ card }) => {
    const { name, img, rating } = card
    return (
        <div className='rating-card'>
            <p>{name}</p>
            <img src={img} width="100px" height="80px" alt="" />
            <p>Rating:{rating}</p>
        </div>
    );
};

export default Card;