import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import Reviews from '../Reviews/Reviews';
import './Home.css'

const Home = () => {
    const navigate = useNavigate()
    const [review, setReview] = useReviews()
    let threeItems = review.slice(0, 3)
    console.log(threeItems);
    const img = 'https://img.freepik.com/free-photo/pair-trainers_144627-3799.jpg?t=st=1649001163~exp=1649001763~hmac=2c21a116bf8311e566bd72395ccc9ff80915abf330bbb4790cd2f3ee6081d479&w=740'
    return (
        <div>
            <div className='products'>
                <section className='products-info'>
                    <h1>Production Quality</h1>
                    <p>For many, the cost of high-quality shoes may seem uncomfortably high.
                        Premium shoes are worth the price,
                        though—they boast a high level of wearing comfort and are significantly longer-lasting than their cheaply mass-produced counterparts.
                        When considered in the long term, purchasing quality shoes is actually easier on the wallet.</p>
                    <button>Live demo</button>
                </section>
                <section className='products-img'>
                    <img src={img} width="85%" alt="" />
                </section>

            </div>
            <section className='customer-review'>
                <h1>Customer Review(3)</h1>
                <div className='rating-all-card'>
                    {

                        threeItems.map(pd => <div className='rating-card'>
                            <p>{pd.name}</p>
                            <img src={pd.img} width="100px" height="80px" alt="" />
                            <p>Rating:{pd.rating}</p>
                        </div>)
                    }

                </div>
                <button onClick={() => navigate(`/reviews`)}>See All Reviews</button>
            </section>
        </div>
    );
};

export default Home;