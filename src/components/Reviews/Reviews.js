import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import './Review.css'


const Reviews = () => {
    const navigate = useNavigate()
    const [review, setReview] = useReviews()

    return (
        <div className='container'>
            <h1>What Our Customers Say!!</h1>
            <div className='review-container'>
                <div className='all-card'>
                    {
                        review.map(pd => <div className='single-card'>
                            <p>{pd.name}</p>
                            <img src={pd.img} width="100px" height="80px" alt="" />
                            <p>Rating:{pd.rating}</p>
                            <p title={pd.review}><small>Review:{pd.review.slice(0, 100) + '...'}</small></p>
                        </div>)
                    }
                    <button className='back-btn' onClick={() => navigate(-1)}>Back</button>
                </div>

            </div>
        </div>
    );

};

export default Reviews;