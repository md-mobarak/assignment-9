import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import './Review.css'


const Reviews = () => {
    const navigate = useNavigate()
    const [review, setReview] = useReviews()

    return (
        <div className='review-container'>
            <div className='all-card'>
                {
                    review.map(pd => <div className='single-card'>
                        <p>{pd.name}</p>
                        <img src={pd.img} width="100px" height="80px" alt="" />
                        <p>Rating:{pd.rating}</p>
                    </div>)
                }
                <button className='back-btn' onClick={() => navigate(-1)}>Back</button>
            </div>

        </div>
    );

};

export default Reviews;