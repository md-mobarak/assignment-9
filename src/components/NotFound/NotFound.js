import React from 'react';
import './NotFound.css'
const NotFound = () => {
    const img = 'https://cdn.mos.cms.futurecdn.net/PuXipAW3AXUzUJ4uYyxPKC-1200-80.jpg'
    return (
        <div className='not-found'>
            <img src={img} alt="" />
        </div>
    );
};

export default NotFound;