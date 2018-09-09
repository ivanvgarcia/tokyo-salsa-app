import React from 'react';

const FeaturedEvent = () => {
    return (
        <div className="featured-event">
            <div className="featured-event__date">
                <p className="featured-event__month">Apr 6</p>
                <p className="featured-event__year">2018</p>
            </div>
            <div className="featured-event__instructor featured-event__instructor--1">
                <p className="featured-event__name">Hosted by Mitsue</p>
            </div>     
        </div> 
    );
}

export default FeaturedEvent;